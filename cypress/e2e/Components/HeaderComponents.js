export default class HeaderComponent {
    get logout(){return cy.get("")}

    open(Path) {
        //return cy.visit(baseUrl + routes.LOGIN_ENDPOINT);
        const baseUrl = Cypress.config('baseUrl'); // Fetch baseUrl from Cypress config
        const Endpoint = routes.Path;
        const fullUrl = `${baseUrl}${Endpoint}`;
        return cy.visit(fullUrl);
    }
}