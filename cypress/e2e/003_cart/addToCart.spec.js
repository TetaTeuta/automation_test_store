describe("Cart ", () => {
    beforeEach(() => {
        cy.logIn(
            Cypress.env("CORRECT_USERNAME"),
            Cypress.env("CORRECT_PASSWORD")
        );
    });

    it("Add product to the cart", () => {});

    it("Remove product from the cart", () => {});

    after("Clean up after the test", () => {
        cy.logOut();
        cy.clearInfo();
    });
});
