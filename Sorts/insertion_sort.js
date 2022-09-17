const insertionSort = function (arr) {
    for (let i = 1; i < arr.length; i++) {
        const key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
};

const main = function () {
    const arr = [13, 2, 8, 28, 12, 9, 3, 18, 4];
    insertionSort(arr);
    console.log(arr);
};

main();
