# _ArtLoader 🖼_

#### _A virtual museum using Cooper Hewitt's "Get Random" API, 8/2/20_

#### By _**Hannah Beinstein**_

## Description
ArtLoader is a web app I developed to practice making API calls. The program utilizes the Cooper Hewitt Museum's free API, which, when called, returns a random art object from their collection. In the app, when a user clicks the "get new artwork" button, and API call is made, and the artwork that is returned is displayed to the screen. If they'd like, the user can then fetch another artwork by clicking the button again.

## Setup/Installation Requirements

API Instructions:
1. Get a unique API key by creating a free account and registering at https://collection.cooperhewitt.org/api/keys/register/.  

Setup/Installation Instructions:
* Clone the project from its GitHub repository (https://github.com/HBeinstein/artLoader)
* Open in your code editor of choice.
* Run "npm install" in terminal to install all necessary project modules 
* Create a .env file at the top level of your directory, and place your API key in the file using the formatting: "API_KEY = YOUR-API-KEY-HERE". The program will then be able to run using your unique API key. **If you plan to track your project using Git, be sure to create a .gitignore file in the project directory and include ".env" to ensure your personal API key is not published online!**
* Run "npm build" and then "npm start" in your terminal to create a server and view project live.

Software Requirements
1. Internet browser
2. A code editor like VSCode or Atom to view or edit the codebase.
3. A free CooperHewitt.org account and API key

## Known Bugs

_Hoping to add a loader in the future to minimize white background "flashing" between API calls._

## Support and contact details

_Please contact me through my Github or at hannah.beinstein@gmail.com._

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_
* _jQuery_
* _Webpack_
* _Babel_

### License

MIT License.

Copyright (c) 2020 **_Hannah Beinstein_**