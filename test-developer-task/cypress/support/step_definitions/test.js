/// <reference types="cypress" />

import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";

import AddAssets from '../../support/PageObjects/addAssets'
import ExistingAssets from '../../support/PageObjects/existingAssets'

const addAssets=new AddAssets();
const existingAssets=new ExistingAssets();

//Your test-case glue-code should be here :)
When('I Open URL', () => {
        // first visit the site
	cy.exec('npm run start')
	cy.wait(10000)
	cy.visit('http://localhost:3000/#/')
})

Then('I check add asset is clickable', () => {
        // first visit the site
	addAssets.getAddAsset().then(($button) => {
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
	addAssets.getAddAsset().click()
	addAssets.getAddAssetTextBox().clear().type(content)
	addAssets.getSendButton().click()
})

Then('I check if new asset is correctly added', () => {
	addAssets.getTitle().should('have.text', 'Sucssess');
	addAssets.getCloseButton().click()
	addAssets.getFeedbackTitle().should('have.text', 'Correct format');
})

Then('I check if asset already exists', () => {
	addAssets.getTitle().should('have.text', 'Asset alredy exist');
	addAssets.getCloseButton().click()
	addAssets.getFeedbackTitle().should('have.text', 'Correct format');
})

Then('I check Existing assets is clickable', () => {
        // first visit the site
	existingAssets.getExistingAsset().then(($button) => {
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
	existingAssets.getExistingAsset().then(($button) => {
        if(cy.get($button).should('not.be.disabled')){
            cy.get($button).click()
	    cy.wait(5000)
        }
        else{
            //your logical code for button NOT ACTIVE
        }
    })
	existingAssets.getSearchAssetTextBox().clear().type(content);
	existingAssets.getSearchAssetTextBox().invoke('attr', 'value').should('contain', content)
	existingAssets.getTable().contains('td', content);

})
