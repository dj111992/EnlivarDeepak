/// <reference types="cypress" />

import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";


//Your test-case glue-code should be here :)
When('I Open URL', () => {
        // first visit the site
	cy.exec('npm run start')
	cy.visit('http://localhost:3000/#/')
})

Then('I check add asset is clickable', () => {
        // first visit the site
	cy.get('[testid="add-asset"]').then(($button) => {
        if(cy.get($button).should('not.be.disabled')){
            cy.get($button).click()
        }
        else{
            //your logical code for button NOT ACTIVE
        }
    })
})

Then('I add asset {string}', (content) => {
        // first visit the site
	cy.get('[testid="add-asset"]').click()
	cy.get('[id="defaultFormAddAsset"]').clear().type(content)
	cy.get('[data-test="button"]').click()
})

Then('I check if new asset is correctly added', () => {
	cy.get('[class="modal-title"]').should('have.text', 'Sucssess');
	cy.get('[class="btn-warning btn Ripple-parent"]').click()
	cy.get('[class="valid-feedback"]').should('have.text', 'Correct format');
})

Then('I check if asset already exists', () => {
	cy.get('[class="modal-title"]').should('have.text', 'Asset alredy exist');
	cy.get('[class="btn-warning btn Ripple-parent"]').click()
	cy.get('[class="valid-feedback"]').should('have.text', 'Correct format');
})

Then('I check Existing assets is clickable', () => {
        // first visit the site
	cy.get('[href="#/assets"]').then(($button) => {
        if(cy.get($button).should('not.be.disabled')){
            cy.get($button).click()
	    cy.wait(5000)
        }
        else{
            //your logical code for button NOT ACTIVE
        }
    })
})

Then('I search for saved asset {string}', (content) => {
	cy.get('[href="#/assets"]').then(($button) => {
        if(cy.get($button).should('not.be.disabled')){
            cy.get($button).click()
	    cy.wait(5000)
        }
        else{
            //your logical code for button NOT ACTIVE
        }
    })
	cy.get('[class="form-control form-control-sm ml-0 my-1"]').clear().type(content);
	cy.get('[class="form-control form-control-sm ml-0 my-1"]').invoke('attr', 'value').should('contain', content)
	cy.get('[class="table table-bordered table-hover table-striped dataTable"]').contains('td', content);

})
