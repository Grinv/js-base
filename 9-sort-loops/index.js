const arr = [1, 40, -5, 10, 0];

function sort(arr) {
    const sortedArray = Array.from(arr);
    for (const i of sortedArray.keys()) {
        for (const j of sortedArray.keys()) {
            if (sortedArray[j] > sortedArray[i]) {
                [sortedArray[i], sortedArray[j]] = [sortedArray[j], sortedArray[i]];
            }
        }
    }

    return sortedArray;
}

console.log(sort(arr));
