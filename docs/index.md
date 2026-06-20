# 🌍 EcoNotícias

> Um portal moderno de notícias estáticas estruturado com **MkDocs Material** e integrado ao **Decap CMS** para edição direto do seu dispositivo móvel.

---

## ⚡ Recursos Principais

* 📱 **Edição via Celular:** Escreva e publique notícias de qualquer lugar acessando `/admin`.
* ⚡ **Desempenho Extremo:** Site 100% estático gerado com MkDocs. Tempo de carregamento quase instantâneo.
* 🎨 **Visual Moderno e Premium:** Estilizado com o prestigiado tema **Material for MkDocs**, incluindo alternância de modo escuro e claro, navegação fluida e busca inteligente.
* 🤖 **Sem Banco de Dados:** Todo o conteúdo é persistido em arquivos Markdown diretamente no seu repositório Git.

---

## 🚀 Como acessar o Painel Administrativo

Acesse a página administrativa local ou em produção para gerenciar suas publicações:

👉 **[Ir para o Painel Administrativo](/admin/)** *(Disponível após iniciar os servidores ou publicar o site)*

---

## 📂 Estrutura do Projeto

Aqui está como o seu portal de notícias está organizado:

```text
├── docs/                     # Todos os arquivos fonte do site
│   ├── admin/                # Configuração do painel Decap CMS
│   │   ├── index.html        # Interface do Decap CMS
│   │   └── config.yml        # Definição dos campos do formulário
│   ├── noticias/             # Seção de notícias do portal
│   │   ├── .authors.yml      # Cadastro dos autores
│   │   └── posts/            # Arquivos Markdown de cada notícia
│   └── index.md              # Esta página inicial
├── venv/                     # Ambiente virtual Python
└── mkdocs.yml                # Configuração global do MkDocs
```

---

## 🛠️ Executando Localmente

Para rodar e testar tudo na sua máquina:

1. **Ative o ambiente virtual e inicie o site MkDocs:**
   ```bash
   source venv/bin/activate
   mkdocs serve
   ```
   *O site estará disponível em `http://127.0.0.1:8000`*

2. **Inicie o servidor de proxy local do Decap CMS:**
   *(Em um novo terminal)*
   ```bash
   npx decap-server
   ```
   *Isso ativa a sincronização local de arquivos na porta 8081.*

3. **Acesse o painel administrativo:**
   Abra `http://127.0.0.1:8000/admin/` no navegador para começar a publicar localmente.
