// Recursion is a separate way to solve something. the normal way is called iterative.

// Recursion has to have two things, base case (end of the line, recursion stops), different input( each time called on a different piece of data)

// Pure recursion tips for

// for arrays, use methods liek slice, the spread operator, and concat that makes copies of arrays so you ddo not mutate them.

// remember that strings are immutable so you will need to use methods like slice, substr, or substring to make copies of strings

// to make copies of objects use Object.assign, or the spread operator

// function countdown(num){
//     if(num <= 0){
//         console.log("Blastoff!");
//         return
//     }
//     console.log(num);
//     num--
//     countdown(num)
// }
// countdown(10);

// function factorial(num){

//     if(num === 1){

//         return 1; }
//      return num * factorial(num - 1)
// }
// console.log(factorial(5))

// function collectOdds(array){
//     let result = []

//     function collectorHelper(helperInput){
//         if(helperInput.length === 0){
//             return
//         }
//         if(helperInput[0] % 2 !== 0){
//             result.push(helperInput[0])
//         }

//         collectorHelper(helperInput.slice(1))
//     }
//     collectorHelper(array)
//     return result
// }

// console.log(collectOdds([1,2,3,4,5,6,7,8,9]));

// write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. this function should mimic the functiuonality of Math.pow() - do not worry about negative bases and exponents.


// function power(base, exponent){
//     if(exponent === 0){
//         return 1
//     }
//    return base * power(base,exponent - 1)
// }

// console.log(power(2,4));

// write a function factorial which accepts a number and returns the factorial of that number. a factorial is the product of an integer and all the integers below it. eg factorial four is equal to 24 becuase 4*3*2*1 equals 24. favorital zero is always 1

// function factorial(num){
//     if(num===0){
//         return 1
//     }
//    return num * factorial(num-1)
// }
// console.log(factorial(7));

// write a function call productofarray which takesin an array of numbers and returns the product of them all.
// function productOfArray(arr){
//     if(arr.length === 0 ){
//         return 1
//     }

//    return arr[0] * productOfArray(arr.slice(1))

// }
// console.log(productOfArray([1,2,3,10]));

//  Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function

// function recursiveRange(num){
//     if(num === 0){
//         return 0
//     }
//     return num + recursiveRange(num - 1)

// }
// console.log(recursiveRange(6));

// Write a recursive function called fib which accepts a number and returns the nth number in teh fibonacci sequence. Recall that the fibonacci sequence is the sequence of whole numbers 1,1,2,3,5,8 .toExponential.apply. which starts with 1 and 1 and where every number thereafter is euqal to thesum of the previous two numbers.

// function fib(num) {
//   let arr = [1,1];
//   let left = 0
  

//   function helper(helperInput) {
//       if(num === 0){
//           return arr[arr.length]
//       }
//    arr.push(arr[left] + arr[left+1])
//    left++   
//   }
  

//  helper(num - 1);

  
// }

// console.log(fib(10));


// function fib(num){
//     if(num <= 2){
//         return 1
//     }
//     return fib(num-1) + fib(num-2)
// }
// console.log(fib(10));

// write a recursive function called reverse which accepts a string and returns a new string in reverse

// function reverse(str){
// arr = []
// let arrStr=str.split("")
// console.log(arrStr);

//     if(str[0] === arr[arr.length-1]){
//         return
//     }

//     function help(input){
        
//     }

//     reverse()

   

// }

// reverse("test")

// function reverse(str){
//     if (str.length === 1) return arr;
//     return reverse(str.slice(1)).concat(str[0]);
//   }
//   console.log(reverse("tes"))

//   reverse(es).concat(t)
//   reverse(s).concat(e)
//   s+e+t


// write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome(reads the same forward and backward). Otherwise it returns false.


// function reversed(str) {
//     if (str.length===0) return ;
//     return reversed(str.slice(1)) + str[0];
// }
 
// function isPalindrome(str){
//     return str === reversed(str);
// }
// console.log(isPalindrome("awesome"))