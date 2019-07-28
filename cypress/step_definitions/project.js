//import {Given} from "cypress-cucumber-preprocessor/steps";
//const url = "https://uat.test-aws.reams-elias.co.uk/user/login";

describe(`Project`, function() {
    it("I’m logged in as a surveyor",function(){
    cy.visit("https://uat.test-aws.reams-elias.co.uk/user/login")
    cy.get('#email').type("surveyor@edgehill.co.uk")
    cy.get ('#password').type("Realm34$")
    cy.get ('.ant-btn-primary').click()
        cy.get('[data-row-key="AAEGCQ8LF"] > .actions > .ant-btn-group > .with-only-btn > a')
        cy.get('[data-row-key="QZro4JZNI"] > .actions > .ant-btn-group > [data-test-selector="floorstable_action_button"] > a')
})
})
