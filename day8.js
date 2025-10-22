var lengthOfLongestSubstring = s => {
    let set = s.split("")
    let newSet = [];
    let count = 0;
    newSet[0] = set[0]
    let max = 0;

    for (let i = 0; i < set.length; i++) {
                let duplicate = false;

        for (let j = 0; j < newSet.length; j++) {
             if (newSet[j] === set[i]) {
                newSet = newSet.slice(j + 1);
                duplicate = true;
                break;
            }
        }
           newSet.push(set[i]);

        count = newSet.length;
        if (count > max)     max=count;
    }
    return max;
};

console.log(lengthOfLongestSubstring("abcabcbb"))