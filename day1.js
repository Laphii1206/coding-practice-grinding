var numWaterBottles = function(numBottles, numExchange) {
    let total =numBottles;
    let exchange = Math.floor(numBottles /numExchange );
    let emptyBottles = Math.floor(numBottles % numExchange)
    total += exchange;
    emptyBottles += exchange;
    do{
        if (emptyBottles >= numExchange){         
            exchange = Math.floor(emptyBottles / numExchange);  // 1 ,7, 4 remain 3
            emptyBottles = Math.floor(emptyBottles % numExchange + exchange);
            total += exchange;
            console.log(total);
        }

    } while (emptyBottles >= numExchange)

    return total;
};


let numBottles = 25;
let numExchange = 4;
console.log(numWaterBottles(numBottles, numExchange));