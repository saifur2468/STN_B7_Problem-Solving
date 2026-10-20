//  Problem 1: Staircase
 var Staircase = function(n){
    let result = "";
    for(let i = 1; i<n; i++){
        let spaces = "".repeat(n-i)
        let hash = '#'.repeat(i);
        result += spaces+hash;
        if(i<n){
            result += "\n";
        }
    }
    return result;
 }


// Problem 2: Grading Students
var gradingStudents = function(grades) {
    return grades.map(grade => {
        if (grade < 38) return grade;

        const nextMultiple = Math.ceil(grade / 5) * 5;
        return nextMultiple - grade < 3 ? nextMultiple : grade;
    });
};
