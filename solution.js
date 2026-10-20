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



