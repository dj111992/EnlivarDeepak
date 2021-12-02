Feature: Your test

Background: User is on home page
Given I Open URL

Scenario: Your 1st case
Then I check add asset is clickable

Scenario: Your 2nd case
When I add asset "ABCD1234567800"
Then I check if new asset is correctly added

Scenario: Your 3rd case
Then I add asset "ABCD1234567800"
And I check if asset already exists

Scenario: Your 4th case
Then I check Existing assets is clickable

Scenario: Your 5th case
Then I search for saved asset "ABCD1234567800"