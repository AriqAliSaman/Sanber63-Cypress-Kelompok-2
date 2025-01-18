describe('Assertion', () => {
    it('clicking "login" navigates to a new url', () => {
      cy.visit('https://www.saucedemo.com')
      cy.contains("LOGIN").click()
      // Should be on a new URL which includes '/inventory.html'
      cy.url().should('include', '/inventory.html')
    })
  })