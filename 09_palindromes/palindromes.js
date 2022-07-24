// const punc = /[!"#$%&'()*+,-./:;<=>?@[\]^_`/\s/g{|}~]/g;        

// const palindromes = function (str) {
    
//     let pali =str.toLowerCase().replace(punc, "").split("") 

//     let len = pali.length
//     for (let i = 0 ; i < len/2 ; i ++){
//         if (pali[i] !== pali[len - 1 - i]) {
//         return false
//         }else { return true } 
//     }  
// };


const punc = /[!"#$%&'()*+,-./:;<=>?@[\]^_`/\s/g{|}~]/g;

const palindromes = function (str) {
  let pali = str.replace(punc, "").split("");

  let value = false;
  for (i = 0; i < pali.length; i++) {
    if (pali[i] == pali[(pali.length - (i+1))]) {
        value = true;
    } else {
        value = false;
    }
    return value;
  }
};

// Do not edit below this line
module.exports = palindromes;
