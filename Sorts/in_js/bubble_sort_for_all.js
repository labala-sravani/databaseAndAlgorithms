const swap = function (arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

const isLess = (a, b) => a < b;

const bubbleSort = function (arr, sorterFunc = isLess) {
    for (let i = 0; i < arr.length; i++) {
        let sorted = false;
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (sorterFunc(arr[j + 1], arr[j])) {
                sorted = true;
                swap(arr, j, j + 1);
            }
        }
        if (!sorted) {
            break;
        }
    }
};

const basedOnName = (a, b) => {
    return isLess(a.name, b.name);
};

const main = function () {
    const arr = [13, 2, 8, 28, 12, 9, 3, 18, 4];
    bubbleSort(arr);
    console.log(arr);

    const strArr = [
        { name: 'joy', place: 'hyd' },
        { name: 'raj', place: 'singapore' },
        { name: 'edward', place: 'goa' },
        { name: 'alice', place: 'us' },
        { name: 'tom', place: 'canada' },
        { name: 'jerry', place: 'canada' },
    ];
    bubbleSort(strArr, basedOnName);
    console.log(strArr);
};

main();
