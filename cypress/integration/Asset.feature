Feature: Create and Update an Asset

  Scenario: Creating an asset
    Given I’m logged in as a surveyor
    Given I've navigated to the space page
    When I create an asset
    Then the asset should appear in the table
    And the asset should sync to the database

  Scenario: Updating an asset
    Given an asset exists
    Given I’m logged in as a surveyor
    Given I've navigated to the space page
    When I update the asset info
    Then the update should appear in the table
    Then the update should sync to the database

  Scenario: Checking CardView
    Given an asset exists
    Given I’m logged in as a surveyor
    Given I've navigated to the space page
    When I switch to card view
    Then the asset cardview should be displayed

  Scenario: Check Barcode Validation
    Given an asset exists
    Given I’m logged in as a surveyor
    Given I've navigated to the space page
    When I update the barcode with wrong info
    Then barcode validation error should appear

  Scenario: Creating an asset with a reminder note
    Given a space exists
    Given I’m logged in as a surveyor
    Given I've navigated to the space page
    When I create an asset with a reminder note
    Then the asset should appear in the table
    And the asset should sync to the database
  
  Scenario: Untagged Asset
    Given a space exists
    Given I’m logged in as a surveyor
    Given I've navigated to the space page
    When I create an untagged asset
    Then the asset should appear in the table  
    And the asset should sync to the database
    And the asset should appear in the untagged asset report