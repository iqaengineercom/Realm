import {Given,When,Then,And} from "cypress-cucumber-preprocessor/steps";
const link = "https://uat.test-aws.reams-elias.co.uk/user/login";

Given(`I’m logged in as a surveyor`, () => {
    cy.visit(link)
    cy.url().should ('include', link)
    cy.get('h4').should ('contain','Please log in')
    cy.get('#email').type("surveyor@edgehill.co.uk")
    cy.get ('#password').type("Realm34$")
    cy.get ('.ant-btn-primary').click()
    cy.url().should('eq', 'https://uat.test-aws.reams-elias.co.uk/data-collection/home')




})
Given(`I've navigated to the space page`, () => {
    cy.contains('Floors').click().should('contain', 'DT super duper')
    cy.url().should('eq', 'https://uat.test-aws.reams-elias.co.uk/data-collection/edge-hill-university-(vas)/facilities/sports-centre')
    cy.get('[data-row-key="07amtwsJ_"][data-test-selector="floorstable_action_button"]').click().should ('contain', 'Add Space')
    cy.url().should ('eq', 'https://uat.test-aws.reams-elias.co.uk/data-collection/edge-hill-university-(vas)/facilities/sports-centre/floors/dt-super-duper')

})
    When(`I create an asset`, () => {
        cy.get('[data-test-selector="spacestable_action_button"] > a').click().should('contain','Tester')
        cy.contains('Add Asset').click().should('contain', 'Select Asset Type')
        cy.get('.assetTypes').select('Card Readers').should('have.value', 'Card Readers')
        cy.contains('Photos').should ('be.visible')
        cy.get('#root_Description_Quantity').type ('12')
        cy.get('#root_Description_Condition').select('A').should('have.value', 'A')
        cy.get('#root_Others_Install\ Date').type('2019')
        cy.contains('Submit').click()
        cy.contains('Cancel').click().should('contain', 'Tester')
    })

    Then(`the asset should appear in the table`, () => {
        cy.contains('Card Readers-40452').should('contain', 'Asset Subtype')
        cy.contains('2019').should('contain','Install Date')
        cy.contains(('12')).should ('contain', 'Qty')

    })
    And(`the asset should sync to the database`, () => {


    })
