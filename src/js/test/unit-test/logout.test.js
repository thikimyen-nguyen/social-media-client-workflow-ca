import { logout } from "../../api/auth/logout.js";
import { localStorageMock } from "../__mocks__/localStorage.js";

global.localStorage = localStorageMock;

describe ("Logout function", () => {

  it('should clear the "token" from localStorage', () => {
    localStorage.setItem("token", "testToken");
    logout();
    expect(localStorage.getItem("token")).toBeNull();
  });

  it('should not clear other items in localStorage', () => {
    // Set some items in the custom localStorageMock
    localStorage.setItem("token", "testToken");
    localStorage.setItem("otherData", "testData");

    logout();

    // Ensure that only the "token" key is removed, while "otherData" remains
    expect(localStorage.getItem("token")).toBeNull();
    expect(localStorage.getItem("otherData")).toBe("testData");
  });
})