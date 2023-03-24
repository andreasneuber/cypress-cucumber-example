Feature: Different people go to different places
  Description: The purpose of this feature is to illustrate the usage of concurrent windows
  # See also: https://docs.cypress.io/guides/references/trade-offs#Permanent-trade-offs

  @concurrentWindows
  Scenario: Concurrent windows are possible
    Given different people went to different sites
    When they realize that they forgot what they actually wanted to do there
    Then they leave the sites again