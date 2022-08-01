import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";


before('Acessar site', () => {
    cy.acessarSite(Cypress.env('email'), Cypress.env('senha'))
})

Given('Que sou cliente e desejo realizar busca de um produto', () => {
    cy.get('.icon-home').should('be.visible')
})

When('Quando estou na tela inicial faço a inclusão do produto {string}', (produto) => {
    cy.get('#search_query_top').type(produto)
})

And('Realizo o clique no botão buscar', () => {
    cy.get('#searchbox > .btn').click()
})

Then('Sou direcionado para a tela com sucesso', () => {
    cy.get('.top-pagination-content > .product-count').should('be.visible')
    cy.get('#search_query_top').clear()    
})


Given('Que sou cliente e desejo realizar busca de um produto que não tem no site', () => {
    cy.get('.icon-home').should('be.visible')
})

Then('É apresentado uma mensagem que não foram encontrados resultados', () => {
    cy.get('.alert').should('be.visible')
})


Given('Que sou cliente e desejo realizar busca de um produto pelo menu', () => {
    cy.get('.icon-home').should('be.visible')
})

When('Quando estou na tela inicial faço o clique no menu Women', () => {
    cy.xpath(`//a[text()="Women"]`).click()
})

And('clico no item Blouses', () => {
    cy.xpath(`//a[text()="Blouses"]`).click({force: true})
})

