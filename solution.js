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




// Problem 4: String Repeat
var repeatStr = function(n, s) {
    return s.repeat(n);
};



// Problem 5: Reversed Strings
var solution = function(str) {
    return str.split("").reverse().join("");
}; 


// Problem 6: Sum of Positive
var positiveSum = function(arr) {
    return arr.reduce((sum, value) => {
        return sum + (value > 0 ? value : 0);
    }, 0);
};


// Problem 7: Grasshopper Summation
var summation = function(num) {
    return (num * (num + 1)) / 2;
};


// Problem 8: Convert a Boolean to a String
var booleanToString = function(b) {
    return String(b);
};



// Problem 9: Fizz Buzz
var fizzBuzz = function(n) {
    const result = [];

    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(String(i));
        }
    }

    return result;
};