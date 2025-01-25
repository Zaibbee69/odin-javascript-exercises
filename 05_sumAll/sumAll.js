const sumAll = function(num1, num2) {

    // Checking if value is negative or non integer type
    if (!Number.isInteger(num1) || !Number.isInteger(num2) || num1 < 0 || num2 < 0)
    {
        return "ERROR";
    }

    // Variable to hold the final sum and largest value
    let finalSum = 0;
    let largestNum = 0;
    let smallestNum = 0;

    // Finding out which value is greater first
    if (num1 > num2) {
        largestNum = num1;
        smallestNum = num2;
    }
    else 
    {
        largestNum = num2;
        smallestNum = num1;
    }

    for ( let i = 0; i < largestNum; i ++ )   
    {
        finalSum += smallestNum + i;
    }

    // Returning data
    return finalSum;

};

// Do not edit below this line
module.exports = sumAll;
