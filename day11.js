var totalMoney = (n) => {
    let total = 0
    let count = 0
    let cash = 1
    let counter = 1

    while (count < n) {
        if (count === 7 * counter) {
            cash=counter
            cash++
            counter++
        }

        total += cash
        cash++
        count++

    }


    return total
};

console.log(totalMoney(10))