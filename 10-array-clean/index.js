const array = [5, 0, 2, -1, 20, 40, 0, 4];

function sort(arr, getIsElementRemovable) {
    const filteredArray = [];

    for (const arrElement of arr) {
        if (!getIsElementRemovable(arrElement)) {
            filteredArray.push(arrElement);
        }
    }

    return filteredArray;
}

console.log(sort(array, a => a > 5));
