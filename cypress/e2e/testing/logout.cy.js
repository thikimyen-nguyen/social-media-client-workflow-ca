// The user can log out with the logout button
const validEmail = "ntkyen@stud.noroff.no";
const validPassword = "123456789";

describe("User can log out with logout button", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.clearLocalStorage();
    cy.wait(500);
  });
  
  it("should log out when clicking logout button", () => {
    // First, need to log in sucessfully
    cy.get("#registerModal").contains("Login").click();
    cy.wait(500);
    cy.get("#loginForm").should("be.visible");
    cy.get("#loginEmail").type(validEmail);
    cy.get("#loginPassword").type(validPassword);

    // Click submit button
    cy.get("button[type=submit]").contains("Login").click();
    cy.wait(500);
    // Check if login successfully
    cy.window().its('localStorage').invoke("getItem", "token").should("not.be.null");

    // Check if logout button is visible
    cy.get("button").contains("Logout").should("be.visible");
    cy.wait(500);

    // Click logout button
    cy.get("button").contains("Logout").click();

    // Check if logout successfully
    cy.window().its('localStorage').invoke("getItem", "token").should("be.null");
    cy.get("#registerModal").contains("Login").should("be.visible");
    
  });
});