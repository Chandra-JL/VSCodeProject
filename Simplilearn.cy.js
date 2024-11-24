
describe('This file will cover all the Simplilearn Login Test scenarios', () => {
  

    it('Validate Login Success', () => {
        cy.visit('https://www.simplilearn.com/');
        cy.get('a.login').click();
        cy.get('input.email').type('abc@xyz.com');
        cy.get('input#password').type('Abcd123');
        cy.get('input#remember-me').click();
        cy.get('input[title="Login"]').click();
      })
    
    })
    