Cypress.Commands.add("logOut", () => {});

Cypress.Commands.add("checkSectionLength", (section, length) => {
    cy.get(section).within(() => {
        cy.get(".thumbnails").children().should("have.length", length);
    });
});

Cypress.Commands.add("clickItemInSection", (section) => {
    const rndInt = Math.floor(Math.random() * 3) + 1;
    cy.get(section).within(() => {
        cy.get(".thumbnails")
            .children()
            .eq(rndInt)
            .find(".thumbnail > a")
            .should("have.attr", "href")
            .then((href) => {
                cy.visit(href);
                cy.url().should("include", href);
            });
    });
});

const compareSnapshotCommand = require("cypress-visual-regression/dist/command");

compareSnapshotCommand();
