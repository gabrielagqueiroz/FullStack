
describe('Teste da pagina inicial', () => {
    it ('testando que a pagina funciona no desktop', () => {
        cy.visit('http://localhost:3000');

        cy.get('img[alt="Logo da Nike"]');
        cy.get('.container').should('have.css', 'background-color', 'rgb(102, 102, 102)');
        cy.get('.menu a ').should('have.css', 'color', 'rgb(255, 255, 255)');
        cy.contains('HOME').should('exist');
        cy.contains('SOBRE').should('exist');
        cy.contains('CONTATO').should('exist');
        cy.contains('LOGIN').should('exist');
        cy.get('input[placeholder="Pesquise aqui"]');
        cy.contains('Buscar');
        cy.contains('LOGIN').should('exist');
    });

    it ('testando que quando eu acesso usando o celular nao aparece o HOME', () => {
        cy.visit('http://localhost:3000');

        cy.viewport('iphone-6');''

        cy.contains('HOME').should('not.exist');
    })
})

