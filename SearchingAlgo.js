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

function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let midPoint = (start + end) / 2;

    if (arr[midPoint] === val) {
      return midPoint + 1;
    } else if (arr[midPoint] < val) {
      start++;
    } else if (arr[midPoint] > val) {
      end--;
    }

    return -1;
  }
}
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 5));
