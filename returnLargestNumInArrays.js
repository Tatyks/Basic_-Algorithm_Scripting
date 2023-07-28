/*function largestOfFour(arr) {
  const results = []; // 1. Create a varible to store the results as an array
  for ( let i = 0; i < arr.length; i++) { //
    let largestNumber = arr[i][0];
  }
  
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
*/

function largestOfFour(arr) {
    var largestNums = [];
    
      for (var i = 0; i < arr.length; i++) {
        var subArray = arr[i];
        var largestNum = subArray[0];
    
        for (var j = 1; j < subArray.length; j++) {
          if (subArray[j] > largestNum) {
            largestNum = subArray[j];
          }
        }
    
        largestNums.push(largestNum);
      }
    
      return largestNums;
    }
    
    largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
    
    console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))