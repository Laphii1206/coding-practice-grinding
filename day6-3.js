var findMedianSortedArrays = (nums1, nums2) => {
    let combined = nums1.concat(nums2);
    let j = 0
    let k = combined.length - 1;
    combined.sort((a, b) => a - b); // sort num

    if (combined.length % 2 == 1) {
        return combined[parseInt(combined.length / 2)];
    } else {

        k = k / 2;
        j = k + 1

        return (combined[j] + combined[k]) / 2.0;
    }
};

let setA = [1,2,3,4,5]
let setB = [6,7,8,9,10,11,12,13,14,15,16,17]


console.log(findMedianSortedArrays(setA, setB))
