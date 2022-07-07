/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("Accomplishments dashboard", () => {
    beforeEach(() => {
        cy.visit('/accomplishments');
    })

    it("should display warning text when giraffe is in input text", ()=>{
        cy.get("[data-cy='accomplishment-title-input']").type("My Wins")
        cy.get("[data-cy='accomplishment-input']").type("Got a better job giraffe")
        cy.get("[data-cy='accomplishment-checkbox']").check()
        cy.contains("Submit Accomplishment").click()
        cy.contains("Your content is not appropriate").should("be.visible")
    })

    it("should display warning text when giraffe is in input text using mock", ()=>{

        cy.intercept("POST", "http://localhost:4000", (req)=>{
            req.reply((res)=>{
                res.send({
                    msg:"Your shirt is not appropriate"
                })
            })
        })

        cy.get("[data-cy='accomplishment-title-input']").type("My Wins")
        cy.get("[data-cy='accomplishment-input']").type("Got a better job giraffe")
        cy.get("[data-cy='accomplishment-checkbox']").check()
        cy.contains("Submit Accomplishment").click()
        cy.contains("Your shirt is not appropriate").should("be.visible")
    })


})