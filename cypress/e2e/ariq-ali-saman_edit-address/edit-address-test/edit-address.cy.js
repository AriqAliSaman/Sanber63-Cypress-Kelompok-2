describe('Address Book', () => {
    function randomFirstName(){
        const randomString = Math.random().toString(36).substring(2,9)
        const firstName = randomString 
        return firstName
    }
    let firstName = randomFirstName()

    function randomLastName(){
        const randomString = Math.random().toString(36).substring(2,9)
        const lastName = randomString 
        return lastName
    }
    let lastName = randomLastName()

    function randomEmail(){
        const randomString = Math.random().toString(36).substring(2,9)
        const email = randomString + "@mailinator.com"
        return email
    }
    let email = randomEmail()

    function randomCompany(){
        const randomString = Math.random().toString(36).substring(2,9)
        const company = randomString
        return company
    }
    let company = randomCompany()

    function randomTelephone(){
        const randomString = Math.random().toString(36).substring(2,9)
        const telephone = randomString
        return telephone
    }
    let telephone = randomTelephone()

    function randomStreetAddress(){
        const randomString = Math.random().toString(36).substring(2,9)
        const streetAddress = randomString 
        return streetAddress
    }
    let streetAddress = randomStreetAddress()
    
    function randomCity(){
        const randomString = Math.random().toString(36).substring(2,9)
        const city = randomString 
        return city
    }
    let city = randomCity()

    function randomPostalCode(){
        const randomString = Math.random().toString(36).substring(2,9)
        const postalCode = randomString 
        return postalCode
    }
    let postalCode = randomPostalCode()

    beforeEach(() => {
        cy.visit('')
    })
    it('Navigate To Edit Address Page', () => {
        cy.get('.panel > .header > .authorization-link > a').click()
        cy.contains("Create an Account").click()
        cy.get('#firstname').type(firstName)
        cy.get('#lastname').type(lastName)
        cy.get('#email_address').type(email)
        cy.get('#password').type("TeSt123098")
        cy.get('#password-confirmation').type("TeSt123098")
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
        cy.get('.items > :nth-child(6) > a').click()
        cy.get('.base').should('have.text', 'Add New Address')
    })
    it('Edit Address - Negative (Empty All Form)', () => {
        cy.get('.panel > .header > .authorization-link > a').click()
        cy.contains("Create an Account").click()
        cy.get('#firstname').type(firstName)
        cy.get('#lastname').type(lastName)
        cy.get('#email_address').type(email)
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
    it.only('Edit Address - Positive (Complete Form)', () => {
        cy.get('.panel > .header > .authorization-link > a').click()
        cy.contains("Create an Account").click()
        cy.get('#firstname').type(firstName)
        cy.get('#lastname').type(lastName)
        cy.get('#email_address').type(email)
        cy.get('#password').type("TeSt123098")
        cy.get('#password-confirmation').type("TeSt123098")
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
        cy.get('.items > :nth-child(6) > a').click()
        cy.get('.base').should('have.text', 'Add New Address')
        cy.get('#company').type(company)
        cy.get('#telephone').type(telephone)
        cy.get('#street_1').type(streetAddress)
        cy.get('#street_2')
        cy.get('#street_3')
        cy.get('#city').type(city)
        cy.get('#region_id').select('Arizona')
        cy.get('#zip').type(postalCode)
        cy.get('#country').select('Indonesia')
        cy.contains("Save Address").click()
        cy.get('.message-success > div').should('have.text', 'You saved the address.')
    })
})
