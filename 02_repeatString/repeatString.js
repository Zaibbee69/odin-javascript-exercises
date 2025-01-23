const repeatString = function(stringToRepeat, numberOfTimes) {

    // Making a check if random times is selected
    if (numberOfTimes < 0) {
        return "ERROR";
    } 

    // Making a value to hold the data
    let repeatedString = "";

    // Looping over the required times
    for (let index = 0; index < numberOfTimes; index++) {
        repeatedString += stringToRepeat; 
    }

    // Returning the string
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
