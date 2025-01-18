class loginPage {
    username = '#user-name'
    password = '#password'
    loginBtn = '#login-button'
    errorMsg = '[data-test="error"]'

    clickLogin () {
        cy.get(this.loginBtn).click()
    }
}
module.exports = new loginPage();