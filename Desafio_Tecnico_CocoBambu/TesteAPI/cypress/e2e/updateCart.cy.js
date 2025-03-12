describe('Atualizar itens ao carrinho', () => {

    it('Atualizar um carrinho existente com produtos novos', () => {
      cy.atualizarProduto(10, 9)
      .then((response) => {
        expect(response.status).to.eq(200);
        cy.ValidarAtaulizacao(10, 9, response)
      });
    });


    it('Atualizar um carrinho que não existe', () => {
      cy.api({
        method: 'PUT', 
        url: '/09321',
        failOnStatusCode: false,
        headers: { 'Content-Type': 'application/json' },
        body: {
          merge: true, // Mantém os produtos existentes no carrinho
          products: [
            { id: 10, quantity: 8},
          ],
        },
      }).then((response) => {
        cy.log('Resposta:', JSON.stringify(response.body));
        expect(response.status).to.eq(404);
        expect(response.body).to.have.property('message', "Cart with id '09321' not found");
      });
    });


    it('Atualizar carrinho sem passar produtos', () => {
      cy.api({
        method: 'PUT', // Ou PATCH
        url: '/1',
        failOnStatusCode: false,
        headers: { 'Content-Type': 'application/json' },
        body: {
          merge: false, 
          products: [
            { },
          ],
        },
      }).then((response) => {
        cy.log('Resposta:', JSON.stringify(response.body));
        expect(response.body).to.have.property('total', 0);
      });
    });
  
    it('Atualizar um carrinho com quantidade inválida', () => {
      cy.atualizarProduto(10, -4)
      .then((response) => {
        cy.log('Resposta:', JSON.stringify(response.body));
        
      });
    });

  });