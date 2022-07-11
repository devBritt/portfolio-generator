// global variables
const profileDataArgs = process.argv.slice(2);

// functions
const printProfileData = (profileDataArr) => {
    for (let i = 0; i < profileDataArr.length; i++) {
        console.log(profileDataArr[i]);
    };

    console.log("================");

    profileDataArr.forEach(profileItem => console.log(profileItem));
};


// function calls
printProfileData(profileDataArgs);
