import add_to_cart from "../saucedemo-pageobject/add_to_cart"

describe('Sauce Demo Dashboard', () => {
  beforeEach(() => {
    cy.visit('')
  })
  it('login success', () => {
    cy.SauceDemoLogin('standard_user', 'secret_sauce')
    cy.get('[data-test="title"]').should('contain.text','Products')
    add_to_cart.clickCart()
    add_to_cart.varifyCart('1')
    cy.get('[data-test="remove-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').should('not.contain.text', '1')
    cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="shopping-cart-link"]').should('contain.text', '1')
    cy.url().should('include', 'https://www.saucedemo.com/cart.html')
  })
}) 