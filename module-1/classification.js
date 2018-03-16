'use strict';

/**
 * The function returns the grade (1-5) of the student,
 * based on the score and the following rules:
 *  - 90 -    : 5
 *  - 80 - 89 : 4
 *  - 70 - 79 : 3
 *  - 60 - 69 : 2
 *  -    - 59 : 1
 *
 * @param {number} score (0 <= score <= 100)
 * @returns {number} grade or 0 if any arguments are not proper
 */
function grade(score) {
    let gradeOfStudent;
    /*
     * Your task is to calculate the grade of the student
     * based ason his/her score which can be found in the
     * score variable and those rules can be found in the
     * documentation of the function.
     * Store the grade in the gradeOfStudent variable.
     * Also take into consideration the documentation of the function!
     */
    // PLACE YOUR CODE BETWEEN THIS...

    switch (true) {
        case (score >= 90 && score <= 100):
            return gradeOfStudent = 5;
        case (score < 90 && score >= 80):
            return gradeOfStudent = 4;
        case (score < 80 && score >= 70):
            return gradeOfStudent = 3;
        case (score < 70 && score >= 60):
            return gradeOfStudent = 2;
        case (score < 60 && score >= 0):
            return gradeOfStudent = 1;
        case ( score > 100):
        default:
            return gradeOfStudent = 0;
    }
   
    // ...AND THIS COMMENT LINE!
    //return gradeOfStudent = 0;
}
module.exports = grade;