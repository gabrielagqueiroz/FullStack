describe('Testar pagina de endereço', () => {
    it('Caminho feliz CEP que existe', () => {
        cy.visit('https://digitalcollege.com.br/');

        cy.contains('Mais').click();
        cy.get('[id="menu-item-3547"] > a')
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href);

                cy.origin(href, () => {
                    cy.contains('Não quero me identificar').click();

                    cy.get('textarea').type('Teste');

                    cy.contains('Finalizar').click();

                    cy.contains('Obrigado');
                })
            });
  });
})
