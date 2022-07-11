// node modules
const fs = require("fs");
const generatePage = require("./src/page-template.js");

// global variables
const profileDataArgs = process.argv.slice(2);
const [user, github] = profileDataArgs;

// function calls
fs.writeFile("./index.html", generatePage(user, github), err => {
    if (err) throw err;

    console.log("Portfolio complete! Check out index.html to see the output!");
});
