describe('Proceed Checkout', () => {

  it('proceed checkout', () => {
    // Visit homepage
    cy.visit('https://magento.softwaretestingboard.com');

    // Login
    cy.get('.panel > .header > .authorization-link > a').click();
    cy.get('#email').type('idevanti.acc@gmail.com');
    cy.get('#pass').type('v@nti123');
    cy.get('#send2').click();

    // Navigate to product category
    cy.visit('https://magento.softwaretestingboard.com/gear.html');
    cy.get('#ui-id-6').click(); // Example: Clicking the "Gear" category
    cy.visit('https://magento.softwaretestingboard.com/gear/bags.html');
    cy.visit('https://magento.softwaretestingboard.com/overnight-duffle.html');

    // Add product to cart
    cy.get('#product-addtocart-button').click();

    // Proceed to checkout
    cy.visit('https://magento.softwaretestingboard.com/checkout/cart/');
    cy.contains('Proceed to Checkout').click(); // Use visible text to locate button
  });

});
