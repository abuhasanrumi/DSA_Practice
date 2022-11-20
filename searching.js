// Linear Searching

let arr = [10, 70, 60, 40, 20, 50, 90, 80, 30, 100];
let target = 30;

function linearSearch(arr, target) {
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] === target) {
            return 'Data found at ' + i;
        }
    }
    return "Data not found";
}

console.log(linearSearch(arr, target));


// Binary Searching
let arr2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
let target2 = 90;

function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1
    let mid = Math.floor((start + end) / 2);

    while (start <= end) {
        if (arr[mid] === target) {
            return "Found at index " + mid;
        } else if (arr[mid] < target) {
            start = mid + 1;
            mid = Math.floor((start + end) / 2);
        } else if (arr[mid] > target) {
            end = mid - 1;
            mid = Math.floor((start + end) / 2);
        }
    }
}

console.log(binarySearch(arr2, target2))