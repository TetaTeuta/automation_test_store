describe("Cart ", () => {
    beforeEach(() => {
        cy.logIn(
            Cypress.env("CORRECT_USERNAME"),
            Cypress.env("CORRECT_PASSWORD")
        );
        cy.visit(Cypress.env("homeUrl"));
    });

    it("Add product to the cart", () => {
        cy.clickItemInSection("#latest");

        cy.get("body").then(($body) => {
            if ($body.find(".nostock").length > 0) {
                cy.selectAnotherProduct("#latest");
            } else cy.addToCart();
        });
    });

    it("Remove product from the cart", () => {});

    after("Clean up after the test", () => {
        cy.logOut();
        cy.clearInfo();
    });
});
