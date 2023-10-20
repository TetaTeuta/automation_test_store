describe("Home ", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("homeUrl"));
        cy.get("#categorymenu").within(() => {
            cy.get("ul").should("contain", "Home");
        });
    });

    it("Display featured products", () => {
        cy.checkSectionLength("#featured", 4);
    });

    it("Select the product from featured", () => {
        cy.clickItemInSection("#featured");
    });

    it("Display latest products", () => {
        cy.checkSectionLength("#latest", 4);
    });

    it("Select the product from latest", () => {
        cy.clickItemInSection("#latest");
    });

    it("Display bestsellers", () => {
        cy.checkSectionLength("#bestseller", 4);
    });

    it("Select the product bestsellers", () => {
        cy.clickItemInSection("#bestseller");
    });

    it("Display specials", () => {
        cy.checkSectionLength("#special", 4);
    });

    it("Select the product from specials", () => {
        cy.clickItemInSection("#special");
    });
});
