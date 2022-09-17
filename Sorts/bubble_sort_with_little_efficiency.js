const swap = function (arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

const bubbleSort = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        let sorted = false;
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                sorted = true;
                swap(arr, j, j + 1);
            }
        }
        if (!sorted) {
            break;
        }
    }
};

const main = function () {
    const arr = [13, 2, 8, 28, 12, 9, 3, 18, 4];
    bubbleSort(arr);
    console.log(arr);
};

main();
