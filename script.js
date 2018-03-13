let arrays = [[1, 2, 3], [4, 5], [6]];

arrays.reduce(function(prev, curr) {
    return prev.concat(curr);
});

//---------------------------------
function every(array, test) {
    for(let i = 0; i<array.length; i++){
        if(!test(array[i])){
            return false;
            break;
        }
    }
    return true;
}

every([], n => n < 10);

// function every(array, test) {
//     var status = true;
//     array.forEach((a) => {
//         if(!test(a)){
//         status = false
//     }
// });
//     return status;
// }
//
// every([], n => n < 10)

//---------------------------------
Array.prototype.customMap = function(cb) {
    arr = [];
    for (var i = 0; i < this.length; i++)
        arr.push(cb(this[i], i, this));
    return arr;
};

var arr = ['BMW', 'Audi'];
arr.customMap(function(value, index, arr) {
    console.log(value, index, arr)
});

//---------------------------------
Array.prototype.customFilter = function(cb) {
    arr = [];
    for (var i = 0; i < this.length; i++)
        if(cb(this[i], i, this)){
            arr.push(this[i]);
        }
    return arr;
};

var arr = ['BMW', 'Audi'];
arr.customFilter(function(value, index, arr) {
    console.log(value, index, arr)
    return value === 'Audi'
});

//---------------------------------
Array.prototype.customFind = function(cb) {
    for (var i = 0; i < this.length; i++){
        if(cb(this[i], i, this))
            return this[i];
    }
};

function checkCar (car) {
    return car === 'Audi'
}

var arr = ['BMW', 'Audi'];
arr.customFind(checkCar)


//--------------------------------
Array.prototype.customReduce = function(cb, lastVal) {
    for (var i = 0; i < this.length; i++) {
        if (lastVal !== undefined){
            lastVal = cb(lastVal, this[i], i, this);
        }else{
            lastVal = this[i];
        }
    }
    return lastVal;
};

var arr = [5, 5, 4];
arr.customReduce(function(a, b) {
    return a + b;
}, 10);