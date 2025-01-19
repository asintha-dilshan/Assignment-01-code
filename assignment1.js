/*********************************************************************************
*  WEB700 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Asintha Dilshan Jayasekara Wisurumana Arachchige 
*  Student ID: 170388235 Date: 10/01/2025
*
********************************************************************************/ 

/*Step 3: Creating the "Server Paths" */
// Define arrays serverVerbs, serverPaths, and serverResponses
const serverVerbs = ["GET",	"GET", "GET", "POST", "GET", "POST"];
const serverPaths = ["/", "/about",	"/contact",	"/login", "/panel",	"/logout"];
const serverResponses = ["Welcome to WEB700 Assignment 1",	"This assignment was prepared by Asintha Jayasekara",	"Asintha Jayasekara: adjwisurumana-arachc@myseneca.ca", "User Logged In",	"Main Panel",	"Logout Complete"];

/* Step 4:Creating the "web server simulator" Function - "httpRequest" */
// Create the function "httpRequest" to handle by checking if the provided HTTP verb and path match
function httpRequest(httpVerb, path) {
    for (let i = 0; i < serverPaths.length; i++){ // Using "For loop" match at the same index, return the corresponding response.
        if (serverVerbs[i] === httpVerb && serverPaths[i] === path){
            return `200: ${serverResponses[i]}`; // return cooresponding output with  string "200"
        }
    }
    return `404: Unable to process ${httpVerb} request for ${path}`; // encountered an error with 404 with corresponding response 
}

/* Step 5: Manually Testing the "httpRequest" Function */

console.log(httpRequest("GET","/")); // shows "200: Welcome to WEB700 Assignment 1"
console.log(httpRequest("GET","/about")); // shows "200: This Assignment was prepared by Student Name"
console.log(httpRequest("PUT","/")); // shows "404: Unable to process PUT request for /"

/* Step 6: Automating the Tests by creating a "automateTests" Function */
// Utility function to generate a random integer between 0 and (max - 1).
function getRandomInt(max) {
    return Math.floor(Math.random() * max); // Utility function
}

// "automateTests" function to use automate testing of httpRequest with random HTTP verbs and paths.
function automateTests() {
    const testVerbs = ["GET", "POST"];
    const testPaths = [
      "/", "/about", "/contact", "/login", "/panel", "/logout",
      "/randomPath1", "/randomPath2"
    ];
   
    function randomRequest(){    // Generate a random request and test the httpRequest function.
        const randVerb = testVerbs[getRandomInt(testVerbs.length)]; // Randomly select a verb [0-1]
        const randPath = testPaths[getRandomInt(testPaths.length)] // Randomly select a path [0-7]

         // Log the result of the simulated request.
        console.log(httpRequest(randVerb, randPath));

    } 
    setInterval(randomRequest, 1000); // Schedule randomRequest to run every second (1000ms).
}
/* Step 7: Invoke the "automateTests" function */
automateTests(); // Start the automated testing process by invoking automateTests.
