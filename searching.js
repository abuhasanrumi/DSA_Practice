// // Linear Searching

// let arr = [10, 70, 60, 40, 20, 50, 90, 80, 30, 100];
// let target = 30;

// function linearSearch(arr, target) {
//     for (let i = 0; i <= arr.length; i++) {
//         if (arr[i] === target) {
//             return 'Data found at ' + i;
//         }
//     }
//     return "Data not found";
// }

// console.log(linearSearch(arr, target));


// // Binary Searching
// let arr2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
// let target2 = 90;

// function binarySearch(arr, target) {
//     let start = 0;
//     let end = arr.length - 1
//     let mid = Math.floor((start + end) / 2);

//     while (start <= end) {
//         if (arr[mid] === target) {
//             return "Found at index " + mid;
//         } else if (arr[mid] < target) {
//             start = mid + 1;
//             mid = Math.floor((start + end) / 2);
//         } else if (arr[mid] > target) {
//             end = mid - 1;
//             mid = Math.floor((start + end) / 2);
//         }
//     }
// }

// console.log(binarySearch(arr2, target2))



// //Binary Searching Order Agnostic

// function binarySearch(arr, target) {
//     let start = 0;
//     let end = arr.length - 1
//     let mid;
//     let asc;

//     if (arr[start] <= arr[end]) {
//         asc = true
//     } else {
//         asc = false;
//     }

//     while (start <= end) {
//         mid = Math.floor((start + end) / 2);

//         if (arr[mid] === target) {
//             return "Found at index " + mid;
//         } else if (asc) {
//             if (arr[mid] < target) {
//                 start = mid + 1;
//                 mid = Math.floor((start + end) / 2);
//             } else {
//                 end = mid - 1;
//                 mid = Math.floor((start + end) / 2);
//             }
//         } else if (!asc) {
//             console.log("here")
//             if (arr[mid] > target) {
//                 start = mid - 1;
//                 mid = Math.floor((start + end) / 2);
//             } else {
//                 end = mid + 1;
//                 mid = Math.floor((start + end) / 2);
//             }
//         }
//     }
// }

// console.log(binarySearch([90, 80, 70, 55, 40, 20], 55))
// console.log(binarySearch([10, 20, 30, 40, 50, 60], 50))



// Matching Number Binary Search
function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1
    let mid = Math.floor((start + end) / 2);

    while (start <= end) {
        let counter = 0;
        if (arr[mid] === target) {
            counter++;
        }

        for (let i = mid - 1; i >= 0; i--) {
            if (arr[i] === target) {
                counter++;
            }
        }

        for (let i = mid + 1; i < arr.length; i++) {
            if (arr[i] === target) {
                counter++;
            }
        }
        return counter;
    }
}

console.log(binarySearch([90, 80, 80, 70, 55, 40, 20], 100))
// console.log(binarySearch([10, 20, 30, 40, 40, 40, 40, 40, 50, 60], 20))