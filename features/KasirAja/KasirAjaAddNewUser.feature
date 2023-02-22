Feature: Add New User Feature

  Scenario: Login with Valid credential

    Given Website Homepage
    When I input email : <email>
    When I input password : <password>
    Then I click login button

    Examples:
      | email                    | password  |                
      | akunspesial001@gmail.com | spesial01 |

  Scenario: Add New User

    Given Website Dashboard
    When I click pengguna button
    When I click tambah button
    When I input user nama : <userNama>
    When I input user email : <userEmail>
    When I input user password : <userPassword>
    When I click simpan button
    Then I redirected back to Pengguna page

    Examples:
      | userNama  | userEmail                | userPassword  |                
      | John Cena | akunspesial002@gmail.com | spesial02     |

  Scenario Outline: Add New User with invalid email

    Given Website Pengguna 
    When I click tambah button
    When I input user nama : <userNama>
    When I input user email : <userEmail>
    When I input user password : <userPassword>
    When I click simpan button
    Then I remain on page with message : <errorMessage>

    Examples:
      | userNama  | userEmail            | userPassword  | errorMessage                  |              
      | Big Smoke | akunspesialgmail.com | spesial03     | "email" must be a valid email |
      