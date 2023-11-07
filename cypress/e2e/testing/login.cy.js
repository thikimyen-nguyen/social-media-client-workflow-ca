// The user can log in and access their profile
const validEmail = "ntkyen@stud.noroff.no";
const validPassword = "123456789";

describe("User can log in and access profile page", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.clearLocalStorage();
    cy.wait(500);
  });
  
  it("should log in with valid email and password", () => {
    // Find login form and input
    cy.get("#registerModal").contains("Login").click();
    cy.wait(500);
    cy.get("#loginForm").should("be.visible");
    cy.get("#loginEmail").type(validEmail);
    cy.get("#loginPassword").type(validPassword);

    // Click submit button
    cy.get("button[type=submit]").contains("Login").click();

    // Check if login successfully
    cy.window().its('localStorage').invoke("getItem", "token").should('not.be.null');

    // Check if user access profile successfully
    cy.url().should("include", "?view=profile");
    
  });
});
