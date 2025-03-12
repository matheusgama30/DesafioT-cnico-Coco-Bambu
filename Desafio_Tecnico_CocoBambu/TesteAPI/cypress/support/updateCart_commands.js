Cypress.Commands.add('atualizarProduto', (produto, quantidade) => {
    cy.api({
      method: 'PUT',
      url: "/1",
      headers: { 'Content-Type': 'application/json' },
      body: {
        merge: false, // Mantém os produtos existentes no carrinho
        products: [
          { id: produto, quantity: quantidade,},
        ],
      },
      })
  })

  Cypress.Commands.add('ValidarAtaulizacao', (produto, quantidade, response) => {
    const VerificarProduto = response.body.products.some(p => p.id === produto && p.quantity === quantidade);
    expect(VerificarProduto, `Deve existir um produto com id ${produto} e a quantidade ${quantidade}`).to.be.true
  })

