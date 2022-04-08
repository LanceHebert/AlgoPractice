// ****************************************************************
// Sliding window

// 1. Sliding Window


// The Sliding Window pattern is used to perform a required operation on a specific window size of a given array or linked list, such as finding the longest subarray containing all 1s. Sliding Windows start from the 1st element and keep shifting right by one element and adjust the length of the window according to the problem that you are solving. In some cases, the window size remains constant and in other cases the sizes grows or shrinks.



// Following are some ways you can identify that the given problem might require a sliding window:

// The problem input is a linear data structure such as a linked list, array, or string
// You’re asked to find the longest/shortest substring, subarray, or a desired value
// Common problems you use the sliding window pattern with:

// Maximum sum subarray of size ‘K’ (easy)
// Longest substring with ‘K’ distinct characters (medium)
// String anagrams (hard)




// Write a function called maxSubArraySum which accepts an array of integers and a number called n. the function should calculate the maximum sum of n consecutive elements in teh array.

// maxSubArraySum([1,2,5,2,8,1,5],2) //10









function maxSubArraySum(arr,num){
    if(arr.length < num){
        return null
    }
    let maxSum = 0
    for(let i=0; i<num; i++){
        maxSum += arr[i]
    }
    tempSum = maxSum

    //  the key here is to look a certain number of spaces, minus the first index and add the next index at the end.
    
    for(let i=num; i<arr.length; i++){
        tempSum = tempSum - arr[i-num] + arr[i]
        if(tempSum > maxSum){
            maxSum = tempSum
        }

    }
    console.log(maxSum);
}
maxSubArraySum([2,6,9,2,1,8,5,6,3],4)