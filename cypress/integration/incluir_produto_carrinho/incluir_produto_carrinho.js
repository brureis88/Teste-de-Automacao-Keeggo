import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

before('Acessar site', () => {
    cy.acessarSite(Cypress.env('email'), Cypress.env('senha'))
    cy.get('.icon-home').should('be.visible')
})


Given('Que sou cliente e desejo incluir produto no carrinho {string}', (produto) => {
    cy.get('#search_query_top').type(produto)
    cy.get('#searchbox > .btn').click()

})

When('Faço a escolha selecionando o produto que desejo', () => {
    cy.get('.last-in-line > .product-container > .left-block > .product-image-container > .product_img_link > .replace-2x').click()
})

And('Faço a seleção do tamanho {string}', (tamanho) => {
    cy.get('#group_1').select(tamanho)
})

And('A seleção da cor Green', () => {
    cy.get('#color_15').click()
})

And('Clico em adicionar no carrinho', () => {
    cy.get('.exclusive > span').click()
})

Then('É apresentado a tela com a mensagem de produto adicionado no carrinho com sucesso', () => {
    cy.get('.icon-ok').should('be.visible')
    cy.contains('span', 'Printed Chiffon Dress').should('be.visible')
    cy.contains('span', 'Green, M').should('be.visible')
    cy.contains('span', '1').should('be.visible')
    cy.contains('span', '$16.40').should('be.not.visible')
    cy.get('.cross').click()
})


Given('Que sou cliente e desejo incluir 2 itens do mesmo produto no carrinho {string}', (itens) => {
    cy.get('#search_query_top')
        .clear()
        .type(itens)
    cy.get('#searchbox > .btn').click()

})

When('Faço a escolha selecionando o produto que desejo incluir 2 itens', () => {
    cy.get('.product_img_link > .replace-2x').click()
})

And('Faço a seleção da quantidade 2', () => {
    cy.get('.icon-plus').click()
})

And('A seleção da cor Blue', () => {
    cy.get('#color_14').click()
})

Then('É apresentado a tela com a mensagem de 2 itens adicionados no carrinho com sucesso', () => {
    cy.contains('span', 'Faded Short Sleeve T-shirts').should('be.visible')
    cy.contains('span', 'Blue, L').should('be.visible')
    cy.contains('span', '2').should('be.visible')
    cy.contains('span', '$33.02').should('be.not.visible')
    cy.get('.cross').click()
})


Given('Que sou cliente e desejo excluir os itens do carrinho', () => {
    cy.get('#search_query_top')
        .clear()
        .type('T-shirts')
    cy.get('#searchbox > .btn').click()
    cy.get('.product_img_link > .replace-2x').click()
    cy.get('.icon-plus').click()
    cy.get('#group_1').select('L')
    cy.get('#color_14').click()
    cy.get('.exclusive > span').click()
    cy.get('.cross').click()
})

When('Entro no carrinho', () => {
    cy.get('.shopping_cart > a').click()
})

And('Clico no botão delete', () => {
    cy.get('.icon-trash').click()
})

Then('Na tela é apresentada a mensagem que seu carrinho de compras está vazio', () => {
    cy.xpath(`//p[text()="Your shopping cart is empty."]`).should('be.visible')
})
