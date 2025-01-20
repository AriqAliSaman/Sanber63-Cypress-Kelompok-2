describe('template spec', () => {


    it('login success - success login', () => {
      cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS9jdXN0b21lci9hY2NvdW50L2xvZ291dFN1Y2Nlc3Mv/')
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
  