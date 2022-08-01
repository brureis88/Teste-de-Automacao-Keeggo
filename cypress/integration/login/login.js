import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

Given('Que sou cliente e desejo realizar o login no site', () => {
    cy.visit('/')
})

When('Faço o clique no botão "Entrar"', () => {
    cy.get('.login').click()
})

And('Realizo a inclusão do Endereço de e-mail {string}', (useremail) => {
    cy.get('#email').type(useremail)
})

And('Da senha {string}', (password) => {
    cy.get('#passwd').type(password)
})

And('Clico no botão "Entrar"', () => {
    cy.get('#SubmitLogin > span').click()
})

Then('É realizado o acesso com sucesso', () => {
    cy.get('.icon-home').should('be.visible')
})


Given('Que sou cliente e faço a inclusão de uma senha errada', () => {
    cy.visit('/')
})

Then('Não é possível realizar o acesso', () => {
    cy.xpath(`//li[text()="Authentication failed."]`).should('be.visible')
})


Given('Que sou cliente e faço a inclusão de um e-mail inválido', () => {
    cy.visit('/')
})

Then('Não é possível realizar o acesso e-mail inválido', () => {
    cy.xpath(`//li[text()="Invalid email address."]`).should('be.visible')
})