/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var maxBottlesDrunk = function(numBottles, numExchange) {
    let newBottles = 0;
    let sum=numBottles;
    let emptyBottles = numBottles;
    while(emptyBottles >= numExchange){
        emptyBottles = Math.floor(emptyBottles - numExchange);
        newBottles++;
        numExchange++;
        if(emptyBottles < numExchange){
            emptyBottles += newBottles;
            newBottles =0;
        }
        sum++;

    }
    return Math.floor(sum);
};

console.log(maxBottlesDrunk(10,3))