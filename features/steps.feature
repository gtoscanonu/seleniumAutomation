@allTest
Feature: Exercices selenium actions

@test1
#Click 5 times the add element button and then delete
Scenario: Add and Remove buttons
Given I visit the site of test https://the-internet.herokuapp.com
And I go to addRemoveLink test
When I add 5 elements
And I remove 5 elements

@test2
#Check element, if it does not appear, refresh the page until an element appears
Scenario: Dissapearing elements
Given I visit the site of test https://the-internet.herokuapp.com
When I go to dissappearingElementsLink test
Then I check galeryButton element in the page 

@test3
#Login
Scenario: Login user
Given I visit the site of test https://testfaceclub.com/ejercicios/
When I login with user admin and password admin123 
Then I check page employment









