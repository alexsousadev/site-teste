# 🌍 EcoNotícias - Portal de Notícias Estático

Este repositório contém a estrutura de um portal de notícias estático ultra rápido construído com **MkDocs** e integrado com **Decap CMS** para edição e publicação diretamente do celular ou navegador via Cloudflare Pages.

## 🚀 Como acessar o Painel Administrativo

Em produção:
`https://<seu-site>.pages.dev/admin/`

## 🛠️ Desenvolvimento Local

1. Ative o ambiente virtual e execute o MkDocs:
   ```bash
   source venv/bin/activate
   mkdocs serve -a 127.0.0.1:8002
   ```

2. Execute o servidor de proxy local do Decap CMS:
   ```bash
   npx decap-server
   ```

3. Acesse `http://127.0.0.1:8002/admin/`.
