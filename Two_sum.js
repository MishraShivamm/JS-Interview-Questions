//Two Sum 
// Given an array of integer nums and an integer target,
//return indices of the two numbers such that they add upto the target

// Input : nums = [2,7,11,15] , target = 9
// Output: [0,1] (Because nums[0] +nums[1] == 9 , we return [0,1])

// Brute Force Solution 
// const twoSum = (nums, target)=>{
//     for(let i= 0; i<nums.length;i++){
//         for(let j = i+1;j< nums.length;j++){
//             // logic 
//             if(nums[i]+ nums[j] === target) return [i,j];
//         }
//     }
// }

// console.log(twoSum([2,7,11,15] , 13));

// Using JS Objects


const  twoSum = (nums,target)=>{
    let obj= {};
    for (let i = 0; i< nums.length; i++) {
      let n = nums[i];

      if(obj[target - n]>= 0){
        return [obj[target - n], i]
      }
      else{
        obj[n] = i;
      }
       
    }
}
console.log(twoSum([11,13,15,16] , 27));

/* Lgic for this second approach is that in this we'll first see thet target value
for example let's take 26 as it's  target value and now we'll see the first int value let's take example of it [2,7,15,11]
, so now we'll first subtract the first value from target value that is 2 .

so 

26 - 2 = 24 (which is not in the array , so we'll just add index to the int value ) // 2: 0;
now for 7 , 26 - 7 = 19 ( no in the array so we'll repeat the step as we did ) // 1;
now 15 , 26-15 = 11 ( which is the next value , now we'll se it's index) // 3;
now as we know last answer was 11 and while subtracting 11 from 26 it'll give us 15 which we already have . 
so answer will be [2,3]
*/

