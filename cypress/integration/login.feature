Feature: Login

    Feature Realizar login no site

    Scenario: Realizar login com sucesso
    Given Que sou cliente e desejo realizar o login no site
    When Faço o clique no botão "Entrar"
    And Realizo a inclusão do Endereço de e-mail "teste2021@teste.com.br"
    And Da senha "teste"
    And Clico no botão "Entrar"
    Then É realizado o acesso com sucesso

    Scenario: Falha ao realizar o login - Senha Inválida
    Given Que sou cliente e faço a inclusão de uma senha errada
    When Faço o clique no botão "Entrar"
    And Realizo a inclusão do Endereço de e-mail "teste2021@teste.com.br"
    And Da senha "teste2023"
    And Clico no botão "Entrar"
    Then Não é possível realizar o acesso

    Scenario: Falha ao realizar o login - E-mail Inválido
    Given Que sou cliente e faço a inclusão de um e-mail inválido
    When Faço o clique no botão "Entrar"
    And Realizo a inclusão do Endereço de e-mail "teste2021@teste"
    And Da senha "teste"
    And Clico no botão "Entrar"
    Then Não é possível realizar o acesso e-mail inválido