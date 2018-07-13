// Quicksort - Complexity: O (log n)
function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    let less = [], greater = [];
    let pivot = arr.splice(Math.floor(arr.length / 2), 1);

    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] <= pivot) {
            less.push(arr[i]);
        } else {
            greater.push(arr[i]);
        }
    }

    return quickSort(less).concat(pivot, quickSort(greater));
};
quickSort([3, 1, 43, 5, -2, 123, 6, 231, 0, -2])


//Bubble Sort Complexity: N + (N-1) + (N-2) + … ≈  (N * (N-1)) / 2 = N²
function bubbleSort(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                let tmp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = tmp;
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
};
bubbleSort([3, 1, 43, 5, -2, 123, 6, 231, 0, -2])


//Insertion Sort Complexity: O(n²)
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];

        for (var j = i - 1; j > -1 && arr[j] > current; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = current;
    }
    return arr;
}
insertionSort([3, 1, 43, 5, -2, 123, 6, 231, 0, -2])


//Linear search Complexity: O(n)
function linearSearch(arr, toFind) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === toFind) {
            return i;
        }
    }
    return null;
}
linearSearch([3, 1, 43, 5, -2, 123, 6, 231, 0, -2], 1);


//Binary search Complexity: O(log n)
function binarySearch(arr, toFind) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (arr[mid] === toFind) {
            return mid;
        }
        if (arr[mid] < toFind) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return null;
}
binarySearch([2, 5, 8, 9, 13, 45, 67, 99], 9);