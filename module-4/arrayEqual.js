'use strict';
/**
 * It determines, whether the given two arrays
 * are equal, by considering the number of elements,
 * those order and value, in all levels.
 * 
 * It prints out a message in case of any
 * difference in any array, using console.warn!
 * 
 * @param {Array} first The first array
 * @param {Array} second The second array
 * @returns {boolean} true if the two arrays are equal,
 *                    false otherwise
 */

 function arrayEqual(first, second) {
     if (first.length !== second.length) {
         console.warn(`the first length is ${first.length} and the second one is ${second.length}`);
         return false;
     }
     
     for (let i = 0; i < first.length; i++) {
         if (Array.isArray(first[i]) && Array.isArray(second[i])) {
            if (JSON.stringify(first[i]) === JSON.stringify(second[i])) {
                return true;
            }
         } else {
            if (first[i] !== second[i]) {
                console.warn(`first[i]:${first[i]} !== second[i]:${second[i]}`);
                return false;
             }
         } 
     }
     return true;
 }

 module.exports = arrayEqual;