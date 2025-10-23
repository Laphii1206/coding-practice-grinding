var hasSameDigits = s => {
s = s.split("")
s = s.map(Number);
let x = []

while (s.length>2){
    x=[]
for (let i=0;i<s.length-1;i++){
x[i] = ((+s[i] + +s[i+1]) % 10)
}

s = x
}

return (x[0] != x[1] ? false : true )

    
};

let s = "34789"

console.log(hasSameDigits(s))