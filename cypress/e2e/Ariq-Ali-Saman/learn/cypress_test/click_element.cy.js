describe('Click element', () => {
    it('clicks the button "login"', () => {
      cy.visit('https://www.saucedemo.com')
      cy.contains("LOGIN").click()
    })
  })