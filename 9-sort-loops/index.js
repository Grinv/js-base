const arr = [1, 40, -5, 10, 0];

function sort(arr) {
    for (const i in arr) {
        for (const j in arr) {
            if (arr[j] > arr[i]) {
                let tempElement = arr[i];
                arr[i] = arr[j];
                arr[j] = tempElement;
            }
        }
    }

    return arr;
}

console.log(sort(arr));
