'use strict';
/**
 * It recieves an array of strings, integers and
 * array like itself.
 * Return the summary of all integers in it on * any level.
 *
 * @param {Array} elements
 * @returns {number} summary of all integers or 0 in other cases
 */

function arraySum(arr) {
    if (arr.length === undefined) {
        return 0;
    }
    arr = arr.filter(c => {
        return typeof c === 'number'
    })
    console.log(arr);
    return arr.reduce((a, b) => { 
        return a + b; 
    }, 0);

}

module.exports = arraySum;