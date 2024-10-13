
# ASCII Parcerias EJ

Este repositório é dividido em duas partes: `ascii-parcerias-backend` e `ascii-parcerias-frontend`, que correspondem ao backend e frontend do projeto ASCII Parcerias EJ. O projeto visa gerenciar parcerias estratégicas da empresa júnior ASCII, facilitando o controle de dados, benefícios e contratos relacionados às parcerias.

## Índice

-   [Visão Geral](#vis%C3%A3o-geral)
-   [Tecnologias Utilizadas](#tecnologias-utilizadas)
-   [Estrutura do Projeto](#estrutura-do-projeto)
-   [Instalação e Configuração](#instala%C3%A7%C3%A3o-e-configura%C3%A7%C3%A3o)
-   [Como Contribuir](#como-contribuir)
-   [Licença](#licen%C3%A7a)
-   [Contato](#contato)

## Visão Geral

Este projeto tem como objetivo fornecer uma plataforma para gerenciar e organizar parcerias entre a empresa júnior e outras entidades, permitindo o cadastro de parcerias, benefícios, documentos e geração de relatórios.

## Tecnologias Utilizadas

### Backend

-   **Node.js**: Ambiente de execução JavaScript.
-   **Express**: Framework web para Node.js.
-   **Liquibase**: Ferramenta para versionamento e migração de banco de dados.
-   **MySQL**: Banco de dados relacional.

### Frontend

-   **React**: Biblioteca JavaScript para construção de interfaces.
-   **Tailwind CSS**: Framework CSS utilitário para estilização.

## Estrutura do Projeto

### Backend (`ascii-parcerias-backend`)

O backend está estruturado da seguinte forma:
`Back-End/
├── controller/
├── model/
│   ├── example-changelog.sql
│   ├── liquibase.advanced.flowfile.yaml
│   ├── liquibase.checks-package.yaml
│   ├── liquibase.endstage.flow
│   ├── liquibase.flowfile.yaml
│   ├── liquibase.flowvariables.yaml
│   └── liquibase.properties
├── view/
│   └── a.txt
└── instruções/` 

### Frontend (`ascii-parcerias-frontend`)

O frontend está estruturado da seguinte forma:


Front-End/
├── controller/
├── model/
├── React-ParceriasEJ/
│   ├── public/
│   │   └── vite.svg
│   ├── src/
│   │   ├── assets/
│   │   │   └── react.svg
│   │   ├── components/
│   │   │   ├── Body.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Header.jsx
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   ├── main.jsx
│   │   └── output.css
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── README.md
│   ├── tailwind.config.js
│   └── vite.config.js
└── view/
    └── instruções/

## Instalação e Configuração

### Pré-requisitos

-   Node.js e npm
-   Express
-   MySQL
-   Liquibase

### Backend

1.  Clone o repositório e acesse a pasta `ascii-parcerias-backend`:
        
    
    `git clone https://github.com/seu-usuario/ascii-parcerias-backend.git
    cd ascii-parcerias-backend` 
    
2.  Instale as dependências:
            
    `npm install` 
    
3.  Configure o banco de dados e as variáveis de ambiente no arquivo `.env` (baseie-se em `.env.example`).
4.  Execute as migrações do banco de dados:
            
    `liquibase update` 
    
5.  Inicie o servidor:
            
    `npm start` 
    

### Frontend

1.  Clone o repositório e acesse a pasta `ascii-parcerias-frontend`:
            
    `git clone https://github.com/seu-usuario/ascii-parcerias-frontend.git
    cd ascii-parcerias-frontend` 
    
2.  Instale as dependências:
            
    `npm install` 
    
3.  Configure o Tailwind CSS:
    -   Edite `tailwind.config.js` e adicione as configurações conforme a documentação do Tailwind.
4.  Inicie o servidor de desenvolvimento:
        
    `npm start` 
    

## Como Contribuir

1.  Faça um fork do projeto.
2.  Crie uma branch para sua feature (`git checkout -b minha-feature`).
3.  Commit suas alterações (`git commit -m 'Minha nova feature'`).
4.  Faça push para a branch (`git push origin minha-feature`).
5.  Abra um Pull Request.

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo `LICENSE` para obter mais informações.


----------