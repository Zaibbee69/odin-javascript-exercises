const removeFromArray = function(arrayFromRemoving, elementToBeRemoved) {
    let arrayLength = arrayFromRemoving.length;

    for (let index = 0; index < arrayLength; index++) {
        if (arrayFromRemoving[index] == elementToBeRemoved)
        {
            arrayFromRemoving.splice(index, 1);
        }  
    }
    return arrayFromRemoving;
};

// Do not edit below this line
module.exports = removeFromArray;
