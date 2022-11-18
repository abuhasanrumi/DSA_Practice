let arr = [12, 43, 26, 74, 29, 41, 58, 91, 10];
let target = 74;

function linearSearch(arr, target) {
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] === target) {
            return 'Data found at ' + i;
        }
    }
    return "Data not found";
}

console.log(linearSearch(arr, target));