var hasIncreasingSubarrays = (nums, k) => {
    let count = 1;
    let countUp = 0;

    if (k === 1 || nums.length <= 2) return true;

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] < nums[i + 1]) {
            count++;
        } else {
            count = 1; 
        }

        if (count >= k) {
            countUp++;
        }

        if (countUp >= 2) return true;
    }

    return false; 
};

let nums = [-15, -13, 4, 7]

console.log(hasIncreasingSubarrays(nums, 2))