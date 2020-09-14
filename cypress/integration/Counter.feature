Feature: Counter
  Scenario: Increment
    Given I open the home page
    When I click the increment button
    Then I see the counter value is 2
