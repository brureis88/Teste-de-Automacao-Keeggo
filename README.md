<h1 align="center">
    <p> 
        Teste de Automação Keeggo
    </p>
</h1>

## Sobre:
Projeto criado para apresentação de testes automatizados utilizando o **Cypress e Cucumber**.

## Framework:
 - Cypress

## Ferramentas:
 - [NodeJS](https://nodejs.org/pt-br/)
 - [Visual Studio Code](https://code.visualstudio.com/)
 - Cucumber

## Instalação e Configuração do Ambiente:

Após as instalações do NodeJS e VS Code, com o VS Code aberto deve-se abrir uma pasta em que ficarão os arquivos do projeto, abrir o terminal e executar os comandos abaixo:

- Instalação do Cypress:
```bash
npm install cypress@9.1.0 --save -include=dev
```

- Instalação do Cucumber:
```bash
npm install --save-dev cypress-cucumber-preprocessor
```

- Instalação do Xpath:
```bash
npm install -D cypress-xpath
```

- Configuração do Cucumber:

(Adicionar no arquivo 'plugin/index.js' o script):
```bash
const cucumber = require ('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}
```

(Adicionar no arquivo package.json' o script):
```Bash
  "cypress-cucumber-preprocessor": {
    "nonGlobalStepDefinitions": true
  }
```
(Adicionar no arquivo cypress.json' o script):
```bash
{
    "testFiles": "**/*.feature"
}
```
- Configuração do Xpath:

(Adicionar no arquivo 'support/index.js' o script):
```bash
require('cypress-xpath')
```

## Execução dos Testes:
Para executar os testes deve-se utilizar no terminal do VS Code o comando abaixo:
```bash
npm run test
```

Após o comando, será aberto o navegador e deve-se clicar no teste que deseja ser executado individualmente ou clicar no botão "Run 5 integration specs" para rodar todos de uma vez.
