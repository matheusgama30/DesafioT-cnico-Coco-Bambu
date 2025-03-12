# Desafio TécnicoDesafio Técnico Garantindo a Qualidade no Coco Bambu!

### Neste repositório contém:
- Identificação de Fluxos Importantes 
- Teste de Automação UI  com Cypress
- Teste de Automação API com Cypress

## Identificação de Fluxos Importantes

Este documento descreve os fluxos essenciais para garantir uma boa experiência do usuário e a realização de compras na aplicação do Coco Bambu. A seguir, estão detalhados os fluxos de Cadastro, Carrinho e Carteira de Pagamento, além dos riscos associados a cada um deles.

Em resumo destaca a importância de cada fluxo e os riscos associados. A otimização desses processos deve garantir que o usuário tenha uma experiência agradável e que a compra seja concluída com sucesso.

---

## Teste de Automação UI  com Cypress

Este projeto contém testes automatizados desenvolvidos com Cypress para validar funcionalidades da aplicação do Coco bambu - [Aplicação Automatizada](https://app-hom.cocobambu.com/delivery)

### Pré-requisitos

- Node.js - versão 20.11.0 ou superiorou superior
    - Instalação: 
        - Acesse o site oficial do Node.js: https://nodejs.org/.
        - Baixe o instalador adequado para o seu sistema 
        - Execute o instalador e siga as instruções na tela.

### Configuração do Ambiente

1. Clone o Repositório
    - Realize o clone do projeto.
    - `git clone https://github.com/seu-usuario/seu-repositorio.git`

2. Acesse a Pasta do Projeto
    - `cd Desafio_Tecnico_CocoBambu\AutomaçãoUI\Cadastro`

3. Instale as Dependências
    - execute o comando no terminal `npm install`

4.  Instale o Cypress
    - execute o comando no terminal `npm install cypress --save-dev`

5. Instale o Faker.js
    - execute o comando no terminal `npm install @faker-js/faker --save-dev`
    - O Faker.js é uma biblioteca que gera dados falsos e aleatórios, como nomes, e-mails, endereços e números, sendo útil para utilizar nessa automação.

6. Como Rodar os Testes
    - Para rodar os testes, execute:
        1.  o comando no terminal `npx cypress open`
        2.  Escolha o navegador desejado
        3. Selelcione a Spec `cadastro.cy.js` para rodar os testes.

---

## Teste de Automação API

Este projeto inclui testes automatizados com Cypress para verificar se as funcionalidades da API estão operando corretamente.

### Pré-requisitos

- Node.js - versão 20.11.0 ou superiorou superior
    - Instalação: 
        - Acesse o site oficial do Node.js: https://nodejs.org/
        - Baixe o instalador adequado para o seu sistema 
        - Execute o instalador e siga as instruções na tela.

### Configuração do Ambiente

1. Clone o Repositório
    - Realize o clone do projeto.
    - `git clone https://github.com/seu-usuario/seu-repositorio.git`

2. Acesse a Pasta do Projeto
    - `cd Desafio_Tecnico_CocoBambu\TesteAPI`

3. Instale as Dependências
    - execute o comando no terminal `npm install`

4.  Instale o Cypress
    - execute o comando no terminal `npm install cypress --save-dev`

5. Instale o plugin cypress-plugin-api
    - execute o comando no terminal `npm install cypress-plugin-api --save-dev`
    - O cypress-plugin-api é um plugin que facilita a visualização e depuração de testes de API no Cypress. Ele adiciona o comando cy.api(), que funciona como cy.request(), mas com uma interface melhor no painel do Cypress.

6. Como Rodar os Testes
    - Para rodar os testes, execute:
        1. o comando no terminal `npx cypress open`
        2.  Escolha o navegador desejado
        3. Selelcione a Spec desejada para rodar os testes

7. Como Rodar os Testes em modo 
    1.  execute o comando no terminal `npm run test` 