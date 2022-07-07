/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("Habit dashboard", () => {
    beforeEach(() => {
        cy.visit('/habits');
    })

    it("Should display modal when Add button is clicked", () => {
        cy.contains("button", "Add").click()
        cy.contains("Add a new habit").should("be.visible");
    })

    it("should display habit card when new habit is added", () => {
        cy.get("#habit-add-btn").click()
        cy.get("input[placeholder='Habit']").type("Cook food")
        cy.contains("Save Changes").click()
        cy.contains("Cook food")
            .should("be.visible")
            .and("have.class", "HabitCard__habit-container")
    })

    it("should toggle icon when habit card is clicked", ()=>{
        cy.get("#habit-add-btn").click()
        cy.get("input[placeholder='Habit']").type("Cook food")
        cy.contains("Save Changes").click()
        cy.get("[src='/static/media/close.fa7e5ead.svg']").should("be.visible")
        cy.contains("Cook food").click()
        cy.get("[src='/static/media/check.9e8832df.svg']").should("be.visible")

    })

    it("should close modal when the close button is clicked", ()=>{
        cy.get("#habit-add-btn").click()
        cy.get(".btn-secondary").click()
        cy.contains("Add a new habit").should("not.exist")
    })

    it("should change the value of the text in the input field when we type", ()=>{
        cy.get("#habit-add-btn").click()
        cy.get("input[placeholder='Habit']").type("Cook food")
        cy.get("input[placeholder='Habit']").should("have.value","Cook food")
    })

    it("should not close modal when nothing is typed and save changes btn is clicked", ()=>{
        cy.get("#habit-add-btn").click()
        cy.contains("Add a new habit").should("exist")
        cy.contains("Save Changes").click()
        cy.contains("Add a new habit").should("exist")

    })

})