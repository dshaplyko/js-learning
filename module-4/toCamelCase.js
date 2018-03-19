'use strict';
const ACCEPTED_CHARACHTERS = '0123456789abcdefghijklmnopqrstuvwxyz';
/**
 * It returns the camel-case version of string.
 * E.g.: simple lowercase string => SimpleLowercaseString
 *
 * @param {string} toConvert
 * @returns {string} camel-case string or empty string in other cases
 */

 function toCamelCase(toConvert) {
    if (typeof toConvert !== 'string') {
        return '';
    }

    let words = toConvert.split(' ');

    let UCwords = words.map((word, i) => {
        word = word
            .split('')
            .filter(c => {
                return ACCEPTED_CHARACHTERS.indexOf(c.toLowerCase()) !== -1;
            })
            .join('');
        let firstLetter = word.charAt(0).toUpperCase();
        let otherLetters = word.substr(1).toLowerCase();
        return firstLetter + otherLetters;
    });
    return UCwords.join('');

 }

 module.exports = toCamelCase;