Feature: Incluir produtos no carrinho

    Feature Incluir produtos no carrinho

    Scenario: Incluir 1 item do produto no carrinho
    Given Que sou cliente e desejo incluir produto no carrinho "Summer Dress"
    When Faço a escolha selecionando o produto que desejo
    And Faço a seleção do tamanho "M"
    And A seleção da cor Green
    And Clico em adicionar no carrinho
    Then É apresentado a tela com a mensagem de produto adicionado no carrinho com sucesso

    Scenario: Incluir 2 itens do mesmo produto no carrinho
    Given Que sou cliente e desejo incluir 2 itens do mesmo produto no carrinho "T-shirts"
    When Faço a escolha selecionando o produto que desejo incluir 2 itens
    And Faço a seleção da quantidade 2
    And Faço a seleção do tamanho "L"
    And A seleção da cor Blue
    And Clico em adicionar no carrinho
    Then É apresentado a tela com a mensagem de 2 itens adicionados no carrinho com sucesso

    Scenario: Excluir itens do carrinho
    Given Que sou cliente e desejo excluir os itens do carrinho
    When Entro no carrinho
    And Clico no botão delete
    Then Na tela é apresentada a mensagem que seu carrinho de compras está vazio