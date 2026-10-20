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




// Problem 3: Time Conversion
var timeConversion = function(s) {
    const period = s.slice(-2);
    const [hourText, minutes, seconds] = s.slice(0, -2).split(":");
    let hour = Number(hourText);

    if (period === "AM" && hour === 12) {
        hour = 0;
    } else if (period === "PM" && hour !== 12) {
        hour += 12;
    }

    return `${String(hour).padStart(2, "0")}:${minutes}:${seconds}`;
}; 