/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("Accomplishments dashboard", () => {
    beforeEach(() => {
        cy.visit('/accomplishments');
    })

    it("should show error if any of the information is missing", ()=>{
        cy.get("[data-cy='accomplishment-title-input']").type("My Wins")
        cy.get("[data-cy='accomplishment-input']").type("Got a better job")
        cy.contains("Submit Accomplishment").click()
        cy.contains("Complete the items above to continue").should("be.visible")
    })

    it("should display success message component when all data is typed in", ()=>{
        cy.get("[data-cy='accomplishment-title-input']").type("My Wins")
        cy.get("[data-cy='accomplishment-input']").type("Got a better job")
        cy.get("[data-cy='accomplishment-checkbox']").check()
        cy.contains("Submit Accomplishment").click()
        cy.contains("This Accomplisment was Successfully Submitted").should("be.visible")
    })

    it("should return back to accomplishment dashboard with inputs empty when the go back button is clicked", ()=>{
        cy.get("[data-cy='accomplishment-title-input']").type("My Wins")
        cy.get("[data-cy='accomplishment-input']").type("Got a better job")
        cy.get("[data-cy='accomplishment-checkbox']").check()
        cy.contains("Submit Accomplishment").click()
        cy.contains("This Accomplisment was Successfully Submitted").should("be.visible")
        cy.contains("Go Back").click()
        cy.contains("h2", "Accomplishment").should("be.visible")
        cy.get("[data-cy='accomplishment-title-input']").should("have.value", "")
        cy.get("[data-cy='accomplishment-input']").should("have.value", "")
        cy.get("[data-cy='accomplishment-checkbox']").should("not.be.checked")
    })

})