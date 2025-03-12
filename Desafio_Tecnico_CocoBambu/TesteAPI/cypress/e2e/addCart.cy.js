describe('Adicionar itens ao carrinho', () => {

  it('Adicionar um produto válido ao carrinho ', () => {
    cy.adicionarProduto(10, 6)
    .then((response) => {
      cy.log('Resposta:', JSON.stringify(response.body));

      // Verifica se algum produto do array bate com a condição
      expect(response.status).to.eq(201); // Verifica status code
      cy.ValidarProdutos(10, 6, response)

    });
  });

  
  it('Adicionar vários produtos ao mesmo tempoo', () => {
    cy.api({
      method: 'POST',
      url: '/add',
      headers: {'Content-Type': 'application/json'},
      body: {
        userId: 1,
        products: [
          { id: 27, quantity: 5 },
          { id: 41, quantity: 23 }
        ],
      },
    }).then((response) => {
      cy.log('Resposta:', JSON.stringify(response.body));
      expect(response.status).to.eq(201); // Verifica status code
      cy.ValidarProdutos(27, 5, response)
      cy.ValidarProdutos(41, 23, response)
    });
  });


  it('Adicionar um item com a quantidade igual a 0', () => {
    cy.adicionarProduto(15, 0)
    .then((response) => {
      cy.log('Resposta:', JSON.stringify(response.body));
      expect(response.status).to.eq(201); // Verifica status code
      const VerificarProduto = response.body.products.some(p => p.id === 15 && p.quantity === 1);
    expect(VerificarProduto, `Mesmo passando a quantidade igual a 0, API retornará a quantidade igual a 1 por padrão`).to.be.true
    });
  });


  it('Adicionar um item com quantidade inválida', () => {
    cy.adicionarProduto(10, -6)
    .then((response) => {
      cy.log('Resposta:', JSON.stringify(response.body));
      expect(response.status).to.eq(400); // Verifica status code
    });
  });
  

  it('Adicionar um produto inexistente', () => {
    cy.adicionarProduto(9827, 6)
    .then((response) => {
      cy.log('Resposta:', JSON.stringify(response.body));
      expect(response.status).to.eq(404)
    });
  });
});

  