import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('Que desejo receber o conteúdo do campo name da estrutura list e validar o Status Code', () => {
})

When('Faço as requisições', () => {
})

Then('Os dados solicitados são retornados', () => {
    cy.request({
        method: 'GET', 
        url: 'https://api.trello.com/1/actions/592f11060f95a3d3d46a987a'
    
    }).as ('response').then((resposta) => {
        expect(resposta.body.data.list).to.have.property('name', 'Professional')
        expect(resposta.status).to.equal(200)
    })    
})
