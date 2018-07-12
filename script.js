function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    var less = [], greater = [];

    var pivot = arr.splice(Math.floor(arr.length / 2), 1);

    for (var i = arr.length - 1; i >= 0; i--) {
        if (arr[i] <= pivot) {
            less.push(arr[i]);
        } else {
            greater.push(arr[i]);
        }
    }

    return quickSort(less).concat(pivot, quickSort(greater));
};

var arr = [3, 1, 43, 5, -2, 123, 6, 231, 0, -2];
console.log(quickSort(arr))