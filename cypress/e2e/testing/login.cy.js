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
    cy.window().its('localStorage').invoke("getItem", "token").should("not.be.null");

    // Check if user access profile successfully
    cy.url().should("include", "?view=profile");
    
  });
});

// The user cannot submit the login form with invalid credentials and is shown a message
const invalidEmail = "invalid@email.com";
const invalidPassword = "invalidpassword";

describe("The user cannot submit the login form with invalid credentials and is shown a message", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.clearLocalStorage();
    cy.wait(500);
  });
  
  it("should not login with empty input", () => {
    // Find login form and input
    cy.get("#registerModal").contains("Login").click();
    cy.wait(500);
    cy.get("#loginForm").should("be.visible");

    // Click submit button
    cy.get("button[type=submit]").contains("Login").click();

    // Check if login fail
    cy.window().its('localStorage').invoke("getItem", "token").should("be.null");

    // Check if a message is shown
    cy.on("window:alert", (message) => {
      expect(message).to.include("Either your username was not found or your password is incorrect");
    });    
  });

  it("should not login with invalid email", () => {
    // Find login form and input
    cy.get("#registerModal").contains("Login").click();
    cy.wait(500);
    cy.get("#loginForm").should("be.visible");
    cy.get("#loginEmail").type(invalidEmail);
    cy.get("#loginPassword").type(validPassword);

    // Click submit button
    cy.get("button[type=submit]").contains("Login").click();

    // Check if login fail
    cy.window().its('localStorage').invoke("getItem", "token").should("be.null");

    // Check if a message is shown
    cy.on("window:alert", (message) => {
      expect(message).to.include("Either your username was not found or your password is incorrect");
    });    
    
  });

  it("should not login with invalid password", () => {
    // Find login form and input
    cy.get("#registerModal").contains("Login").click();
    cy.wait(500);
    cy.get("#loginForm").should("be.visible");
    cy.get("#loginEmail").type(validEmail);
    cy.get("#loginPassword").type(invalidPassword);

    // Click submit button
    cy.get("button[type=submit]").contains("Login").click();

    // Check if login fail
    cy.window().its('localStorage').invoke("getItem", "token").should("be.null");

    // Check if a message is shown
    cy.on("window:alert", (message) => {
      expect(message).to.include("Either your username was not found or your password is incorrect");
    });    
    
  });
});