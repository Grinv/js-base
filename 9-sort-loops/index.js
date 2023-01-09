const arr = [1, 40, -5, 10, 0];

function sort(arr) {
    for (const i of arr.keys()) {
        for (const j of arr.keys()) {
            if (arr[j] > arr[i]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }

    return arr;
}

console.log(sort(arr));
