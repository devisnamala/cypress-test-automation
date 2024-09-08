import LoginPage from "../pages/LoginPage";

describe('Login Test', () => {
    it('should successfully login for user', { tags: ['@smoke', '@login'] },() => {
        LoginPage.openLoginPage()
            .enterUsername("siri")
            .enterPassword("siri")
            .login();
    });
});
