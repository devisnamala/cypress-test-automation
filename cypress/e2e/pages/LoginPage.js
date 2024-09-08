import routes from "../Config/routes";
class LoginPage{


    get Username(){return cy.get("input[name='username']");}
    get password(){return cy.get("input[name='password']");}
    get loginButton(){return cy.get("input[value='Log In']");}

    open() {
        //return cy.visit(baseUrl + routes.LOGIN_ENDPOINT);
        const baseUrl = Cypress.config('baseUrl'); // Fetch baseUrl from Cypress config
        const loginEndpoint = routes.LOGIN_ENDPOINT;
        const fullUrl = `${baseUrl}${loginEndpoint}`;
        
        return cy.visit(fullUrl);
    }

    // Method to open the registration page explicitly
    openLoginPage() {
        this.open();
        return this;
    }

    enterUsername(username) {
        this.Username.clear().type(username);
        return this;
    }

    enterPassword(password) {
        this.password.clear().type(password);
        return this;
    }

    login(){
        this.loginButton.click();
    }

}

export default new LoginPage();