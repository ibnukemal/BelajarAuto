describe('Verify Login Functionality', () => {
  beforeEach(() => {
    cy.visit('')
  })
  it('Success Login', () => {
    cy.get('#user-name').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('.app_logo').should('be.visible')
    cy.get('[data-test="title"]').should('have.text','Products')
    cy.url().should('include','inventory')
  })
  it('Failed Login - user locked out', () => {
    cy.get('#user-name').type('locked_out_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('be.visible')
    cy.get('[data-test="error"]').should('contain.text','Sorry, this user has been locked out')
  })
  it('Failed Login - wrong username', () => {
    cy.get('#user-name').type('salah_orang')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('be.visible')
    cy.get('[data-test="error"]').should('contain.text','Username and password do not match any user in this service')
  })
  it('Failed Login - wrong password', () => {
    cy.get('#user-name').type('standard_user')
    cy.get('[data-test="password"]').type('bukan_password')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('be.visible')
    cy.get('[data-test="error"]').should('contain.text','Username and password do not match any user in this service')
  })
})