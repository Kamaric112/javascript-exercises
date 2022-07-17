
const sumAll = function(startNum,endNum) {
    const a = startNum;
    const b = endNum;
    let sum = 0;
    if (a < 0 || b < 0 ||  isNaN(a) || isNaN(b) || typeof a ==='string'||  typeof b ==='string' ) {
        return ('ERROR');
    }
    else {
        if ( b > a ) {
            for ( let i = a; i <= b ; i ++) {
                sum += i;
            }
            return sum;
        }
        else if ( a > b ) {
            for ( let i = b; i <= a ; i ++) {
                sum += i;
            }
            return sum;
        }
    }
};

// Do not edit below this line
module.exports = sumAll;
