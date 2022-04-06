// function addUp(n) {
//   let total = 0;
//   for (i = 1; i <= n; i++) {
//     total += i;
//   }
//   return total;
// }
// console.log(addUp(100));

// let t1 = performance.now();
// addUp(1000000000);
// let t2 = performance.now();
// console.log(`Elapsed:  ${(t2 -t1) / 1000} seconds `);

// function superAdd(n){
//     return n * (n+1) / 2
// }
// let t3 = performance.now();
// superAdd(1000000000);
// let t4 = performance.now();
// console.log(`Elapsed:  ${(t4 -t3) / 1000} seconds `);

// ********FREQUENCY COUNTER *****************

// O(N) Solution

// function validAnagram(str1, str2) {
//   let freqCount1 = {};
//   let freqCount2 = {};

//   if (str1.length !== str2.length) {
//     return false;
//   }
//   for (let val of str1) {
//     freqCount1[val] = (freqCount1[val] || 0) + 1;
//   }
//   for (let val of str2) {
//     freqCount2[val] = (freqCount2[val] || 0) + 1;
//   }
//   console.log(freqCount1, freqCount2);

//   for (let key in freqCount1) {
//       if(!(key in freqCount2)) {
//         console.log(false);
//           return false
//       }

//       if(freqCount1[key] !== freqCount2[key]){
//         console.log(false);
//           return false
//       }
//   }
//   console.log(true);
// return true

// }
// validAnagram("aaz", "zza")

// O(N) solution thats alittle more clever *******************

// function validAnagram(str1, str2) {
//     let freqCount1 = {};

//     if (str1.length !== str2.length) {
//         console.log(false);
//       return false;
//     }
//     for (let val of str1) {
//       freqCount1[val] = (freqCount1[val] || 0) + 1;
//     }
//     console.log(freqCount1);

//     for (let val of str2){
//         if(!freqCount1[val])
//         {
//             console.log(false);
//             return false
//         }
//         freqCount1[val] -= 1
//     }
//     console.log(true);
//   return true

//   }
//   validAnagram("qwerty", "qeywrt")

// Attempt at O(n^2)

// function validAnagram(str1, str2) {

//     let holdObj = {}

//   for (let i = 0; i < str1.length; i++) {
//     for (let j = 0; j < str2.length; j++) {
//       if (str1[i] === str2[j]) {
//         holdObj[str1[i]] = (holdObj[str1[i]] || 0) +1
//         str2.splice(j,1)
//       }
//     }
//   }
//   console.log(holdObj);
// }

// validAnagram("lalce", "eclal");

// ****************************************************************
// Multiple Pointers
// This is used for finding a set of numbers in a SORTED list. for finding two numbers that sum to zero you are going to start at start of array and end of array. use a while loop and when left side is less than right side you keep going. then you check is left + right < 0 then you add to left side index. If its greatern than 0 you are going to minus index from right side. This moves each index until either the 0 value is found or nothing is found and undefined is returned.

// function countUniqueValues(arr) {
//   let left = 0;
//   let right = left + 1;

//   if (arr.length === 0) {
//     return 0;
//   }

//    The key here is that we are going to move one of the two pointers depending on if its unique or not. If its subtracted and equals 0, we move the downrange one down a space. If it does not then we move left up one and replace that with downrange value. mutating the array.
//   while (right < arr.length) {
//     if (arr[left] - arr[right] !== 0) {
//       left++;
//       arr[left] = arr[right];
//     } else {
//       right++;
//     }
//   }
//   return (left +1)
// }

// countUniqueValues([]);


// ****************************************************************
// Sliding window 


// function maxSubArraySum(arr,num){
//     if(arr.length < num){
//         return null
//     }
//     let maxSum = 0
//     for(let i=0; i<num; i++){
//         maxSum += arr[i]
//     }
//     tempSum = maxSum

//     //  the key here is to look a certain number of spaces, minus the first index and add the next index at the end.
//     for(let i=num; i<arr.length; i++){
//         tempSum = tempSum - arr[i-num] + arr[i]
//         if(tempSum > maxSum){
//             maxSum = tempSum
//         } 
        
//     }
//     console.log(maxSum);
// }
// maxSubArraySum([2,6,9,2,1,8,5,6,3],4)


// ****************************************************************

// Divide and Conquer 

// for sorted arrays use binary search
// must be SORTED.
// This is the phone book search example of halving 




// Practice Problems

// Frequency Counter - sameFrequency problem

// Given two pos integers, find out if the two numbers have the same frequency of digits. must be O(N)

// Create 1 object that has the values of the first integer separated out. then take the second number and minus for each letter. If 0 at end its equal otherwise false.

function sameFrequency(first,second){
    let firstObj = {}

    let stringFirst=first.toString()

    for(let val of stringFirst)
    {
      firstObj[val] = (firstObj[val] || 0) + 1  
    }
    
    console.log(firstObj);
}
sameFrequency(182,281)