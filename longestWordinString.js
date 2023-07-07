function findLongestWordLength(str) {
     // Split the sentence into individual words
  var words = str.split(" ");
console.log(words)
  // Initialize a variable to store the length of the longest word
  var maxLength = 0;

  // Iterate through each word and update maxLength if a longer word is found
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
      console.log(words[i].length)
    }
  }

  // Return the length of the longest word
    return maxLength;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");
  
  //To find the length of the longest word in the sentence, you need 
  //1. to split the sentence into individual words and 
  //2. compare their lengths.

  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))