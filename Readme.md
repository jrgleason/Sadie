This is the Sadie project

THIS IS IN SUB-BETA!

To get working just set the Environmental variable ORCHESTRATE_KEY to your api key and make a collection with a Page object.

## Get Started
   
   This porject requires...

    - Grunt
    - Node
    - Express
    - Orchestrate.io (It is free)

  **1** Set your Orchestrate.io key using the ORCHESTRATE_KEY environmental variable
  **2** Run npm install
  **3** Run grunt watch in one terminal
  **4** Run ./bin/www in another terminal
 
## Current sites of interest
  - Index defaults to the Yo page
  - (/admin) Admin allows you to add additional pages
  - (/display?name=<name>) Display will display a saved page wrapped in a jade view
  - (/Page) Page will display all currently saved pages 
