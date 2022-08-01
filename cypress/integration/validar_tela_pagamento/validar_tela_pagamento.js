import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

before('Acessar site', () => {
    cy.acessarSite(Cypress.env('email'), Cypress.env('senha'))  
    cy.get('.icon-home').should('be.visible')
})

Given('Que sou cliente e desejo validar na tela de pagamento os itens que foram incluídos no carrinho', () => {
    cy.incluirProdutosCarrinho()
})

When('Entro no carrinho', () => {
    cy.get('.shopping_cart > a').click()
})

And('Vou até a tela de pagamento', () => {
    cy.xpath('//span[text()="Proceed to checkout"]').click()
    cy.xpath('//span[text()="Proceed to checkout"]').click()
    cy.get('#cgv').click({force: true})
    cy.get('.cart_navigation > .button > span').click()
})

Then('É possível validar as informações com sucesso', () => {
    cy.contains('a', 'Faded Short Sleeve T-shirts').should('be.visible')
    cy.get('#product_1_6_0_509957 > .cart_description > :nth-child(3) > a').should('have.text','Color : Blue, Size : L')
    cy.contains('a', 'Printed Chiffon Dress').should('be.visible')
    cy.get('#product_7_38_0_509957 > .cart_description > :nth-child(3)').should('have.text', 'Color : Green, Size : M')

})