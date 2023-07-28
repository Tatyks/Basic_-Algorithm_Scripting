function booWho(bool) {
    let result;
     if (bool === true || bool === false) {
       result = true;
     } else {
       result = false;
     }
     return result;
   }
   
   
   
   booWho(null);
   console.log(booWho(1));

   function booWho(bool) {
    return typeof bool === 'boolean';
  }
  
  console.log(booWho(1));