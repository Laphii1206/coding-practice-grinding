var isPowerOfTwo = (n) => {
    let x = 1
    
   while (x < n){
    x*=2
   }

   if (x===n){
    return true
   } else return false
};