// Linear Search : One item at a time
// examples: indexof,find,includes

// function linearSearch(arr,val){

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i]===val)
//         {
//             return i
//         }
//     }
//     return -1
// }
// console.log(linearSearch([1,2,3],2))

// **********************************
// Binary Search - only works on sorted arrays, has to be an order to it alphabetical or numeric

// function binarySearch(arr, val) {
//   let start = 0;
//   let end = arr.length - 1;
//   let midPoint = Math.floor((start + end) / 2);

//   while (arr[midPoint] !== val && start <= end) {
//     if (arr[midPoint] < val) {
//       start = midPoint + 1;
//     } else {
//       end = midPoint - 1;
//     }
//     midPoint = Math.floor((start + end) / 2);
//   }
//   if (arr[midPoint] === val) {
//     return midPoint;
//   }
//   return -1;
// }

// console.log(binarySearch([1, 2, 3, 4, 5], 5));

// Elementary Sorting Algorithm     ***********************************

// BubbleSort

// Basically compare two and then swap the values based on who is bigger and then compare the next two.

// Bubble sort tends to be O(n^2)

// Optimized with no swaps. saves time from runnign through everything when there are no sorts to be done.

// function bubSort(arr){
//   let temp = 0
//   let noSwaps = true
//   for(let i = arr.length; i > 0; i--){
//     noSwaps = true
//     for(let j =0;j < i-1; j++){
//       if(arr[j] > arr[j+1]){
//         temp = arr[j];
//         arr[j] = arr[j+1];
//         arr[j+1] = temp;
//         noSwaps=false
//       }
//     }
//   }
//   return arr
// }
// console.log(bubSort([37,45,29,8]));

// ************************************************

// Selection Sort

// Similar to bubble sort , but instead of first placing large values into sorted position, it places small values into sorted position.

// Store the first element as the smallest value youve seen so far.
// compare this item to the next item in teh array until you find a smaller number
// if a smaller number is found, designate that smaller number to be the new minium and continue until the end of the array.
// if the minimum is not he value(index) you initially began with, swap the two values.
// repeat this with the next element until the array is sorted


// Selection sort isnt that efficient.

// function selSort(arr) {
//   let temp = 0;

//   for (let i = 0; i < arr.length; i++) {
//     let min = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[min]) {
//         min = j;
//       }
//     }
//     if (i !== min) {
//       temp = arr[i];
//       arr[i] = arr[min];
//       arr[min] = temp;
//     }
//   }
//   return arr;
// }

// console.log(selSort([2, 5, 9, 7, 5, 3]));

// ****************************************************************

// Insertion Sort

// Builds up the sort by gradually creating a larger left half which is always sorted

function insertionSort(arr){
  
  for (let i = 1 ; i < arr.length;i++){ //i=3
   let currentVal = arr[i]; //5
   let j = 0
   for( j= i-1;j >=0 && arr[j] > currentVal;j--){
     arr[j+1] = arr[j]
   } 
   arr[j+1]= currentVal;
  }
  return arr
}

console.log(insertionSort([8,5,4,9,1,3]));