const swap = function (arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

const bubbleSort = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
};

const main = function () {
    const arr = [13, 2, 8, 28, 12, 9, 3, 18, 4];
    bubbleSort(arr);
    console.log(arr);
};

main();
