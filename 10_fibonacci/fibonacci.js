const fibonacci = function(num) {

    // Also parsing the data if it's a string
    Number.parseInt(num);

    // Making data checks
    if (num < 0) return "OOPS"; 
    if (num == 0) return 0;

    // Making variables for holding data
    let prev = 0;
    let current = 1;
    let next = 1;

    // Finding data upto term
    for( let i = 1; i < num; i ++ )
    {
        next = prev + current;
        prev = current;
        current = next;
    }

    return current;
};

// Do not edit below this line
module.exports = fibonacci;
