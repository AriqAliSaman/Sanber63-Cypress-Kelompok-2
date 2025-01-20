describe('Proceed Checkout', () => {


    it('proceed checkout', () => {
      cy.visit('https://magento.softwaretestingboard.com')
      cy.get('.panel > .header > .authorization-link > a').click();
      cy.get('#email').type('idevanti.acc@gmail.com')
      cy.get('#pass').type('v@nti123')
      cy.get('#send2').click()
   
     // choose product
     cy.visit('https://magento.softwaretestingboard.com/gear.html')
     cy.get('#ui-id-6')
     cy.get('#narrow-by-list2')
     cy.visit('https://magento.softwaretestingboard.com/gear/bags.html')
     cy.visit('https://magento.softwaretestingboard.com/overnight-duffle.html')

     // add to chart
     cy.get('#product-addtocart-button')

     //proceed checkout
     cy.visit('https://magento.softwaretestingboard.com/checkout/cart/')
     cy.title('Proceed to Checkout').click()
    })

  })
  