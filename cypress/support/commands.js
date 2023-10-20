let LOCAL_STORAGE_CACHE = {};

Cypress.Commands.add("logIn", (user, pass) => {
    cy.visit(Cypress.env("loginUrl"));
    cy.get("#maincontainer").get("h1").should("contain", "Account Login");
    cy.get("input[name=loginname]").type(user);
    cy.get("input[name=password]").type(`${pass}{enter}`);
});

Cypress.Commands.add("logOut", () => {
    cy.visit(Cypress.env("logoutUrl"));
    cy.get(".contentpanel").should("contain", Cypress.env("logoutMsg"));
});

Cypress.Commands.add("clearInfo", () => {
    localStorage.clear();
    LOCAL_STORAGE_CACHE = {};
});

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
