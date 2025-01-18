class cartPage {
    username = '#user-name'
    password = '#password'
    loginBtn = '#login-button'
    errorMsg = '[data-test="error"]'
    cartBtn = '[data-test="add-to-cart-sauce-labs-backpack"]'
    cartIcon = '[data-test="shopping-cart-link"]'

    clickLogin () {
        cy.get(this.loginBtn).click()
    }

    clickCart () {
        cy.get(this.cartBtn).click()
    }

    varifyCart (cartValue) {
        cy.get(this.cartIcon).should('contain.text', cartValue)
    }
}
module.exports = new cartPage();