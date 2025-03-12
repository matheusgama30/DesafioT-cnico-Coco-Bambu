# Desafio Técnico Garantindo a Qualidade no Coco Bambu!

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

**Link**: [Suíte de Testes - Cadastro](https://github.com/matheusgama30/DesafioT-cnico-Coco-Bambu/blob/main/Desafio_Tecnico_CocoBambu/Automa%C3%A7%C3%A3oUI/Su%C3%ADtedetestes.md)

### Pré-requisitos

- Node.js - versão 20.11.0 ou superiorou superior
    - Instalação: 
        - Acesse o site oficial do Node.js: https://nodejs.org/.
        - Baixe o instalador adequado para o seu sistema 
        - Execute o instalador e siga as instruções na tela.

### Configuração do Ambiente

1. Clone o Repositório
    - Realize o clone do projeto.
    - `git clone https://github.com/matheusgama30/DesafioT-cnico-Coco-Bambu.git`

2. Acesse a Pasta do Projeto
    - `cd Desafio_Tecnico_CocoBambu\AutomaçãoUI`

3. Instale as Dependências
    - execute o comando no terminal `npm install`
    - Aqui irá instalar a biblioteca Faker.js
    - O Faker.js é uma biblioteca que gera dados falsos e aleatórios, como nomes, e-mails, endereços e números, sendo útil para utilizar nessa automação.

4.  Instale Dependências Cypress
    - `cd Desafio_Tecnico_CocoBambu\AutomaçãoUI\Cadastro`
    - execute o comando no terminal `npm install`

5. Como Rodar os Testes
    - Para rodar os testes, execute:
        1.  o comando no terminal `npx cypress open`
        2.  Escolha o navegador desejado
        3. Selelcione a Spec `cadastro.cy.js` para rodar os testes.

---

## Teste de Automação API

Este projeto inclui testes automatizados com Cypress para verificar se as funcionalidades da API estão operando corretamente.

**Link**: [Teste de Automação API](https://github.com/matheusgama30/DesafioT-cnico-Coco-Bambu/blob/main/Desafio_Tecnico_CocoBambu/TesteAPI/Automa%C3%A7%C3%A3oAPI.md)

### Pré-requisitos

- Node.js - versão 20.11.0 ou superiorou superior
    - Instalação: 
        - Acesse o site oficial do Node.js: https://nodejs.org/
        - Baixe o instalador adequado para o seu sistema 
        - Execute o instalador e siga as instruções na tela.

### Configuração do Ambiente

1. Clone o Repositório
    - Realize o clone do projeto. (Caso já tenha feito o clone do repositrio no procedimento anterior, não precisa realizar novamente!)
    - `git clone https://github.com/matheusgama30/DesafioT-cnico-Coco-Bambu.git`

2. Acesse a Pasta do Projeto
    - `cd Desafio_Tecnico_CocoBambu\TesteAPI`

3. Instale as Dependências
    - execute o comando no terminal `npm install`
    - **cypress-plugin-api** é um plugin que facilita a visualização e depuração de testes de API no Cypress. Ele adiciona o comando cy.api(), que funciona como cy.request(), mas com uma interface melhor no painel do Cypress.

4. Como Rodar os Testes
    - Para rodar os testes, execute:
        1. o comando no terminal `npx cypress open`
        2.  Escolha o navegador desejado
        3. Selelcione a Spec desejada para rodar os testes

5. Como Rodar os Testes em modo headless
    1.  execute o comando no terminal `npm run test` 
