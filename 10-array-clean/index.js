const array = [5, 0, 2, -1, 20, 40, 0, 4];

function sort(arr, getIsElementRemovable) {
    for (let index = 0; index < arr.length; index++) {
        // можно было бы по другому сделать. Сделать новый массив и в него пушить элементы и затем
        // вернуть новый массив
        if (getIsElementRemovable(arr[index])) {
            arr.splice(index, 1);
            index--;
        }
    }

    return arr;
}

console.log(sort(array, a => a > 5));
