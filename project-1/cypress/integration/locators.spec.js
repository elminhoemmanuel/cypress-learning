/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("Locators", ()=>{
    beforeEach(()=>{
        cy.visit('/elements');
    })

    it("Locating elements with the get command", ()=>{
        // Get all elements using tagname
        cy.get('button');

        // Get all elements with className
        cy.get('.btn-with-class');

        // Get all elemenst with specific  classes
        cy.get("[class='Elements-btn btn-with-class more-btn-classes']");

        // Get all elements by ID
        cy.get('#btn-with-id');

        // Get all elements by other sttributes
        cy.get('[type="submit"]');

        // Get all elements by tagname and class
        cy.get('button.Elements-btn');

        // Get all elements by tagname and class and ID
        cy.get('button.Elements-btn#btn-with-id');

        // Get all elements by tagname and class and attribute
        cy.get('button.Elements-btn[type="submit"]');

        // Get all elements by test id attribute
        cy.get('[data-cy="btn-id-1"]');
        cy.getByTestId('btn-id-1')



    })

    it("Locating elements with contains", ()=>{
        //Get element by text
        cy.contains('Unique Text')

        //with selector
        cy.contains("[type='submit']", "Not Unique Text")
        cy.contains("form", "Not Unique Text")

        cy.get('[type="submit"]').contains("Not Unique Text")
    })

    it("Locating elements with find", ()=>{
        //Get element by text
        cy.get("#form-1").find(".btn-1")
    })
})