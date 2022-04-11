// Useful links https://levelup.gitconnected.com/how-to-solve-an-anagram-algorithm-using-a-frequency-counter-5bb1f0b817ef

https://javascript.plainenglish.io/frequency-counter-algorithm-b3fa98efe8ba




// When you have multiple pieces of data and then need to compare them, or how many times something happens.


// Thought process: create object, break apart the array or string and put into object. now you can compare the objects against each other. 


// function example(arr1,arr2){

// first edgecase is is arr1.length === arr2.length, if not false it right away


    // let createEmptyObj = {};

    // loop through array and create obj
    // for(let instance of arr1){
        // for each instance, check if exists and add one.... or create instance
        // createEmptyObj[instance] = (createEmptyObj[instance] || 0) + 1
        // OR
        // createEmptyObj[instance] ? createEmptyObj[instance] += 1 : createEmptyObj[instance] = 1

        // This creates a hash map that looks like {"0": 1 }<----- 
        // "0" is the instance above, the Key. the 1 is the frequency that we assign }

//     }

// }





// Write a function called same, which accepts two arrays. The function should return true if every value in the array has its corresponding value squared in teh second array. The frequency of values must be the same.


// same([1,2,3],[4,1,9]) -- true
// same ([1,2,3], [1,9]) -- False
// same([1,2,1], [4,4,1]) -- false


function same(arr1,arr2){
   let arrObj1 = {};
   let arrObj2 = {};
   
   if(arr1.length !== arr2.length){
       console.log(false);
       return false
   }

   for(let num of arr1){
    arrObj1[num] = (arrObj1[num] || 0) + 1
   }
   for(let num of arr2){
    arrObj2[num] = (arrObj2[num] || 0) + 1
   }
    for(let num of arrObj1)
    {
        if(!(arrObj1[num]**2 in arrObj2[num] ))
        {
            console.log(false);
            return false
        }
}



// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word , phrase or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// validAnagram("","")true
// validAnagram("aaz","zza")false
// validAnagram("anagram","nagaram")trye
// validAnagram("rat","car")false
// validAnagram("awesome",'awesom')false
// validAnagram("qwerty","qeywrt")true
// validAnagram("texttwisttime",'timetwisttext') true


// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits. Your solution MUST have the following complexity O(N).

// sample input: (182,281)
// (34,14)
// (3589578,5879385)


// Implement a function called, arethereduplicates which accpets a variable number of arguments, andd chcecks whether there are any duplicates among the arugments passed in. you can solve this using the frequency counter pattern or the multiple pointers pattern.

// (1,2,3).
// (1,2,2)
// ('a','b','c','d')



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

// Frequency counter / multiple points problem ***********************


// function areThereDuplicates(){
//     let dupeArr = []
//     let dupeObj = {}


// for(let i=0;i < arguments.length;i++)
// {
//     dupeArr.push(arguments[i])
// }


// for(let val of dupeArr){
//     dupeObj[val] = (dupeObj[val] || 0) + 1

//     if(dupeObj[val] > 1 )
//     {
//         console.log(true,"duplicates");
//         return true
//     }
    
    
// }
// console.log(false,"No duplicates");
// return false

// }

// areThereDuplicates(1,2,3)
// areThereDuplicates(1,2,2)
// areThereDuplicates('a',"b","c","a")






//  FREQUENCY COUNTER ONLY USING ONE OBJECT, cleaner solution then above ****************************************************************************
// function sameFrequency(first, second) {
//   let firstObj = {};

//   let stringFirst = first.toString();
//   let stringSecond = second.toString();

//   if (stringFirst.length !== stringSecond.length) {
//     console.log("False");
//     return false;
//   }

//   for (let val of stringFirst) {
//     firstObj[val] = (firstObj[val] || 0) + 1;
//   }
//   console.log(firstObj);

//   for (let val of stringSecond) {
//     if (!firstObj[val]) {
//       console.log(false);
//       return false;
//     }
//     firstObj[val]--;
//   }
//   console.log(true);
//   return true;
// }
// sameFrequency(18232, 28132);





