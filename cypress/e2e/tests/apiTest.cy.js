const apiroutes = require("../Config/apiroutes");
const { apiPut, apiDelete, apiGet, apiPost } = require("../utils/apiUtils");

describe('API Testing with Cypress', () => {

  it('should GET a list of users', {tags: ['@api']}, () => {
    apiGet(apiroutes.baseUrl + apiroutes.list_users)
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('data');
      });
  });

  it('should create a new user', {tags: ['@api']}, () => {
    cy.fixture('apiPost').then((data) => {
      apiPost(apiroutes.baseUrl + apiroutes.create, data)
        .then((response) => {
          expect(response.status).to.eq(201);
          expect(response.body).to.have.property('id');
        });
    });
  });

  it('should give error message as password is missing', {tags: ['@api']}, () => {
    const userData = {
        "email": "peter@klaven"
      };
      apiPost(apiroutes.baseUrl + apiroutes.login_user, userData)
        .then((response) => {
          expect(response.status).to.eq(400);
          expect(response.body).to.have.property('error','Missing password');
        });
    });

  it('should update a user', {tags: ['@api']}, () => {
    cy.fixture('apiPut').then((data) => {
    apiPut(apiroutes.baseUrl + apiroutes.update, data)
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('job', 'zion resident');
      });
  });
});

  it('should DELETE a user', {tags: ['@api']}, () => {
    apiDelete(apiroutes.baseUrl + apiroutes.deleteUser)
      .then((response) => {
        expect(response.status).to.eq(204); 
      });
  });

});
