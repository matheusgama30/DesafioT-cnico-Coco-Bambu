Cypress.Commands.add('deletarProduto', (id) => {
    cy.api({
      method: 'DELETE',
      url: `/${id}`,
      failOnStatusCode: false,
      headers: { 'Content-Type': 'application/json' },
    })
  })

