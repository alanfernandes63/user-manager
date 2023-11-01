## User manager

#### projeto criado para gerenciar usuários
### tecnologias e ferramentas utilizadas
- Reactjs https://react.dev/
- Nextjs https://nextjs.org/
- React Hook Form https://react-hook-form.com/
- tailwind CSS https://tailwindcss.com/
- react-input-mask https://github.com/sanniassin/react-input-mask
- axios https://github.com/axios/axios
- React-toastify https://fkhadra.github.io/react-toastify/introduction
- cypress https://www.cypress.io/
- nodejs https://nodejs.org/en
- vscode https://code.visualstudio.com/
#### Requisitos necessários para rodar a aplicação
- Nodejs versão >= v18.18.2
#### Rodando a aplicação
1. Baixar o projeto deste repositório
2. Baixar as dependências necessárias, no diretório raiz do projeto executar o seguinte comando
``npm install``
4. Depois de ter finalizado o download das depedências você pode subir a aplicação no modo de desenvolvimento com o seguinte comando
 ``npm run dev``
 5. Se a porta 3000 estiver livre você pode acessar a aplicação neste link http://localhost:3000/
 ### Rodando os testes
 6. Para rodar os teste, você deve executar o seguinte comando na raiz do projeto
 ``npx cypress run --spec "cypress/e2e/user.cy.js"``

### Solução utilizada

Foi utilizado o Next.js, pois é a recomendação dos desenvolvedores do React para criar novas aplicações. Frameworks como o Next.js são indicados para facilitar o desenvolvimento de novas aplicações React. Além disso, foram utilizadas algumas ferramentas, como o Tailwind CSS, Axios, React-Input-Mask e React-Toastify, para facilitar o desenvolvimento, uma vez que elas já possuem muitos recursos implementados e podem ser facilmente integradas. Para os testes, optou-se pelo Cypress, uma ferramenta simples de implementar testes end-to-end.

### Tela de Cadastro de usuários
![image](https://github.com/alanfernandes63/user-manager/assets/42004203/967de7f4-4322-4e26-ac6d-df4a6dab1e6e)

### Tela de consulta de usuários
![image](https://github.com/alanfernandes63/user-manager/assets/42004203/319c5292-cb7c-46fa-8c8f-33582a2cddda)

