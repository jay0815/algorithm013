"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    swap: function (nums) {
        let j = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] != 0) {
                // way 1
                // [nums[j], nums[i]] = [nums[i], nums[j]];
                // j++;
                // way 2
                // nums[j] = nums[i];
                // if(i !== j) {
                //     nums[i] = 0
                // }
                // j++;
                // way 3
                [nums[j++], nums[i]] = [nums[i], nums[j]];
            }
        }
    },
    sort: function (nums) {
        nums.sort((_, b) => b === 0 ? -1 : 0);
    }
};
// test case 
