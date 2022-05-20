Feature: Asset transfer
  Transfer an asset from one ID to another

  Scenario Outline: Asset can be transfered successfully on identify action
    Given "<sender_id>" balance is <sender_initial_balance>
    And "<receiver_id>" balance is <receiver_initial_balance>
    When "<sender_id>" Identifies with "<receiver_id>"
    Then "<receiver_id>" new balance is <receiver_new_balance> and "<sender_id>" new balance is <sender_new_balance>

  Examples:
    | sender_id | sender_initial_balance | receiver_id | receiver_initial_balance | sender_new_balance | receiver_new_balance |
    | chris.horn | 1 | rohinton | 0 | 0 | 1 |
    | chris.horn | 2 | rohinton | 1 | 1 | 2 |
    | chris.horn | 0 | rohinton | 1 | 0 | 1 |
    