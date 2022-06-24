# Twitter test case automation
## Test case base
### Title: Check twitter web app autentication with phone number
### Requirements
- Firefox desktop installed
- A twitter account created with a phone number and password

### Steps
1. Open a browser (in this case: firefox).
2. In the browser search box, write `twitter.com/login` and press Enter key.
3. In the text input named "Phone, email or username" write the twitter account phone number.
4. Click in the button named "Next".
5. In the text input named "Password" write the twitter account password.
6. Click in the button named "Log in".

### Expected results
- The home page is visible and on top of the page there is a header with the text "Home".


---
## Program requirements
- Node js and npm installed.
- Git installed
- Firefox desktop installed
- Firefox webdriver installed. Can be downloaded from `https://github.com/mozilla/geckodriver/releases` (not required in all OS)

## Instalation
### Steps
1. Open a terminal and write `git clone https://github.com/drtocino/seleniumTestJs.git`, then press Enter key
2. Write `cd twitterSelenium`, then press Enter key
3. Write `npm i`, then press Enter key

---

## Use
### Steps
1. Open a terminal on the project location and write: `npm test`, then press Enter key.

## Notes
- The commented lines in `tests/test.js` are just in case the binary location of Firefox is different than the default one.
- The file tests/testSignUp.js is for another test case, not viable with seleniun.