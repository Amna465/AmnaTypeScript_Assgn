Feature: The Weathershopper Website

  Scenario: Product is purchased based on temperature

    Given I am on the home page 
    When I can see temperature
    Then Products are purchased according to the temperature 


    Given Cart values and clicked items values matched
    When I can fill the checkout form
    Then Payment is successful
