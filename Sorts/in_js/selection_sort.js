const swap = function (arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

const selectionSort = function (arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        swap(arr, i, minIndex);
    }
};

const main = function () {
    const arr = [13, 2, 8, 28, 12, 9, 3, 18, 4];
    selectionSort(arr);
    console.log(arr);
};

main();
