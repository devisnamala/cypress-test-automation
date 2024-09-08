class FormPage {
    // Getters
    get Firstname() { return cy.get("#first-name"); }
    get Lastname() { return cy.get("#last-name"); }
    get jobTitle() { return cy.get("#job-title"); }
    get radio() { return cy.get("#radio-button-1"); }
    get checkbox() { return cy.get("#checkbox-2"); }
    get dropdown() { return cy.get("#select-menu"); }
    get datePicker() { return cy.get("#datepicker"); }
    get submit(){ return cy.get("a[role='button']");}
    get message(){return cy.get("div[role='alert']");}


    open() {
        return cy.visit("https://formy-project.herokuapp.com/form");
    }

    openFormyPage() {
        this.open();
        return this;
    }
    // Enter Methods
    enterFirstname(firstname) {
        this.Firstname.clear().type(firstname);
        return this;
    }

    enterLastname(lastname) {
        this.Lastname.clear().type(lastname);
        return this;
    }

    enterJobTitle(jobTitle) {
        this.jobTitle.clear().type(jobTitle);
        return this;
    }

    selectRadioButton() {
        this.radio.check();  // index is used if multiple radio buttons are present
        return this;
    }

    checkCheckbox() {
        this.checkbox.check();  // index is used if multiple checkboxes are present
        return this;
    }

    selectDropdown(option) {
        this.dropdown.select(option);  // option can be the value, text, or index
        return this;
    }

    enterDate(date) {
        this.datePicker.clear().type(date);  // date should be in a format accepted by the date picker, e.g., '2024-09-06'
        return this;
    }

    clickSubmit(expectedText){
        this.submit.click();
        this.message.should('contain.text', expectedText);
        return this;
    }
}

export default new FormPage();
