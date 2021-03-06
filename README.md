# Chrome New Tab Extension Using Angular - 7
    

## Project structre:
    
    ├── src
        ├── api                     # Contains server.js file which handles backend server.
        ├── app                     # Test files (alternatively `spec` or `tests`)
        │   ├── clock               # Clock display component contains ts, spec, html, and css files        
        │   ├── search              # Search component contains ts, html, spec, and css of the search bar
        │   └── services            # Contains bing API service ts file and spec  
        ├ manifest.json             # Provides the information for chrome extension
	    ├ background.js             # JS script that handles the opening new tab after extasion installed 
	    ├ package-lock.json         # Project management file (packages, dependencies and etc..)
	    ├ package.json              # Project management file (packages, dependencies and etc..)
	    └ readme.md
        

## Description
Chrome extension that provides a possibility to take over chrome's New Tab
with a HTML page that allows user to search, get search suggestions and redirect to Bing search result.

API connection:
- App uses Bing.com API.


## Running it

### Environment installation
You need to have `Node.js` version 8+ and `npm` installed on your PC/Mac.

Then run `npm install @angular/cli express ms-rest-azure bootstrap azure-cognitiveservices-websearch axios` in the project's root.

### Development server
#### STEP 1:  
Run cd src/api to navigate to api folder then run `node server.js` the server is listening to port 4000.

#### STEP 2:  
Open a new Teminal at project's root then run `npm start` for build and serve the project.


### Getting Started
#### STEP 1:  
Open the Extension Management page by navigating to chrome://extensions.

#### STEP 2:
Enable Developer Mode by clicking the toggle switch next to Developer mode.

#### STEP 3:
Click the LOAD UNPACKED button and select the extension directory.

#### STEP 4:  
Select project's root/dist/is-extension.
