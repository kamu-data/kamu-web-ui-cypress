import ProjectLinks from "helpers/project-links";

describe("Authentification", () => {
    beforeEach(() => {
        cy.intercept("POST", "/graphql").as("graphqlRequest");
        cy.visit(ProjectLinks.URL_HOME);
        cy.wait("@graphqlRequest");
    });

    it("Success authentification", () => {
        cy.get(".img-container-round img").click();
        cy.get('[data-test-id="userName"]').should("have.text", "anonymous");
        cy.get('[data-test-id="openLogin"]').click();
        cy.get("#login_field")
            .type(Cypress.env("initUsername") as string)
            .should("have.value", Cypress.env("initUsername") as string);
        cy.get("#password")
            .type(Cypress.env("initPassword") as string)
            .should("have.value", Cypress.env("initPassword") as string);
        cy.get(".btn").click();
        cy.get(".img-container-round img").click();
        cy.get('[data-test-id="userName"]').should(
            "have.text",
            Cypress.env("initUsername") as string,
        );
        cy.location("pathname").should("eq", "v/search");
        // cy.location("pathname", { timeout: 10000 }).should("eq", "v/search");
    });
});
