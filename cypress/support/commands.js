// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// ++ SauceDemo
Cypress.Commands.add('SauceDemoLogin', (username, password) => { 
    cy.get('#user-name').type(username)
    cy.get('#password').type(password)
    cy.get('#login-button').click()
})

Cypress.Commands.add('ErrorAlert', (message) => { 
    cy.get('[data-test="error"]').should('have.text', message)
})
// ++ SauceDemo


// ++ Magento
Cypress.Commands.add('MagentoRegisterForms', (firstName, lastName, email, password, confirmPassword) => { 
    cy.get('#firstname').type(firstName)
    cy.get('#lastname').type(lastName)
    cy.get('#email_address').type(email)
    cy.get('#password').type(password)
    cy.get('#password-confirmation').type(confirmPassword)
})

Cypress.Commands.add('MagentoLoginForms', (email, password) => { 
    cy.get('#email').type(email)
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type(password)
})

Cypress.Commands.add('MagentoEditEmptyForms', () => { 
    cy.get('#firstname').clear()
    cy.get('#lastname').clear()
})

Cypress.Commands.add('MagentoEditCompleteForms', (firstName, lastName, company, telephone, street1, street2, street3, city, regionId, postalCode, country) => { 
    cy.get('#firstname').type(firstName)
    cy.get('#lastname').type(lastName)
    cy.get('#company').type(company)
    cy.get('#telephone').type(telephone)
    cy.get('#street_1').type(street1)
    cy.get('#street_2').type(street2)
    cy.get('#street_3').type(street3)
    cy.get('#city').type(city)
    cy.get('#region_id').select(regionId)
    cy.get('#zip').type(postalCode)
    cy.get('#country').select(country)
})

Cypress.Commands.add('MagentoEditAddress', (region, postalCode) => { 
    cy.get('#region').type(region)
    cy.get('#zip').type(postalCode)
})

Cypress.Commands.add('MagentoAddNewAddress', (company, telephone, street1, street2, street3, city, region, postalCode, country) => { 
    cy.get('#company').type(company)
    cy.get('#telephone').type(telephone)
    cy.get('#street_1').type(street1)
    cy.get('#street_2').type(street2)
    cy.get('#street_3').type(street3)
    cy.get('#city').type(city)
    cy.get('#region_id').select(region)
    cy.get('#zip').type(postalCode)
    cy.get('#country').select(country)
})
// ++ Magento
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })