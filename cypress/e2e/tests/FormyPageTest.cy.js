import FormPage from "../pages/FormPage";

describe('Formy page complete form', () => {

  beforeEach(() => {
    cy.fixture('completeform').then(function (data) {
      this.data = data;
    });
  });

  it('Fill form', {tags: ['@Regression1']}, function() {
      FormPage
      .openFormyPage()
      .enterFirstname(this.data.firstname)
      .enterLastname(this.data.lastname)
      .enterJobTitle(this.data.jobTitle)
      .selectRadioButton()
      .checkCheckbox()
      .selectDropdown(this.data.Dropdown)
      .enterDate(this.data.Date)
      .clickSubmit(this.data.expectedMessage)
  });
});
