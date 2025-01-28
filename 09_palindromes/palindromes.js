const palindromes = function (str) {

    // Ok first making a standard string
    const standardStr = "abcdefghijklmnopqrstuvwxyz0123456789";

    // Now adding thing which are in the standard
    const cleanedStr = str
    .toLowerCase()
    .split("")
    .filter(character => standardStr.includes(character))
    .join("");

    // Create a new reversed string
    const reversedStr = cleanedStr.split("").reverse().join("");

    return cleanedStr === reversedStr;



};

// Do not edit below this line
module.exports = palindromes;
