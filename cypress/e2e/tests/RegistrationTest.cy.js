import RegistrationPAge from "../pages/RegistrationPAge";

describe('Registration Test', () => {
  beforeEach(() => {
    cy.fixture('registration').then(function (data) {
      this.data = data;
    });
  });

  it('should successfully register a new user',{ tags: ['@smoke', '@login'] }, function () {
    RegistrationPAge
      .openRegistrationPage()
      .enterFirstname(this.data.firstname)
      .enterLastname(this.data.lastname)
      .enterAddress(this.data.Address)
      .enterCity(this.data.City)
      .enterState(this.data.State)
      .enterZipCode(this.data.ZipCode)
      .enterPhoneNumber(this.data.phone)
      .enterSSN(this.data.SSN)
      .enterUsername(this.data.UserName)
      .enterPassword(this.data.Password)
      .enterRepeatedPassword(this.data.Confirm)
      .submit();
  });
});
