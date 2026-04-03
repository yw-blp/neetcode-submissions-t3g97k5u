class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);

        //let filteredNums = [nums[0]];
        //let hasDuplicates = 0;
        //let isDuplicate = false;
        //for (let i = 1; i < nums.length; i++) {
        //    isDuplicate = nums[i] === nums[i - 1];
        //    if (!isDuplicate || !(hasDuplicates >= 2)) {
        //        hasDuplicates = (isDuplicate) ? hasDuplicates + 1 : 0;
        //        filteredNums.push(nums[i]);
        //    }
        //}
//
        //nums = filteredNums;
        //console.log(nums);

        function valueFinderRightToLeft(l, r) {
            let lr;
            let triplets = [];
            //lr--;
            while (nums[r] >= 0 && r - l > 1) {
                if (nums[r] === nums[r + 1]) {
                    r--;
                    continue;
                }
                lr = r;
                console.log("start", r)
                while (nums[lr] >= 0) {
                    //console.log(nums[l], nums[r], rightValue);
                    lr--;
                    if (nums[l] + nums[lr] + nums[r] === 0) {
                        console.log("again?", l, lr, r);
                        triplets.push([nums[l], nums[lr], nums[r]]);
                        break;
                        //return [nums[l], nums[r], rightValue];
                    }
                    //lr--;
                }
                r--;
            }
            console.log(triplets);
            return triplets;
        }

        function valueFinderLeftToRight(l, r) {
            let lr;
            let triplets = [];
            while (nums[l] < 0) {
                if (nums[l] === nums[l - 1]) {
                    l++;
                    continue;
                }
                lr = l;
                while (nums[lr] < 0) {
                    //console.log(nums[l], nums[r], rightValue);
                    lr++;
                    if (nums[l] + nums[lr] + nums[r] === 0) {
                        triplets.push([nums[l], nums[lr], nums[r]]);
                        break;
                        //return [nums[l], nums[r], rightValue];
                    }
                    //lr--;
                }
                l++;
            }
            return triplets;
        }

        let left = 0;
        let right = nums.length - 1;
        let output = [];
        let triplet = [];
        console.log(nums);
        while (nums[left] <= 0) {
            if (-nums[left] > (nums[right] << 1)) {
                left++;
                continue;
            }
            if ((-nums[left] << 1) < nums[right]) {  // how about the other side, is it impossible
                right--;
                continue;
            }
            // passing through this means its actually possible to reach the value
            if (-nums[left] >= nums[right]) {
                console.log("rightToLeft initiated", left);
                if (nums[left] === nums[left - 1]) {
                    left++;
                    continue;
                }
                triplet = valueFinderRightToLeft(left, right);
                if (triplet.length > 0) {
                    output.push(...triplet);
                }
                left++;
            }
            else {
                console.log("leftToRight initiated");
                if (nums[right] === nums[right + 1]) {
                    right--;
                    continue;
                }
                triplet = valueFinderLeftToRight(left, right);
                if (triplet.length > 0) {
                    output.push(...triplet);
                }
                right--;
            }
        }

        return output;
    }
}
