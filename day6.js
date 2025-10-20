var finalValueAfterOperations = (operations) =>{
let x =0;
for (const i in operations){
if (operations[i].at(1)=="+")
    x +=1;
else 
    x-=1;

}
    return x;

};

let a = ["--X","X++","X++"];
console.log(finalValueAfterOperations(a))