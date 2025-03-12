Cypress.Commands.add('adicionarProduto', (produto, quantidade) => {
    cy.api({
        method: 'POST',
        url: '/add',
        failOnStatusCode: false,
        headers: {'Content-Type': 'application/json'},
        body: { userId: 5,
          products: [
            { id: produto, quantity: quantidade }
          ],
        },
      })
  })

  Cypress.Commands.add('ValidarProdutos', (produto, quantidade, response) => {
    const VerificarProduto = response.body.products.some(p => p.id === produto && p.quantity === quantidade);
    expect(VerificarProduto, `Deve existir um produto com id ${produto} e a quantidade ${quantidade}`).to.be.true
  })
