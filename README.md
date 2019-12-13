# SignUp React Component

## How to build

### `yarn build` or `npm build`

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

## How to run 
### `yarn start` or `npm start`

Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.  
You will also see any lint errors in the console.

## How to use
This app contains only one view - a signUp form. The signUp form has its own model which determines what to show. Model is selected based on the language set.

#### All available form fields: 
 * E-mail address input *(required)*
 * Age checkbox *(required)*
 * Newsletter subscription checkbox *(optional)*
 * Gender radio buttons *(optional)*

Required fields are validated with each change.  
After completing all required fields we can click **SIGN UP** button, all required fields are validated again. A request is send when everything is filled correctly, otherwise all incorrect fields become red. 
After sending a request a user receives information whether account has been created or not.

## Frameworks and libraries used in this project

1. **React** - is responsible for building user interfaces, managing a state of an application and its view.
2. **React Router DOM** - provides Routing to our React App
3. **i18next** - it is complex framework which provides tools to create multilingual applications in a simple and transparent way. 
4. **PropTypes** - provides types to applications thus comonent's props can be validated, it helps find bugs in our application. 


