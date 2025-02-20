describe('Verify Login Functionality', () => {
  it('Failed Login - wrong password', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('standard_user')
    cy.get('[data-test="password"]').type('secretsauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('be.visible')
    cy.get('[data-test="error"]').should('contain.text','Username and password do not match any user in this service')
  })
  it('Failed Login - wrong username', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('ibnudemo')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('be.visible')
    cy.get('[data-test="error"]').should('contain.text','Username and password do not match any user in this service')
  })
  it('Failed Login - wrong username and password', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('ibnudemo')
    cy.get('[data-test="password"]').type('wrong_password')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('be.visible')
    cy.get('[data-test="error"]').should('contain.text','Username and password do not match any user in this service')
  })
  it('Failed Login - empty username and password', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').clear()
    cy.get('[data-test="password"]').clear()
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('be.visible')
    cy.get('[data-test="error"]').should('contain.text','Username is required')
  })
  it('Failed Login - empty username', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').clear()
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('be.visible')
    cy.get('[data-test="error"]').should('contain.text','Username is required')
  })
  it('Failed Login - empty password', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('standard_user')
    cy.get('[data-test="password"]').clear()
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('be.visible')
    cy.get('[data-test="error"]').should('contain.text','Password is required')
  })
  it('Success Login', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('.app_logo').should('be.visible')
    cy.get('[data-test="title"]').should('have.text','Products')
    cy.url().should('include','inventory')
  })
})