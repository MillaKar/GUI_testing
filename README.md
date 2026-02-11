# GUI Testing  
## Description – Color Converter

In this project there is a simple web-based Color Converter application.

The application converts:

- HEX → RGB  
- RGB → HEX  

Automated GUI testing is done using **Selenium WebDriver (Python)**.

The Selenium test simulates user actions:
- Opens the web page
- Enters values into input fields
- Clicks the Convert buttons
- Verifies that the correct result is displayed
- Takes screenshots as evidence

Example test:

HEX input: FF0000  

Expected result:  
255, 0, 0  

RGB input:  
0, 255, 0  
Expected result:  
00FF00  
## How to run

1.) Install backend dependencies:
npm install


2.) Start the server:
npm run dev


3.) Open the frontend in browser (for example using Live Server).

4.) Run the Selenium test:
python ui_test.py


---

## Test Output

When the test runs successfully:

HEX -> RGB result: RGB: 255, 0, 0
RGB -> HEX result: Hex: 00FF00
ALL TESTS PASSED


Screenshots are generated during test execution.
