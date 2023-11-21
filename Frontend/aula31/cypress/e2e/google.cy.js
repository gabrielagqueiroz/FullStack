describe('fazer busca google', () => {
  it('caminho feliz enter', () => {
    cy.visit('https://google.com');

    cy.get('textarea[title="Pesquisar"]').type('PHP com Rapadura{enter}');

    cy.wait(2000);

    cy.contains('resultados');
  });

  it('caminho feliz enter', () => {
    cy.visit('https://google.com');

    cy.get('textarea[title="Pesquisar"]').type('PHP com Rapadura');

    cy.contains('Pesquisa Google').click();

    cy.wait(2000);

    cy.contains('resultados');
  });
})