const removeFromArray = function(arrayFromRemoving, ...elementsToBeRemoved) {

    // Looping over the args one by one removing required index
    elementsToBeRemoved.forEach(element => {
        
        // Keep removing the element until it no longer exists in the array
        let index = arrayFromRemoving.indexOf(element);
        while (index > -1) {
            arrayFromRemoving.splice(index, 1);
            index = arrayFromRemoving.indexOf(element);
        }
    });
    
    return arrayFromRemoving;
};

// Do not edit below this line
module.exports = removeFromArray;
