function truncateString(str, num) {
    str.substr(0, num);
    return str;
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8))
  