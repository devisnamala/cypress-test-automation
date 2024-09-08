describe('SwagLab login test', () => {
  it('passes', { tags: ['@smoke', '@login'] },() => {
    cy.visit('https://www.saucedemo.com/v1/');
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
    // cy.get("select").select("hilo")

    cy.get('.inventory_item_name').should('be.visible').then($elements => {
      // Convert the jQuery collection to an array of text content
      const texts = $elements.map((index, element) => Cypress.$(element).text()).get();

      texts.sort();

      cy.log('Sorted Texts:', texts.join(', ')); // Log as a single string

      let firstElementText = Cypress.$($elements[0]).text();
      // firstElementText = firstElementText.replace(/ /g, '-').toLowerCase();
      cy.log(firstElementText);
      // cy.get(`#add-to-cart-${firstElementText}`).click();

      cy.get('.inventory_item_name')
      .filter(`:contains(${firstElementText})`) // Filter elements by text content
      .parents('.inventory_item') // Navigate to parent element if necessary
      .find('.btn_primary') // Locate the button within the parent
      .click();

    });
  })
})