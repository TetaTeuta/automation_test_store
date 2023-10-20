const errorMessage = "Error: Incorrect login or password provided.";

describe("Login ", () => {
    it("Should fail", () => {
        cy.logIn(Cypress.env("WRONG_USERNAME"), Cypress.env("WRONG_PASSWORD"));
        cy.get("#maincontainer").get(".alert").should("contain", errorMessage);
    });

    it("Should success", () => {
        cy.logIn(
            Cypress.env("CORRECT_USERNAME"),
            Cypress.env("CORRECT_PASSWORD")
        );
        cy.url().should("include", accUrl);
    });

    after("Clean up after the test", () => {
        cy.logOut();
        cy.clearInfo();
    });
});
