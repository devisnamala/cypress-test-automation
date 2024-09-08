import { baseUrl } from "../Config/constants";
import routes from "../Config/routes";


class RegistrationPage {

    // Getters for the registration form fields
    get firstname() { return cy.get("input[id='customer.firstName']"); }
    get lastname() { return cy.get("input[id='customer.lastName']"); }
    get address() { return cy.get("input[id='customer.address.street']"); }
    get city(){ return cy.get("input[id='customer.address.city']");}
    get state() { return cy.get("input[id='customer.address.state']"); }
    get zipCode() { return cy.get("input[id='customer.address.zipCode']"); }
    get phoneNumber() { return cy.get("input[id='customer.phoneNumber']"); }
    get ssn() { return cy.get("input[id='customer.ssn']"); }
    get username() { return cy.get("input[id='customer.username']"); }
    get password() { return cy.get("input[id='customer.password']"); }
    get repeatedPassword() { return cy.get('#repeatedPassword'); }
    get register(){return cy.get("input[value='Register']");}

    // Method to open the registration page
    open() {
        //return cy.visit(baseUrl + routes.REGISTRATION_ENDPOINT);

        const baseUrl = Cypress.config('baseUrl'); // Fetch baseUrl from Cypress config
        const registrationEndpoint = routes.REGISTRATION_ENDPOINT;
        const fullUrl = `${baseUrl}${registrationEndpoint}`;
        
        return cy.visit(fullUrl);
    }

    // Method to open the registration page explicitly
    openRegistrationPage() {
        this.open();
        return this;
    }

    // Methods to enter data into form fields, returning 'this' for chaining
    enterFirstname(firstname) {
        this.firstname.clear().type(firstname);
        return this;
    }

    enterLastname(lastname) {
        this.lastname.clear().type(lastname);
        return this;
    }

    enterAddress(address) {
        this.address.clear().type(address);
        return this;
    }

    enterState(state) {
        this.state.clear().type(state);
        return this;
    }

    enterCity(city){
        this.city.clear().type(city);
        return this;
    }

    enterZipCode(zipCode) {
        this.zipCode.clear().type(zipCode);
        return this;
    }

    enterPhoneNumber(phoneNumber) {
        this.phoneNumber.clear().type(phoneNumber);
        return this;
    }

    enterSSN(ssn) {
        this.ssn.clear().type(ssn);
        return this;
    }

    enterUsername(username) {
        this.username.clear().type(username);
        return this;
    }

    enterPassword(password) {
        this.password.clear().type(password);
        return this;
    }

    enterRepeatedPassword(repeatedPassword) {
        this.repeatedPassword.clear().type(repeatedPassword);
        return this;
    }

    submit(){
        this.register.click();
    }
}

export default new RegistrationPage();
