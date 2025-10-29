var smallestNumber = (n) => {
    let k = n.toString(2) 
    let s = ""
    for (i = 0;i < k.length;i++){
        s += "1"
    }
    s = parseInt(s,2)
      
  return s
    
};

console.log(smallestNumber(5))
