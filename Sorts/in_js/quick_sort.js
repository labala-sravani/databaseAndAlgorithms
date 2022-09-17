const swap = function (arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

const quickSort = function (arr, startIndex, pivotIndex) {
    if (startIndex < pivotIndex) {
        let i = startIndex;
        for (let j = startIndex; j < pivotIndex; j++) {
            if (arr[j] < arr[pivotIndex]) {
                swap(arr, i, j);
                i++;
            }
        }
        swap(arr, i, pivotIndex);
        quickSort(arr, startIndex, i - 1);
        quickSort(arr, i + 1, pivotIndex);
    }
};

const main = function () {
    const arr = [13, 2, 8, 28, 12, 9, 3, 18, 4];
    quickSort(arr, 0, arr.length - 1);
    console.log(arr);
};

main();
