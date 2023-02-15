Feature: The Weathershopper Website

  Scenario: Product is purchased based on temperature

    Given I am on the home page
    When I can see temperature
    Then Products are displayed according to the temperature