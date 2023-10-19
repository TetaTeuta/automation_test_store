const errorMessage = "Error: Incorrect login or password provided.";

describe("Login ", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("loginUrl"));
        cy.get("#maincontainer").get("h1").should("contain", "Account Login");
    });
    it("Should fail", () => {
        cy.get("input[name=loginname]").type(Cypress.env("WRONG_USERNAME"));
        cy.get("input[name=password]").type(
            `${Cypress.env("WRONG_PASSWORD")}{enter}`
        );
        cy.get("#maincontainer").get(".alert").should("contain", errorMessage);
    });

    it("Should success", () => {
        cy.get("input[name=loginname]").type(Cypress.env("CORRECT_USERNAME"));
        cy.get("input[name=password]").type(
            `${Cypress.env("CORRECT_PASSWORD")}{enter}`
        );
        cy.url().should("include", "/account");
    });
});
