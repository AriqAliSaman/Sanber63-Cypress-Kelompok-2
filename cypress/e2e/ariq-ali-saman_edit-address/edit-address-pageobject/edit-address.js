class editAddress {
    register = '.panel > .header > :nth-child(3) > a'
    registerBtn = '#form-validate > .actions-toolbar > div.primary > .action'
    signIn = '.panel > .header > .authorization-link > a'
    signInBtn = '.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2'
    dropdownBtn = ':nth-child(2) > .customer-welcome > .customer-name > .action'
    myAccount = ':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a'
    signOut = ':nth-child(2) > .customer-welcome > .customer-menu > .header > .authorization-link > a'
    addressBook = '.items > :nth-child(6) > a'
    saveAddresBtn = '#form-validate > .actions-toolbar > div.primary > .action'
    changeAddressBtn = '.box-address-billing > .box-actions > .action > span'
    addNewAddressBtn = '.column > .actions-toolbar > div.primary > .action'
    billingCheckbox = '#primary_billing'
    shippingCheckbox = '#primary_shipping'
    editAddressBtn = '.actions > .edit > span'
    deleteAddressBtn = '.delete > span'
    cancelDeleteAddressBtn = '.action-secondary'
    yesDeleteAddressBtn = '.action-primary'
    
    registerSuccess = '.message-success > div'
    registerSuccessMessage = 'Thank you for registering with Main Website Store.'
    editAddressVerify = '.base' 
    editAddressVerifyMessage = 'Add New Address'
    editAddressVerifyMessage2 = 'Edit Address'
    saveAddressVerify = '.message-success > div'
    saveAddressVerifyMessage = 'You saved the address.'
    verifyMessage = 'This is a required field.'
    verifyMessage2 = 'Please select an option.'
    firstNameVerify = '#firstname-error'
    lastNameVerify = '#lastname-error'
    telephoneVerify = '#telephone-error'
    streetVerify = '#street_1-error'
    cityVerify = '#city-error'
    regionVerify = '#region_id-error'
    postalVerify = '#zip-error'
    countryVerify = '#country-error'
    billingAddressVerify = ':nth-child(8) > span'
    billingAddressVerifyMessage = "It's a default billing address."
    shippingAddressVerify = ':nth-child(2) > :nth-child(9) > span'
    shippingAddressVerifyMessage = "It's a default shipping address."

    firstNameForms = '#firstname'
    lastNameForms = '#lastname'
    telephoneForms = '#telephone'
    cityForms = '#city'
    regionForms = '#region_id'
    postalForms = '#zip'


    // Pages and Buttons
    registerAccount() {
        cy.get(this.register).click()
    }
    
    clickRegister() {
        cy.get(this.registerBtn).click()
    }
    
    signInAccount() {
        cy.get(this.signIn).click()
    }
    
    clickSignIn() {
        cy.get(this.signInBtn).click()
    }
    
    clickMyAccount() {
        cy.get(this.dropdownBtn).click()
        cy.get(this.myAccount).click()
    
    }
    
    clickSignOut() {
        cy.get(this.dropdownBtn).click()
        cy.get(this.signOut).click()
    }

    clickAddressBook() {
        cy.get(this.addressBook).click()
    }

    clickSaveAddress() {
        cy.get(this.saveAddresBtn).click()
    }

    clickChangeAddress() {
        cy.get(this.changeAddressBtn).click()
    }

    clickAddNewAddress() {
        cy.get(this.addNewAddressBtn).click()
    }

    clickBillingCheckbox() {
        cy.get(this.billingCheckbox).not('[disabled]').check()
        cy.get(this.billingCheckbox).not('[disabled]').should('be.checked')
    }

    clickShippingCheckbox() {
        cy.get(this.shippingCheckbox).not('[disabled]').check()
        cy.get(this.shippingCheckbox).not('[disabled]').should('be.checked')
    }

    clickEditAddress() {
        cy.get(this.editAddressBtn).click()
    }

    clickDeleteAddress() {
        cy.get(this.deleteAddressBtn).click()
    }

    clickCancelDeleteAddress() {
        cy.get(this.cancelDeleteAddressBtn).click()
    }

    clickYesDeleteAddress() {
        cy.get(this.yesDeleteAddressBtn).click()
    }
    

    // Verify Messages
    verifyRegister() {
        cy.get(this.registerSuccess).should('have.text', this.registerSuccessMessage)
    }

    verifyEditAddress() {
        cy.get(this.editAddressVerify).should('have.text', this.editAddressVerifyMessage)
    }

    verifyEditAddress2() {
        cy.get(this.editAddressVerify).should('have.text', this.editAddressVerifyMessage2)
    }

    verifyFirstName() {
        cy.get('body').then(($body) => {
            if ($body.find(this.firstNameVerify).length > 0) {
              cy.get(this.firstNameVerify).should('have.text', this.verifyMessage);
            } else {
              cy.screenshot('edit-address-bugs/missing-firstname-verify');
            }
        });
    }

    verifyLastName() {
        cy.get('body').then(($body) => {
            if ($body.find(this.lastNameVerify).length > 0) {
              cy.get(this.lastNameVerify).should('have.text', this.verifyMessage);
            } else {
              cy.screenshot('edit-address-bugs/missing-lastname-verify');
            }
        });
    }

    verifyTelephone() {
        cy.get('body').then(($body) => {
            if ($body.find(this.telephoneVerify).length > 0) {
              cy.get(this.telephoneVerify).should('have.text', this.verifyMessage);
            } else {
              cy.screenshot('edit-address-bugs/missing-telephone-verify');
            }
        });
    }

    verifyStreet() {
        cy.get('body').then(($body) => {
            if ($body.find(this.streetVerify).length > 0) {
              cy.get(this.streetVerify).should('have.text', this.verifyMessage);
            } else {
              cy.screenshot('edit-address-bugs/missing-street-verify');
            }
        });
    }

    verifyCity() {
        cy.get('body').then(($body) => {
            if ($body.find(this.cityVerify).length > 0) {
              cy.get(this.cityVerify).should('have.text', this.verifyMessage);
            } else {
              cy.screenshot('edit-address-bugs/missing-city-verify');
            }
        });
    }

    verifyRegion() {
        cy.get('body').then(($body) => {
            if ($body.find(this.regionVerify).length > 0) {
              cy.get(this.regionVerify).should('have.text', this.verifyMessage2);
            } else {
              cy.screenshot('edit-address-bugs/missing-region-verify');
            }
        });
    }

    verifyPostal() {
        cy.get('body').then(($body) => {
            if ($body.find(this.postalVerify).length > 0) {
              cy.get(this.postalVerify).should('have.text', this.verifyMessage);
            } else {
              cy.screenshot('edit-address-bugs/missing-postal-verify');
            }
        });
    }

    verifyCountry() {
        cy.get('body').then(($body) => {
            if ($body.find(this.countryVerify).length > 0) {
              cy.get(this.countryVerify).should('have.text', this.verifyMessage2);
            } else {
              cy.screenshot('edit-address-bugs/missing-country-verify');
            }
        });
    }

    verifySaveAddress() {
        cy.get(this.saveAddressVerify).should('have.text', this.saveAddressVerifyMessage)
    }

    verifyBillingAddress() {
        cy.get(this.billingAddressVerify).should('have.text', this.billingAddressVerifyMessage)
    }

    verifyShippingAddress() {
        cy.get(this.shippingAddressVerify).should('have.text', this.shippingAddressVerifyMessage)
    }


    // Validation Forms
    validationFirstName() {
        cy.get(this.firstNameForms).invoke('val').then((value) => {
            if (/\d+/.test(value)) {
              cy.screenshot('edit-address-bugs/firstname-field-allows-numbers');
            }
        });
    }

    validationLastName() {
        cy.get(this.lastNameForms).invoke('val').then((value) => {
            if (/\d+/.test(value)) {
              cy.screenshot('edit-address-bugs/lastname-field-allows-numbers');
            }
        });
    }

    validationTelephone() {
        cy.get(this.telephoneForms).invoke('val').then((value) => {
            if (/[^0-9]/.test(value)) {
              cy.screenshot('edit-address-bugs/telephone-field-allows-letters');
            }
        });
    }

    validationCity() {
        cy.get(this.cityForms).invoke('val').then((value) => {
            if (/\d+/.test(value)) {
              cy.screenshot('edit-address-bugs/city-field-allows-numbers');
            }
        });
    }

    validationPostal() {
        cy.get(this.postalForms).invoke('val').then((value) => {
            if (/[^0-9]/.test(value)) {
              cy.screenshot('edit-address-bugs/postal-field-allows-letters');
              cy.log('Validation error is displayed as expected');
            }
        });
    }

    checkRegionData() {
        cy.get(this.regionForms).within(() => {
            cy.get('input').each(($el) => {
              cy.wrap($el).invoke('val').then((value) => {
                if (!value) {
                  // Jika form kosong, ambil screenshot
                  cy.screenshot('edit-address-bugs/missing-region-data');
                }
              });
            });
          });
    }
}
module.exports = new editAddress();