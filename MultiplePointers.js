// https://leetcode.com/articles/two-pointer-technique/
// https://levelup.gitconnected.com/using-the-multiple-pointers-strategy-to-solve-algorithms-b90a98f854db

// 2. Two Pointers or Iterators

// Two Pointers is a pattern where two pointers iterate through the data structure in tandem until one or both of the pointers hit a certain condition.Two Pointers is often useful when searching pairs in a sorted array or linked list; for example, when you have to compare each element of an array to its other elements.

// Two pointers are needed because with just pointer, you would have to continually loop back through the array to find the answer. This back and forth with a single iterator is inefficient for time and space complexity — a concept referred to as asymptotic analysis. While the brute force or naive solution with 1 pointer would work, it will produce something along the lines of O(n²). In many cases, two pointers can help you find a solution with better space or runtime complexity.

// Ways to identify when to use the Two Pointer method:

// It will feature problems where you deal with sorted arrays (or Linked Lists) and need to find a set of elements that fulfill certain constraints
// The set of elements in the array is a pair, a triplet, or even a subarray
// Here are some problems that feature the Two Pointer pattern:

// Squaring a sorted array (easy)
// Triplets that sum to zero (medium)
// Comparing strings that contain backspaces (medium)
// ****************************************************************
// Multiple Pointers

// This could be useful on singly linked lists and doubly linked lists

// searching for pair of values is often what you are doing

// Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist

// ([-3,-2,-1,0,1,2,3]) [-3,3] <- answer
// ([-2,0,1,3])  undefined
// ([1,2,3]) undefined

// function sumZero(arr){
//     let leftPointer = 0
//     let rightPointer = arr.length - 1

//     while(leftPointer < rightPointer)
//     {
//     if(arr[leftPointer] + arr[rightPointer] == 0 )
//     {
//         console.log([arr[leftPointer],arr[rightPointer]]);
//         return [arr[leftPointer],arr[rightPointer]]
//     }
//     else if(arr[leftPointer] + arr[rightPointer] > 0)
//     {
//         rightPointer--
//     }
//     else{
//         leftPointer++
//     }
// }
// console.log(false);
// return false
// }

// sumZero([-3,-2,-1,0,1,2,3])
// sumZero([1,2,3])

// function sumZero(arr) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left < right) {
//     if (arr[left] + arr[right] === 0) {
//     console.log([arr[left], arr[right]]);
//       return [arr[left], arr[right]];
//     }
//     else if (arr[left] + arr[right] > 0)
//     {
//         right--
//     }
//     else{
//         left++
//     }
//   }

// }
// sumZero([-3, -2, -1, 0, 1, 2, 3]);

// This is used for finding a set of numbers in a SORTED list. for finding two numbers that sum to zero you are going to start at start of array and end of array. use a while loop and when left side is less than right side you keep going. then you check is left + right < 0 then you add to left side index. If its greatern than 0 you are going to minus index from right side. This moves each index until either the 0 value is found or nothing is found and undefined is returned.

// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in teh array. there can be negative numbers in the array, but it will always be sorted

// countUniqueValues([1,1,1,1,2]) // 2

// function countUniqueValues(arr){

//     let counterArr = []

//     for(let instance of arr){
//         {
//             if(!counterArr[instance])
//             {
//                 counterArr.push(instance)
//             }
//         }

//     }
//     console.log(counterArr.length -1,counterArr);
//     // return right
// }

// countUniqueValues([1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,11,12,25,30,25,29]) // 2

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

// Find if subsequence can be formed
// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, wihtout their order changing.

// Tagged in: multiple-pointers-pattern

// Find a pair having average of given target
// Write a function called averagePair. Given a sorted array of integers and target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

// function areThereDuplicates(...args) {
//     // Two pointers
//     args.sort((a,b) => a > b);
//     let start = 0;
//     let next = 1;
//     while(next < args.length){
//       if(args[start] === args[next]){
//           return true
//       }
//       start++
//       next++
//     }
//     return false
//   }

// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in teh array where the average of the pair equals the target average. there may be more than one pair that matches the average target.

// function averagePair(arr,target){
//     if(arr.length === 0)
//     {
//         console.log(false);
//         return false
//     }
//     let left = 0;
//     let right = arr.length - 1;

//     while(left < right){
//         if(((arr[left]+arr[right])/2) === target)
//         {
//             console.log(true);
//             return true
//         }
//         else if(((arr[left]+arr[right])/2) < target)
//         {
//             left++
//             // right = arr.length -1;
//         }
//         else {
//             right--
//         }
//     }
//     console.log(false);
//     return false
// }

// averagePair([],4) // true
// averagePair([1,3,3,5,6,7,10,12,19],12)//true

// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// two strings, first string sequence in second string.
//set left pointer in string 1, left pointer on str 2. check if equal if no , increase right pointer by 1, if yes increase left pointer by one and right pointer by one. limit by length of str2

// function isSubsequence(str1, str2) {
//   let p1 = 0;
//   let p2 = 0;

//   while (p2 < str2.length) {
//     if (p1 = str1.length) {
//       console.log(true);
//       return true;
//     } else if (str1[p1] === str2[p2]) {
//       p1++;
//       p2++;
//     } else if (str1[p1] !== str2[p2]) {
//       p2++;
//     }
//   }
//   console.log(false);
//   return false
// }

// isSubsequence('sing','sting');// true
// isSubsequence('sing','sting') // true
