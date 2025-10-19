
var numJewelsInStones = function(jewels, stones) {
    let count =0;
    var splitStones = stones.split(""); 
    var splitJewels = jewels.split("");
    for (let i = 0;i < jewels.length;i++){
            for (let j = 0;j < stones.length;j++){
        if (jewels[i] === stones[j])
count++;
    }
}
    return count;
};

numJewelsInStones("aA","aAAbbbb");