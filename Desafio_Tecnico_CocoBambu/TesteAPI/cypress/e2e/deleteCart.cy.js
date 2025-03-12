describe('deletar itens ao carrinho', () => {


  it('Deve deletar produtos ao carrinho com id 1', () => {
    cy.deletarProduto(1)
    .then((response) => {
      cy.log('Resposta:', JSON.stringify(response.body));
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('isDeleted', true);
    });
  });

  it('Remover um item que não existe no carrinho', () => {
      cy.deletarProduto(9999)
      .then((response) => {
      cy.log('Resposta:', JSON.stringify(response.body));
      expect(response.status).to.eq(404);
    });
  });
});

  