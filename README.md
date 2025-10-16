# 🧙‍♂️ Cadastro de Itens Mágicos e Personagens

Uma aplicação **Angular 18** com tema **RPG medieval**, criada para fins educacionais e inspirada em **Dungeons & Dragons**.  
Permite o **cadastro e visualização de itens mágicos e personagens** em uma interface encantada ✨ com efeitos, tema dinâmico e navegação intuitiva.

---

## ⚔️ Funcionalidades

### 🧪 **Cadastro de Itens Mágicos**
- Campos: **Nome**, **Tipo**, **Poder** e **Imagem (URL)**  
- Exibição dos itens em **cards temáticos** com moldura dourada e brilho mágico  
- Caso a imagem seja inválida ou ausente, aparece um **placeholder temático**  
- Transições suaves e efeitos de luz nas interações
- Funções completas de CRUD:
- - ➕ Adicionar novo item
- - ✏️ Editar item existente
- - 🗑️ Excluir item
- - 💾 Dados salvos automaticamente no localStorage

---

### 🧝 **Cadastro de Personagens**
- Campos: **Nome**, **Raça**, **Nível**, **Cor de Fundo** e **Imagem (URL)**  
- Cada personagem é mostrado em um card personalizado com a cor escolhida  
- O **campo de cor** (`<input type="color">`) altera dinamicamente o fundo  
- Layout totalmente responsivo e adaptado para modo claro/escuro  
- Também possui CRUD completo com persistência local:
- - ➕ Adicionar personagem
- - ✏️ Editar e atualizar dados
- - 🗑️ Excluir personagem
- - 💾 Dados persistem mesmo após recarregar a página

---

### 🌗 Tema Dinâmico Global
- Alternância entre modo claro e escuro com botão interativo ☀️ / 🌑
- Tema salvo automaticamente no **localStorage**
- Transição suave entre temas com efeitos mágicos

---

### 📜 Grimório de Magias (Spells List)
- Catálogo interativo de magias dividido por nível
- Filtros por nome e nível
- Efeitos visuais e animações inspiradas em grimórios encantados

---

## 🧭 Estrutura de Rotas

| Caminho | Página |
|----------|--------|
| `/itens-magicos` | 🪄 Cadastro de Itens Mágicos |
| `/personagens`   | 🛡️ Cadastro de Personagens |
| `/spells`        | 📜 Grimório de Magias |

A navegação é feita via **navbar fixa**, com um botão de **mudança de tema** (☀️/🌑) animado no canto superior direito.

---

### 💾 Persistência de Dados

O projeto utiliza um serviço compartilhado (**StorageService**) responsável por gerenciar o armazenamento local via **localStorage**, permitindo que os dados permaneçam mesmo após recarregar ou fechar o navegador.

---

## 🏗️ Tecnologias Utilizadas

- ⚙️ [**Angular 18 (Standalone Components)**](https://angular.dev)
- 💾 **TypeScript**  
- 🎨 **HTML5 + CSS3**  
- 🔁 **Angular Router** (rotas e navegação SPA)  
- 🧩 **FormsModule / NgModel** (two-way data binding)  
- 💡 **LocalStorage Service personalizado**
- 🌗 **Tema dinâmico** com persistência via `localStorage`

---

## 🎨 Tema e Estilo

O projeto adota um **tema dark medieval** inspirado em **RPGs clássicos**, com:
- 🖋️ Fonte: [**Cinzel**](https://fonts.google.com/specimen/Cinzel) e [**UnifrakturCook**](https://fonts.google.com/specimen/UnifrakturCook)  
- 🌌 Fundo texturizado estilo dungeon (`dark-mosaic`)  
- ✨ Bordas douradas com efeitos de brilho e animação suave  
- 🔮 Modo escuro/luz com animação de transição e botão interativo  

---

## ⚙️ Instalação e Execução

### 🔧 Pré-requisitos
- [Node.js 20+](https://nodejs.org/)
- [Angular CLI 18+](https://angular.dev/tools/cli)

### 🚀 Rodando o projeto
```bash
# 1️⃣ Instalar dependências
npm install

# 2️⃣ Iniciar o servidor de desenvolvimento
ng serve

# 3️⃣ Abrir no navegador
http://localhost:4200
```

---

## 🧠 Conceitos Praticados
- Componentização avançada com standalone: true
- Comunicação entre componentes
- Two-way data binding com [(ngModel)]
- Rotas dinâmicas e lazy loading
- Gerenciamento de temas e estilos reativos

---

## 🧩 Estrutura do Projeto
```pgsql
cadastro-magico/
├── public/
│   ├── favicon.ico
│   └── assets/
│       └── rpg/
│           ├── item-placeholder.png
│           └── personagem-placeholder.png
│
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── itens-magicos/
│   │   │   ├── personagens/
│   │   │   ├── spells-list/
│   │   │   └── navbar/
│   │   ├── shared/
│   │   │   ├── theme-toggle/
│   │   │   └── services/
│   │   │       └── storage.service.ts
│   │   ├── app.component.ts
│   │   ├── app.routes.ts
│   │   └── app.config.ts
│   │
│   ├── styles/
│   │   ├── panel-card.css
│   │   └── styles.css
│   │
│   ├── main.ts
│   └── index.html
│
└── angular.json
```

---

## 🧭 Licença

Este projeto é de uso educacional e pessoal.
Sinta-se livre para estudar, modificar e expandir 🛠️
