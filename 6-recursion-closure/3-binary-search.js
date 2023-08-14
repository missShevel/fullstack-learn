function generateArr(len) {
    const arr = [];
    for(let i = 0; i < len; i++){
        arr.push(i);
    }
    return arr;
}

function binarySearch(arr, el) {
    var mid = Math.floor(arr.length / 2);
    
    if (arr[mid] === el) {
        return arr[mid];
    } else if (arr[mid] < el && arr.length > 1) {
        return binarySearch(arr.slice(mid), el);
    } else if (arr[mid] > el && arr.length > 1) {
        return binarySearch(arr.slice(0, mid), el);
    } else {
        return -1;
    }
}

const arr = generateArr(100);
console.log(binarySearch(arr, 5));
