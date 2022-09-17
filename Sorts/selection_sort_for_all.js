const swap = function (arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

const isLess = (a, b) => a < b;

const selectionSort = function (arr, sorterFunc = isLess) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (sorterFunc(arr[j], arr[minIndex])) {
                minIndex = j;
            }
        }
        swap(arr, i, minIndex);
    }
};

const basedOnName = (a, b) => {
    return isLess(a.name, b.name);
};

const main = function () {
    const arr = [13, 2, 8, 28, 12, 9, 3, 18, 4];
    selectionSort(arr);
    console.log(arr);

    const strArr = [
        { name: 'joy', place: 'hyd' },
        { name: 'raj', place: 'singapore' },
        { name: 'edward', place: 'goa' },
        { name: 'alice', place: 'us' },
        { name: 'tom', place: 'canada' },
        { name: 'jerry', place: 'canada' },
    ];
    selectionSort(strArr, basedOnName);
    console.log(strArr);
};

main();
