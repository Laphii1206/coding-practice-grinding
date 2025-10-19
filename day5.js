class Number{
    freq =0;
    constructor(num){
        this.num = num;
    }
    setFrequent(){
        this.freq++;
    }
    getFrequent(){
        return this.freq;
    }


}

// it was here table ={};

var maxFrequencyElements = (nums) => {
let table = {};
let finalCount =0;
let maxFreq = 0;

for (let i = 0; i < nums.length; i++) {
    const numValue = nums[i];

    if (!table[numValue]) { 
        table[numValue] = new Number(numValue); 
    }
    
    table[numValue].setFrequent();
    const currentFreq = table[numValue].getFrequent();
        if (currentFreq > maxFreq) {
            maxFreq = currentFreq;
        }
}

for (const i in table) {
    const counting = table[i];
    
    if (counting.getFrequent() === maxFreq) {
        finalCount += counting.getFrequent();
    }
}
            return console.log(finalCount);
    }


nums = [1,2,2,3,1,4];
nums2 = [1,2,3,4,5];

maxFrequencyElements(nums);
maxFrequencyElements(nums2);