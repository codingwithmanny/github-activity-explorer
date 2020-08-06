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
  it('Should show selected results', () => {
    // Sidebar Section
    cy.get('input[type=search]').type('create react app');
    cy.get('ul > li a span:first-child').should('contain', 'facebook');
    cy.get('ul > li a span:nth-child(2)').should('contain', '/');
    cy.get('ul > li a span:nth-child(3)').should('contain', 'create-react-app');
    cy.get('ul > li:first-child a').click();
    cy.get('ul li').should('have.length', 0);
    cy.get('#selections > div').should('have.length', 1);
    cy.get('#selections > div > button > div h2 span:first-child').should(
      'contain',
      'facebook',
    );
    cy.get('#selections > div > button > div h2 span:nth-child(2)').should(
      'contain',
      '/',
    );
    cy.get('#selections > div > button > div h2 span:nth-child(3)').should(
      'contain',
      'create-react-app',
    );
    cy.get('#selections > div > button > div section > time').should(
      'contain',
      'Updated',
    );

    // Add second repository
    cy.get('input[type=search]').type('angular angular');
    cy.get('ul > li a span:first-child').should('contain', 'angular');
    cy.get('ul > li a span:nth-child(2)').should('contain', '/');
    cy.get('ul > li a span:nth-child(3)').should('contain', 'angular');
    cy.get('ul > li:first-child a').click();
    cy.get('ul li').should('have.length', 0);

    cy.get('#selections > div').should('have.length', 2);
    cy.get('#selections > div:first-child > button:first-child').click();
    cy.get('#selections > div:first-child > button:first-child').focus();
    cy.get('#selections > div').should('have.length', 2);

    // Remove all
    cy.get('#selections > div:first-child > button:nth-child(2)').click();
    cy.get('#selections > div').should('have.length', 1);
    cy.get('#selections > div:first-child > button:nth-child(2)').click();
    cy.get('#selections > div').should('have.length', 0);
  });
});
