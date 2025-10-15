# 🧙‍♂️ Cadastro de Itens Mágicos e Personagens

Aplicação Angular desenvolvida com tema **RPG medieval**, permitindo o **cadastro e visualização de itens mágicos e personagens**.  
O projeto foi criado para fins educacionais, praticando conceitos de **rotas, data binding e componentização** no Angular 18.

---

## ⚔️ Funcionalidades

### 🧪 Cadastro de Itens Mágicos
- Campos: **Nome**, **Tipo**, **Poder** e **Imagem (URL)**  
- Exibe os itens cadastrados em **cards estilizados** com aparência de pergaminho.  
- Caso a imagem não seja encontrada, é exibido um **placeholder temático**.  

### 🧝 Cadastro de Personagens
- Campos: **Nome**, **Raça**, **Nível**, **Cor de Fundo** e **Imagem (URL)**  
- Cada personagem é exibido em um card colorido com os dados e a imagem.  
- O **input de cor** (`<input type="color">`) altera dinamicamente o fundo do card.  

---

## 🧭 Estrutura de Rotas

| Rota | Tela |
|------|------|
| `/itens-magicos` | Cadastro de Itens Mágicos |
| `/personagens`   | Cadastro de Personagens   |

A navegação é feita através de uma **navbar** fixa no topo da aplicação.

---

## 🏗️ Tecnologias Utilizadas

- [Angular 18 (standalone components)](https://angular.dev)
- HTML5 / CSS3
- TypeScript
- FormsModule / NgModel
- Rotas Angular (`@angular/router`)
- Estilo customizado com tema **Dungeons & Dragons**

---

## 🎨 Tema e Estilo

O layout utiliza um **tema dark medieval** com:
- Fonte [MedievalSharp](https://fonts.google.com/specimen/MedievalSharp)
- Bordas douradas e fundo de “dungeon”
- Ícones e emojis RPG para dar vida à interface  

---

## ⚙️ Instalação e Execução

### Pré-requisitos
- Node.js 20+  
- Angular CLI 18+

### Passos
```bash
# 1️⃣ Instalar dependências
npm install

# 2️⃣ Rodar o projeto em modo desenvolvimento
ng serve

# 3️⃣ Abrir no navegador
http://localhost:4200
