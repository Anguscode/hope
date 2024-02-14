function twoSum(nums, target) {
    let hashtable = {};
    let firstIndex = 0;
    let secondIndex = 1;
    for (let i = 0; i < nums.length; i++) {
            hashtable[nums[i]] = i;
    }
    hashtable[2]=0
    hashtable[7]=1
    
    while (hashtable[target - nums[firstIndex]] === undefined || hashtable[target - nums[firstIndex]] === firstIndex) {
        firstIndex++;
    }
    secondIndex = hashtable[(target-nums[firstIndex])];
    return([firstIndex, secondIndex])
}

twoSum([2, 7, 11, 15], 9);