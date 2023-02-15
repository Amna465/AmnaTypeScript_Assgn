Feature: The Weathershopper Website

  Scenario: Product is purchased based on temperature

    Given I am on the home page
    When I can see temperature
    Then Products are purchased according to the temperature
    # When Cart items and clicked items names are same
    Then I can proceed to payment
