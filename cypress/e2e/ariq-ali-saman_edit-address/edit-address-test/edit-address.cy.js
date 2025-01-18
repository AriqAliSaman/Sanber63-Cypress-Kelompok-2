// describe('Register Account', () => {
//     function randomEmail(){
//         const randomString = Math.random().toString(36).substring(2,9)
//         const email = randomString + "@mailinator.com"
//         return email
//     }
//     let userEmail = randomEmail()

//     beforeEach(() => {
//         cy.visit('')
//     })
//     it('Register', () => {
//         cy.get('.panel > .header > .authorization-link > a').click()
//         cy.contains("Create an Account").click()
//         cy.get('#firstname').type("test456")
//         cy.get('#lastname').type("456")
//         cy.get('#email_address').type(userEmail)
//         cy.get('#password').type("TeSt123098")
//         cy.get('#password-confirmation').type("TeSt123098")
//         cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
//     })
// })

describe('Address Book', () => {
    function randomEmail(){
        const randomString = Math.random().toString(36).substring(2,9)
        const email = randomString + "@mailinator.com"
        return email
    }
    let userEmail = randomEmail()

    beforeEach(() => {
        cy.visit('')
    })
    it('Go To Edit Address Page', () => {
        cy.get('.panel > .header > .authorization-link > a').click()
        cy.contains("Create an Account").click()
        cy.get('#firstname').type("test456")
        cy.get('#lastname').type("456")
        cy.get('#email_address').type(userEmail)
        cy.get('#password').type("TeSt123098")
        cy.get('#password-confirmation').type("TeSt123098")
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
        cy.get('.items > :nth-child(6) > a').click()
        cy.get('.base').should('have.text', 'Add New Address')
    })
    it('Edit Address', () => {
        cy.get('.panel > .header > .authorization-link > a').click()
        cy.contains("Create an Account").click()
        cy.get('#firstname').type("test456")
        cy.get('#lastname').type("456")
        cy.get('#email_address').type(userEmail)
        cy.get('#password').type("TeSt123098")
        cy.get('#password-confirmation').type("TeSt123098")
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
        cy.get('.items > :nth-child(6) > a').click()
        cy.get('.base').should('have.text', 'Add New Address')
        cy.get('#firstname').clear()
        cy.get('#lastname').clear()
        cy.get('#company')
        cy.get('#telephone')
        cy.get('#street_1')
        cy.get('#street_2')
        cy.get('#street_3')
        cy.get('#city')
        cy.get('#region_id')
        cy.get('#zip')
        cy.get('#country')
        cy.contains("Save Address").click()
        cy.get('#firstname-error').should('have.text', 'This is a required field.')
        cy.get('#lastname-error').should('have.text', 'This is a required field.')
        cy.get('#telephone-error').should('have.text', 'This is a required field.')
        cy.get('#street_1-error').should('have.text', 'This is a required field.')
        cy.get('#city-error').should('have.text', 'This is a required field.')
        cy.get('#region_id-error').should('have.text', 'Please select an option.')
        cy.get('#zip-error').should('have.text', 'This is a required field.')
    })
})
