const swap = function (arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

const isLess = (a, b) => a < b;

const quickSort = function (arr, startIndex, pivotIndex, sorterFunc = isLess) {
    if (startIndex < pivotIndex) {
        let i = startIndex;
        for (let j = startIndex; j < pivotIndex; j++) {
            if (sorterFunc(arr[j], arr[pivotIndex])) {
                swap(arr, i, j);
                i++;
            }
        }
        swap(arr, i, pivotIndex);
        quickSort(arr, startIndex, i - 1);
        quickSort(arr, i + 1, pivotIndex);
    }
};

const basedOnName = (a, b) => {
    return isLess(a.name, b.name);
};

const main = function () {
    const arr = [13, 2, 8, 28, 12, 9, 3, 18, 4];
    quickSort(arr, 0, arr.length - 1);
    console.log(arr);

    const strArr = [
        { name: 'joy', place: 'hyd' },
        { name: 'raj', place: 'singapore' },
        { name: 'edward', place: 'goa' },
        { name: 'alice', place: 'us' },
        { name: 'tom', place: 'canada' },
        { name: 'jerry', place: 'canada' },
    ];
    quickSort(strArr, 0, strArr.length - 1, basedOnName);
    console.log(strArr);
};

main();
