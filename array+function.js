// 6. Create a function findLargest() that takes an array of numbers and returns the largest number.

function findLargest(arr) {
    let largest = arr[0]
    for (i = 0; i < arr.length; i++) {

        if (arr[i] > largest) {
            largest = arr[i]

        }
    }
    return largest
}

console.log(findLargest([9, 7, 10, 5, 20, 15, 30, 14, 49]))

// let arr = [9, 7, 10, 5, 20, 15, 30, 14, 19]
// let largest = arr[0]

// for (i = 1; i < arr.length - 1; i++) {

//     if (arr[i] > largest) {
//         largest = arr[i]
//     }
// }
// console.log(largest)


// 7. Create a function findSmallest() that takes an array of numbers and returns the smallest number.

function findSmallest(arr) {

    let smallest = arr[0]


    for (i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i]
        }
    }
    return smallest
}

console.log(findSmallest([1, 10, 5, 20, 7, 7, 1.2, 3, 4]))

function secondSmallest(arr) {
    let smallest = arr[0] //4
    let secondSmallest = arr[1]//44

    if (smallest > secondSmallest) {
        let temp = smallest
        smallest = secondSmallest
        secondSmallest = temp
    }
    for (i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            secondSmallest = smallest
            smallest = arr[i]
        } else if (arr[i] < secondSmallest) {
            secondSmallest = arr[i]
        }

    }
    return secondSmallest
}

console.log(secondSmallest([5, 4, 3, 2, 0]))

// 8. Create a function calculateAverage() that takes an array of numbers and returns the average.

function calculateAverage(sum) {
    let count = 0
    for (let i = 0; i < sum.length; i++) {
        count = (count + sum[i])
    }
    return count / sum.length
}
console.log(calculateAverage([25, 35, 94, 71, 30, 10]))


// 9. Create a function countEvenNumbers() that takes an array and returns the total number of even numbers.

function countEvenNumbers(even) {

 let   count = 0
    for (i = 0; i < even.length; i++) {
        if (even[i] % 2 == 0) {
            count =count+1
        }
    }
    return count
}

console.log(countEvenNumbers([11,14,10, 12, 10,20,16]))

// let even = [11, 12, 10, 80, 89, 55, 60, 99, 65, 24, 52, 92, 76]
//  let count = 0
// for (let i = 0; i < even.length; i++) {
   
//     if (even[i] % 2 == 0) {
//         count += even[i]
        
//     }
// }
// console.log(count)

