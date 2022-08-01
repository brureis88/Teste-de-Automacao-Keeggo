Feature: Enviar um GET e exibir o conteúdo

    Feature Enviar um GET e exibir o conteúdo

    Scenario: Enviar um GET e receber o conteúdo do campo name e validar o status code
    Given Que desejo receber o conteúdo do campo name da estrutura list e validar o Status Code
    When Faço as requisições 
    Then Os dados solicitados são retornados
