describe("Home ", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("homeUrl"));
        cy.get("#categorymenu").within(() => {
            cy.get("ul").should("contain", "Home");
        });
    });

    it("Display featured products", () => {});

    it("Select the product from featured", () => {});

    it("Display latest products", () => {});

    it("Select the product from latest", () => {});

    it("Display bestsellers", () => {});

    it("Select the product bestsellers", () => {});

    it("Display specials", () => {});

    it("Select the product from specials", () => {});
});
