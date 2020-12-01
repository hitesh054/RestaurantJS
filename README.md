# Restaurant

This Application caters to the below requirement:
* A user should be able to see the menu and order for him/her self.
* A user should be able to order again.
* Bill should be generated once he/she is done.

# Code Walk-Through
**app.js**: This file contains the code to create a readline interface to accept user input.
On the basis of items selected, bill gets generated for the user.

**Unit test Libraries Used**:
Mocha: to test each Statements ,Branches, Functions and Lines.
to run the test suite:
* npm run test

NYC: This library provides code coverage capability
to check the code coverage:
* npm run coverage
Once the script is completely executed a .coverage folder will be generated.
cd /.coverage/lcov-report
and open the index.html in your preferred browser you will be able to see the complete status of code coverage in TDD.


# How to run
* **npm i**
* **npm run start**
* User will be prompted with a menu, please choose your order and place your order in comma separated format

