describe('template spec', () => {
  it('choose product', () => {
    cy.visit('https://magento.softwaretestingboard.com/')

    /* ==== Generated with Cypress Studio ==== */
    cy.get('.panel > .header > .authorization-link > a').click();
    cy.get('#email').type('arbaliyah@gmail.com');
    cy.get('#pass').type('Arba123@');
    cy.get('#send2').click();
    //cy.get('.level0 nav-3 category-item level-top parent ui-menu-item > #ui-id-5').click();
    cy.get('li.nav-3').find('a').contains('Men').click();
    cy.get('.categories-menu > :nth-child(2) > :nth-child(2) > a').click();
    cy.get(':nth-child(1) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click();
    cy.get('#option-label-size-143-item-167').click();
    cy.get('#option-label-color-93-item-49').click();
    cy.get('#product-addtocart-button').click();
    cy.get('.message-success').should('be.visible').and('contain.text', 'Proteus Fitness Jackshirt');
    /* ==== End Cypress Studio ==== */
  })
})