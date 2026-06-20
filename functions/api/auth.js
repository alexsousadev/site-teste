export async function onRequest(context) {
  const { env } = context;
  const client_id = env.GITHUB_CLIENT_ID;

  // Se as credenciais não estiverem configuradas na Cloudflare, alerta o usuário
  if (!client_id) {
    return new Response("Erro: GITHUB_CLIENT_ID não está configurado nas variáveis de ambiente da Cloudflare.", { status: 500 });
  }

  // Redireciona o usuário para a página de autorização do GitHub
  // O escopo 'repo' garante que apenas quem tem acesso de escrita ao repositório possa logar
  const authUrl = `https://github.com/login/oauth/authorize?client_id=${client_id}&scope=repo,user`;
  
  return Response.redirect(authUrl, 302);
}
