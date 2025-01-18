import login from "../saucedemo-pageobject/login"

describe('Sauce Demo Login', () => {
  beforeEach(() => {
    cy.visit('')
  })
  it('login failed (empty username)', () => {
    cy.get('#password').type("secret_sauce")
    cy.contains("Login").click()
    cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username is required')
  })
  it('login failed (empty password)', () => {
    cy.get('#user-name').type("standard_user")
    cy.contains("Login").click()
    cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Password is required')
  })
  it('login failed (locked_out_user)', () => {
    cy.get('#user-name').type("locked_out_user")
    cy.get('#password').type("secret_sauce")
    cy.contains("Login").click()
    cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
  })
  it('login failed (problem_user)', () => {
    cy.get('#user-name').type("problem_user")
    cy.get('#password').type("secret_sauce")
    cy.contains("Login").click()
  })
  it('login failed (performance_glitch_user)', () => {
    cy.get('#user-name').type("performance_glitch_user")
    cy.get('#password').type("secret_sauce")
    cy.contains("Login").click()
  })
  it('login failed (error_user)', () => {
    cy.get('#user-name').type("error_user")
    cy.get('#password').type("secret_sauce")
    cy.contains("Login").click()
  })
  it('login failed (visual_user)', () => {
    cy.get('#user-name').type("visual_user")
    cy.get('#password').type("secret_sauce")
    cy.contains("Login").click()
  })
  it('login success', () => {
    cy.get('#user-name').type("standard_user")
    cy.get('#password').type("secret_sauce")
    cy.contains("Login").click()
  })
  it('login env', () => {
    cy.get('#user-name').type(Cypress.env('incorrect_username'))
    cy.get('#password').type("secret_sauce")
    cy.contains("Login").click()
  })
  it('login command', () => {
    cy.SauceDemoLogin('standard_user', 'secret_sauce')
  })
  it('login command (failed)', () => {
    cy.SauceDemoLogin('standard_users', 'secret_sauce')
    cy.ErrorAlert('Epic sadface: Username and password do not match any user in this service')

  })
  it('login (pageObject)', () => {
    cy.get('#user-name').type(Cypress.env('correct_username'))
    cy.get('#password').type("secret_sauce")
    login.clickLogin()
  })
})
