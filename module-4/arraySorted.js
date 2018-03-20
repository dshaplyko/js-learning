'use strict';
const TO_IGNORE = '!@#$%^&*()_+';
/**
 * It determines, whether the given array is sorted in
 * alphabetically ascending order.
 * 
 * It ignores
 *  - case of the character
 *  - given special characters (nothing by default)
 *  - whitespaces
 * 
 * @param {Array.<string>} items the subject items
 * @param {string} ignore characters to ignore
 * @returns {boolean} true if the array is properly sorted,
 *                    false otherwise
 */

 function arraySorted(arr, ignore) {
    ignore = '?!@#$%^&*()_+';

    for (let i = 0; i < arr.length; ++i) {
        if (typeof arr[i] === 'string') {
            arr[i] = arr[i].replace(/\s/g, "");
            arr[i] = arr[i].split('').filter(c => {
                return ignore.indexOf(c) === -1;
            }).join('').toLowerCase();
            console.log(arr[i]);
        }
    }
    return arr.every((value, i, arr) => !i || (value >= arr[i - 1]));
 }

 module.exports = arraySorted;