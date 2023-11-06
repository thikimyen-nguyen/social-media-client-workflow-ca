import { login } from "../../api/auth/login.js";
import localStorageMock from "../../mock/localStorage.mock.js";


const testEmail = "example@email.com";
const testPassword = "password";
const testProfile = { email: "example@email.com", user: "test" };
const testToken = "fakeToken";
global.localStorage = localStorageMock;

function mockFetchSuccess() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: "OK",
    json: () => Promise.resolve({ accessToken: testToken, ...testProfile})
  })
};
function mockFetchFailure() {
  return Promise.resolve ({
    ok: false,
    status: 404,
    statusText: "Not Found"
  })
};
describe ("Login function", () => {
  

  it("fetches and stores a token in local storage when fetching sucessfully", async () => {

  
    global.fetch = jest.fn(() => mockFetchSuccess());
   
    const result = await login(testEmail, testPassword);
  
    // Assertions for the successful case
    expect(result).toEqual(testProfile);
    expect(localStorage.getItem("token")).toEqual(`"${testToken}"`);
    
  });
});


// it('should handle a failed login', async () => {
  
//   // Mock a failed response
//   global.fetch = jest.fn(() => mockFetchFailure());

//   try {
//     await login(email, password);
//   } catch (error) {
//     // Assertions for the error case
//     expect(error.message).toBe('Not Found');
//   }
// });