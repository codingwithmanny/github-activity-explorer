context('Tests main view', () => {
  /**
   * Setup
   */
  beforeEach(() => {
    cy.visit('/');
  });

  /**
   * Validates text in main view
   */
  it('Should show sidebar and graph section with default mesage', () => {
    // Sidebar Section
    cy.get('input[type=search]').should(
      'have.attr',
      'placeholder',
      'Search a GitHub Repository...',
    );
    cy.get('aside').contains(
      'Search for a GitHub repository to populate graph',
    );

    // Graph Section
    cy.get('p').contains('Add a GitHub repo from the Search');
  });

  /**
   * Validates that search dropdown is working
   */
  it('Should show results when term entered', () => {
    // Sidebar Section
    cy.get('input[type=search]').type('create react app');
    cy.get('ul > li a span:first-child').should('contain', 'facebook');
    cy.get('ul > li a span:nth-child(2)').should('contain', '/');
    cy.get('ul > li a span:nth-child(3)').should('contain', 'create-react-app');
  });

  /**
   * Validates adding two graphs and deleting them
   */
  it('Should show results when term entered', () => {
    // Sidebar Section
    cy.get('input[type=search]').type('create react app');
    cy.get('ul > li a span:first-child').should('contain', 'facebook');
    cy.get('ul > li a span:nth-child(2)').should('contain', '/');
    cy.get('ul > li a span:nth-child(3)').should('contain', 'create-react-app');
    cy.get('ul > li:first-child a').click();
    cy.get('ul li').should('have.length', 0);
    cy.get('div > a').should('have.length', 1);
    cy.get('div > a > div h2 span:first-child').should('contain', 'facebook');
    cy.get('div > a > div h2 span:nth-child(2)').should('contain', '/');
    cy.get('div > a > div h2 span:nth-child(3)').should(
      'contain',
      'create-react-app',
    );
    cy.get('div > a > div section > time').should('contain', 'Updated');

    // Add second repository
    cy.get('input[type=search]').type('angular angular');
    cy.get('ul > li a span:first-child').should('contain', 'angular');
    cy.get('ul > li a span:nth-child(2)').should('contain', '/');
    cy.get('ul > li a span:nth-child(3)').should('contain', 'angular');
    cy.get('ul > li:first-child a').click();
    cy.get('ul li').should('have.length', 0);
    cy.get('div > a').should('have.length', 2);
    cy.get('div > a:last-child').click();
    cy.get('div > a:first-child').focus();
    cy.get('div > a').should('have.length', 2);

    // Remove all
    cy.get('div > a:first-child button').click();
    cy.get('div > a').should('have.length', 1);
    cy.get('div > a:first-child button').click();
    cy.get('div > a').should('have.length', 0);
  });
});
