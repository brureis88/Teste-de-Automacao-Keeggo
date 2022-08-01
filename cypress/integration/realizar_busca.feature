Feature: Realizar busca de produtos

    Feature Realizar busca de produtos

    Scenario: Realizar busca de produtos
    Given Que sou cliente e desejo realizar busca de um produto
    When Quando estou na tela inicial faço a inclusão do produto "Dress"
    And Realizo o clique no botão buscar
    Then Sou direcionado para a tela com sucesso

    Scenario: Realizar busca de produtos que não tem no site
    Given Que sou cliente e desejo realizar busca de um produto que não tem no site
    When Quando estou na tela inicial faço a inclusão do produto "Pants"
    And Realizo o clique no botão buscar
    Then É apresentado uma mensagem que não foram encontrados resultados

    Scenario: Realizar busca de produtos pelo menu/sub-abas
    Given Que sou cliente e desejo realizar busca de um produto pelo menu
    When Quando estou na tela inicial faço o clique no menu Women
    And clico no item Blouses
    Then Sou direcionado para a tela com sucesso