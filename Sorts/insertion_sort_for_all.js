const isLess = (a, b) => a < b;

const insertionSort = function (arr, sorterFunc = isLess) {
    for (let i = 1; i < arr.length; i++) {
        const key = arr[i];
        let j = i - 1;
        while (j >= 0 && sorterFunc(key, arr[j])) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
};

const basedOnName = (a, b) => {
    return isLess(a.name, b.name);
};

const main = function () {
    const arr = [13, 2, 8, 28, 12, 9, 3, 18, 4];
    insertionSort(arr);
    console.log(arr);

    const strArr = [
        { name: 'joy', place: 'hyd' },
        { name: 'raj', place: 'singapore' },
        { name: 'edward', place: 'goa' },
        { name: 'alice', place: 'us' },
        { name: 'tom', place: 'canada' },
        { name: 'jerry', place: 'canada' },
    ];
    insertionSort(strArr, basedOnName);
    console.log(strArr);
};

main();
