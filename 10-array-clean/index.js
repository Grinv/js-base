const array = [5, 0, 2, -1, 20, 40, 0, 4];

function sort(arr, isElementRemovable) {
    for (let index = 0; index < arr.length; index++) {
        if (isElementRemovable(arr[index])) {
            arr.splice(index, 1);
            index--;
        }
    }

    return arr;
}

console.log(sort(array, a => a > 5));
