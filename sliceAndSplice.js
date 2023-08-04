/*You are given two arrays and an index.

Copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.*/

//Solution 1
function frankenSplice(arr1, arr2, n) {
    let newArr = arr2.slice();
    for (let i = 0; i < arr1.length; i++){
        newArr.splice(n, 0, arr1[i]);
    }
    return newArr;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);
  console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

  //Solution 2
  function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
    let localArr = arr2.slice();
    localArr.splice(n, 0, ...arr1); 
    /*Since the splice() function will mutate (alter) arrays and can be used to add new elements 
    we will use it to add the contents of arr1 into localArr. n is the starting position 
    where our content will be inserted. We won’t be deleting any elements so the next argument is 0. 
    Then we add the entire contents of arr1 using spread syntax ....*/
    return localArr;
  }
  console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
   
  //Solution 3
  function frankenSplice(arr1, arr2, n) {
    return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];
  }
  console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
  /*Code explanation:

1. Use spread operators with slice to return an array.
2. First spread operator uses the slice method to only give the portion of arr2 from index 0 to ‘n.’
3. Second spread operator passes all elements from arr1.
4. Third spread operator uses the slice method to return all elements starting at index ‘n’ to the end 
of the array.*/

//Solution 4

function frankenSplice(arr1, arr2, n) {
    // Create a copy of arr2 using slice() to avoid modifying the original array
    let newArr2 = arr2.slice();
  
    // Loop through arr1 and insert its elements into newArr2 at index n
    for (let i = 0; i < arr1.length; i++) {
      newArr2.splice(n + i, 0, arr1[i]);
    }
  
    return newArr2;
  }
  
  console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));