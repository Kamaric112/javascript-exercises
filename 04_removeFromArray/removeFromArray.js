const removeFromArray = function(array,...args) {
   args.forEach((arg) => { // arrow function to loop through each value in infinite arguments (args)
    const index = array.indexOf(arg) 
    if (index >-1) {
        array.splice(index,1)
    }
})
    // return array.filter(x => !args.includes(x))

    return array
}

// Do not edit below this line
module.exports = removeFromArray;
