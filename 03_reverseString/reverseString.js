const reverseString = function(word) {
    let string = ""
    for (let i = 1 ; i <=( word.length ) ; i ++){
    string += word[word.length -i]
    }
    return string
};

reverseString('hello')
// Do not edit below this line
module.exports = reverseString;


//  word = "hello"  - length = 5
//     i =1 
//     string = word[5 -1] = word[4] = 'o'
//     i = 2
//     string = word [ 5 - 2 ] = word[3] = 'l'
//     .....
//     i = 5 
//     string = word[5-5] = word[0]= 'h' 