
Cypress.Commands.add("preencherCampos", (nome, email, senha, confirmarSenha) => {
    cy.get('#ion-input-4').click().type(nome)
    cy.get('#ion-input-5').click().type(email)
    cy.get('#ion-input-6').click().type(senha)
    cy.get('#ion-input-7').click().type(confirmarSenha)
  });

Cypress.Commands.add("selecionarEstado", () => {
    cy.get('.ios').click()
    cy.get('.action-sheet-container > :nth-child(1) > :nth-child(8)').click()
  });

  Cypress.Commands.add("termosEcondicao", () => {
    cy.get('.checkbox.ion-invalid > .ng-untouched').click()
    cy.contains('button', 'ACEITAR').click()
  });

  Cypress.Commands.add("autenticacao", (token) => {
    cy.contains('button', 'FECHAR').click()
    cy.get('input').filter('[type="text"]').first().click().type(token)
    cy.contains('button', ' ACESSAR ').click()
  });