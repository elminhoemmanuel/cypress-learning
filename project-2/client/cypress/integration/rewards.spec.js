/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("Rewards dashboard", () => {
    beforeEach(() => {
        cy.visit('/rewards');
    })

    it("should display a list of rewards", ()=>{
        cy.get("ul")
        .should("contain", "500 points for drinking 8 cups of water for 7 straight days")
        .and("contain","850 points for fasting for 5 days straight")
    })

    it("should display a list of rewards using a mock", ()=>{
        cy.intercept("GET", "http://localhost:4000/rewards", {fixture:"rewards"})
        cy.visit('/rewards');
        cy.get("ul")
        .should("contain", "501 points for drinking 8 cups of water for 7 straight days")
        .and("contain","851 points for fasting for 5 days straight")
    })

})