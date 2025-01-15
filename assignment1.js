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


/*Step 2: "Hello World" */

console.log("Hello World!");

/*Step 3: Creating the "Server Paths" */

const serverVerbs = ["GET",	"GET", "GET", "POST", "GET", "POST"];
const serverPaths = ["/", "/about",	"/contact",	"/login", "/panel",	"/logout"];
const serverResponses = ["Welcome to WEB700 Assignment 1",	"This assignment was prepared by Asintha Jayasekara",	"Asintha Jayasekara: adjwisurumana-arachc@myseneca.ca", "User Logged In",	"Main Panel",	"Logout Complete"];

/* Step 4:Creating the "web server simulator" Function - "httpRequest" */

function httpRequest(httpVerb, path) {
    for (let i = 0; i < serverPaths.length; i++){
        if (serverVerbs[i] === httpVerb && serverPaths[i] === path){
            return `200: ${serverResponses[i]}`;
        }
    }
    return `404: Unable to process ${httpVerb} request for ${path}`;
}

/* Step 5: Manually Testing the "httpRequest" Function */

console.log(httpRequest("GET","/"));
console.log(httpRequest("GET","/about"));
console.log(httpRequest("PUT","/"));

/* Step 6: Automating the Tests by creating a "automateTests" Function */

function getRandomInt(max) {
    return Math.floor(Math.random() * max); // Utility function
}

function automateTests() {
    const testVerbs = ["GET", "POST"];
    const testPaths = [
      "/", "/about", "/contact", "/login", "/panel", "/logout",
      "/randomPath1", "/randomPath2"
    ];

    function randomRequest(){
        const randVerb = testVerbs[getRandomInt(testVerbs.length)];
        const randPath = testPaths[getRandomInt(testPaths.length)];


        console.log(httpRequest(randVerb, randPath));

    }
    setInterval(randomRequest, 1000);
}
/* Step 7: Invoke the "automateTests" function */
automateTests();