Feature: Validar os produtos que foram incluídos na tela de pagamento

    Feature Validar os produtos na tela de pagamento

    Scenario: Validar os produtos na tela de pagamento
    Given Que sou cliente e desejo validar na tela de pagamento os itens que foram incluídos no carrinho
    When Entro no carrinho
    And Vou até a tela de pagamento
    Then É possível validar as informações com sucesso