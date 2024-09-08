// api-utils.js

export function baseUrl(){
    const baseUrl = Cypress.config('baseUrl');
    return baseUrl;
}

export function apiGet(url, headers = {}) {
    return cy.request({
      method: 'GET',
      url,
      headers
    });
  }
  
  export function apiPost(url, body, headers = {},) {
    return cy.request({
      method: 'POST',
      url,
      body,
      headers,
      failOnStatusCode:false
    });
  }
  
  export function apiPut(url, body, headers = {}) {
    return cy.request({
      method: 'PUT',
      url,
      body,
      headers
    });
  }
  
  export function apiDelete(url, headers = {}) {
    return cy.request({
      method: 'DELETE',
      url,
      headers
    });
  }
  