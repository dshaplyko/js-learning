'use strict';
/**
 * It recieves an array of strings and returns
 * the first longest string from it.
 * Also in the alphabetically first in case of more.
 *
 * @param {Array.<string>} strings
 * @returns {string} longest string or empty string in other cases
 */

function longestString(strings) {
    if (!Array.isArray(strings)) {
        return '';
    }
    strings.sort();
    let longest = strings[0];

    for (let i = 1; i < strings.length; ++i) {
        if (strings[i].length > longest.length) {
            longest = strings[i];
        }
    }
    return longest;
}

module.exports = longestString;