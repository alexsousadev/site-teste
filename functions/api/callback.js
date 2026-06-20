export async function onRequest(context) {
  const { env, request } = context;
  const url = new URL(request.url);
  const code = url.searchParams.get("code");

  if (!code) {
    return new Response("Erro: Código de autorização não recebido do GitHub.", { status: 400 });
  }

  // Faz a requisição para o GitHub trocar o código temporário pelo Token de Acesso
  const response = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "accept": "application/json",
    },
    body: JSON.stringify({
      client_id: env.GITHUB_CLIENT_ID,
      client_secret: env.GITHUB_CLIENT_SECRET,
      code,
    }),
  });

  const data = await response.json();

  if (data.error) {
    return new Response(`Erro na autenticação com o GitHub: ${data.error_description || data.error}`, { status: 400 });
  }

  const token = data.access_token;

  // Script que injeta o token de volta no Decap CMS rodando no navegador do usuário
  const script = `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <title>Autenticado</title>
    </head>
    <body>
      <p>Autenticação bem-sucedida! Redirecionando para o painel...</p>
      <script>
        const receiveMessage = (e) => {
          // Envia o token para a janela principal do Decap CMS
          window.opener.postMessage(
            'authorization:github:success:${JSON.stringify({ token, provider: 'github' })}',
            e.origin
          );
        };
        window.addEventListener("message", receiveMessage, false);
        window.opener.postMessage("authorizing:github", "*");
      </script>
    </body>
    </html>
  `;

  return new Response(script, {
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}
