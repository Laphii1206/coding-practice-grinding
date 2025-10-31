class sus {
    freq = 0;
    constructor(num) {
        this.num = num;
    }
    setFrequent() {
        this.freq++;
    }
    getFrequent() {
        return this.freq;
    }
    getNum() {
        return this.num;
    }


}



var getSneakyNumbers = (nums) => {
    let tableSet = {}
    let imposter = [];


    for (let i = 0; i < nums.length; i++) {
        let numCheck = nums[i]

        if (!tableSet[numCheck]) {
            tableSet[numCheck] = new sus(numCheck);
        }

        tableSet[numCheck].setFrequent()


    }
    for (const i in tableSet) {

        if (tableSet[i].getFrequent() === 2) {
            imposter.push(tableSet[i].getNum())

        }
    }
    return imposter;

};

let set = [7, 1, 5, 4, 3, 4, 6, 0, 9, 5, 8, 2]

console.log(getSneakyNumbers(set))