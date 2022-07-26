const fibonacci = function(num) { 
    let a = parseInt(num)
    if ( a < 0 ) {
        return "OOPS"
    }
  else if (a <= 1) {
    return a
  } return (fibonacci(a - 1) + fibonacci(a - 2))
}

// Do not edit below this line
module.exports = fibonacci;

