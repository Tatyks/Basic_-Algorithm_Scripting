//Solution 1
function titleCase(str) {
    // Split the string into an array of words
    const words = str.split(" ");
     // Capitalize the first letter of each word and convert the rest to lowercase
  const capitalizedWords = words.map(word => {
    const firstLetter = word.charAt(0).toUpperCase();
    const restOfWord = word.slice(1).toLowerCase();
    return firstLetter + restOfWord;
  });
  
  // Join the modified words back into a string
  const result = capitalizedWords.join(" ");
  
  return result;
}

const titleCasedString = titleCase("I'm a little tea pot");
console.log(titleCasedString);
  
//Solution 2
function titleCase(str) {
    const newTitle = str.split(" ");
    const updatedTitle = [];
    for (let st in newTitle) {
      updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
    }
    return updatedTitle.join(" ");
  }
  
  titleCase("I'm a little tea pot");

  //Solution 3
  function titleCase(str) {
    return str
      .toLowerCase()
      .split(" ")
      .map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
      .join(" ");
  }
  
  titleCase("I'm a little tea pot");

   //Solution 4
   function titleCase(str) {
    return str
      .toLowerCase()
      .replace(/(^|\s)\S/g, L => L.toUpperCase());
  }
  
  titleCase("I'm a little tea pot");

  //Solution 5
  function titleCase(str) {
    str = str.split(' ');
  
    for (let i = 0; i < str.length; i++) {
      str[i] = str[i].toLowerCase().split('');
      str[i][0] = str[i][0].toUpperCase();
      str[i] = str[i].join('');
    }
  
    return str.join(' ');
  }
  
  titleCase("I'm a Little tea pot");