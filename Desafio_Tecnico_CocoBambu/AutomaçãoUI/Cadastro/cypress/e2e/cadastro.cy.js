import { faker } from '@faker-js/faker'; // bibioteca para gera dados aleatorios

describe("Suíte de testes Cadastro", () => {

  let email;
  const nome = faker.person.fullName() 

  function gerarEmailAleatorio(nome) {
    nome = nome.replace(/\s/g, '') // regex para capturar o nome sem espaço para mesclar com o numero aleatorio e o dominio email
    const numeroAleatorio = Math.floor(Math.random() * 10000); // Gera um número aleatório para o email aleatorio
    return `${nome}${numeroAleatorio}@gmail.com`; 
  }

  beforeEach(() => {
    email = gerarEmailAleatorio(nome);
    cy.visit("/entrar");
    cy.contains('span', 'Cadastre-se').click()
  });

  it("#ST01 - Cadastro bem sucedido", () => {
    cy.preencherCampos(nome, email, "M@rvel500", "M@rvel500") // preenchimento dos dados 
    cy.selecionarEstado() //Selecionar Estado
    cy.termosEcondicao() // aceitar termos e condições

    cy.contains('button', 'CADASTRAR').click() 

    cy.autenticacao("AAAAAA") // autenticação
    // Validaçaão de confimarção do cadastro
    cy.contains('Onde você quer receber seu pedido?').should('be.visible');
  });

  it("#ST02 - Tentativa de cadastro com campos obrigatórios vazios  ", () => {
    // Selecionando campos, mas sem digitar nada
    cy.get('#ion-input-4').click()
    cy.get('#ion-input-5').click()
    cy.get('#ion-input-6').click()
    cy.get('#ion-input-7').click()

    cy.get('.ios').click();
    cy.contains('button', 'Cancel').click()

    // Validação das mesagens dos campos que são obrigatorios
    cy.contains("Nome completo obrigatório.").should('be.visible')
    cy.contains("E-mail é obrigatório.").should('be.visible')
    cy.contains("Senha é obrigatória.").should('be.visible')
    cy.contains("Confirmação de senha é obrigatória.").should('be.visible')
    cy.contains("Estado é obrigatório.").should('be.visible')

    // verificação botão CADASTRAR esteja desabilitado
    cy.contains('button', 'CADASTRAR').should('be.disabled')
  });

  it("#ST03 - Senha Forte", () => {
    cy.preencherCampos(nome, email, "DC@dc2025", "DC@dc2025") // preenchimento dos dados 
    cy.selecionarEstado() //Selecionar Estado
    cy.termosEcondicao() // aceitar termos e condições   
    cy.contains('button', 'CADASTRAR').should('not.be.disabled') // Validação botão CADASTRAR esteja habilitado
  });

  it("#ST04 - Senha fraca ", () => {
    cy.preencherCampos(nome, email, "math", "math") // preenchimento dos dados 
    cy.selecionarEstado() //Selecionar Estado
    cy.termosEcondicao() // aceitar termos e condições

    // Validação botão CADASTRAR esteja desabilitado e da mensagem de senha deve ter os requisitos minimo.
    cy.contains("Senha deve conter no mínimo").should('be.visible')
    cy.contains('button', 'CADASTRAR').should('be.disabled')
  });

  it("#ST05 - Senha e senha de confirmação diferentes ", () => {
    cy.preencherCampos(nome, email, "M@rvel500", "M@rve32") // preenchimento dos dados 
    cy.selecionarEstado() //Selecionar Estado
    cy.termosEcondicao() // aceitar termos e condições

    // Validação botão CADASTRAR esteja desabilitado e da mensagem  que a senha e a confirmação de senha são diferentes
    cy.contains("As senhas inseridas são diferentes.").should('be.visible')
    cy.contains('button', 'CADASTRAR').should('be.disabled')
  });

  it("#ST06 - Nome completo com menos 2 caracteres ", () => {
    cy.preencherCampos("Ma", email, "M@rvel500", "M@rvel500") // preenchimento dos dados 
    cy.selecionarEstado() //aelecionar Estado
    cy.termosEcondicao() // aceitar termos e condições

    // Validação botão CADASTRAR esteja desabilitado e da mensagem que o campo nome tem como requisito mais de 2 carecteres
    cy.contains("Nome completo deve conter mais de 2 caracteres.").should('be.visible')
    cy.contains('button', 'CADASTRAR').should('be.disabled')
  });

  it("#ST07 - Nome completo com caracteres especiais ", () => {
    cy.preencherCampos("Matheu$ Gama", email, "M@rvel500", "M@rvel500") // preenchimento dos dados 
    cy.selecionarEstado() //selecionar Estado
    cy.termosEcondicao() // aceitar termos e condições

    // Validação do botão CADASTRAR esteja desabilitado e da mensagem que o campo nome completo não aceita caracteres especiais
    cy.contains("Nome completo possui caracteres inválidos.").should('be.visible')
    cy.contains('button', 'CADASTRAR').should('be.disabled')
  });

  it("#ST08 - Nome completo com caracteres numéricos ", () => {
    cy.preencherCampos("m7h3us Gama", email, "M@rvel500", "M@rvel500") // preenchimento dos dados // preenchimento dos dados 
    cy.selecionarEstado() //selecionar Estado
    cy.termosEcondicao() // aceitar termos e condições

    // verificação botão CADASTRAR esteja desabilitado e da mensagem que o campo nome completo não aceita caracteres númericos
    cy.contains("Nome completo possui caracteres inválidos.").should('be.visible')
    cy.contains('button', 'CADASTRAR').should('be.disabled')
  });

  it("#ST09 - E-mail inválido ", () => {
    cy.preencherCampos("Matheus Gama", "matheus.com", "M@rvel500", "M@rvel500") // preenchimento dos dados 
    cy.selecionarEstado() //selecionar Estado
    cy.termosEcondicao() // aceitar termos e condições
    // verificação botão CADASTRAR esteja desabilitado e da mensagem que o email que foi informado é inválido
    cy.contains("E-mail inválido.").should('be.visible')
    cy.contains('button', 'CADASTRAR').should('be.disabled')
  });

  it("#ST10 - Tentativa de cadastro sem aceitar os termos e condições ", () => {
    cy.preencherCampos(nome, email, "M@rvel500", "M@rvel500") // preenchimento dos dados 
    cy.selecionarEstado() //selecionar Estado
    cy.contains('button', 'CADASTRAR').should('be.disabled') // Validação de botão cadastrar se está desabilitado
  });

  it("#ST11 - Inserção de oken inválido na autenticação ", () => {
    cy.preencherCampos(nome, email, "M@rvel500", "M@rvel500") // preenchimento dos dados 
    cy.selecionarEstado() //selecionar Estado
    cy.termosEcondicao() // aceitar termos e condições
    cy.contains('button', 'CADASTRAR').click()
    cy.autenticacao("ABCDEF") // Autenticação --> Passando um token invalido
    cy.contains("O código digitado está inválido ou expirou.").should('be.visible')
  });
});

