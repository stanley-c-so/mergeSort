function split(wholeArray) {
    
    // RECURSIVE SOLUTION:

    // const midPoint = Math.ceil(wholeArray.length / 2);
    // const firstHalf = wholeArray.slice(0, midPoint);
    // const secondHalf = wholeArray.slice(midPoint);
    // return [firstHalf, secondHalf];

    // ITERATIVE SOLUTION:

    const result = [];
    wholeArray.forEach(element => result.push([element]));
    return result;
}

function merge(firstHalf, secondHalf) {
    let combinedArray = [];
    const targetLength = firstHalf.length + secondHalf.length
    while(firstHalf.length && secondHalf.length) {
        (firstHalf[0] < secondHalf[0])
            ? combinedArray.push(firstHalf.splice(0, 1)[0])
            : combinedArray.push(secondHalf.splice(0, 1)[0]);
    }
    combinedArray = [...combinedArray, ...firstHalf, ...secondHalf]

    return combinedArray;
}

function mergeSort(array) {
    let mergedArray = [];
    array = split(array);
    while (array.length > 1) {
        for (let i = 0; i < array.length; i += 2) {
            if (i === array.length - 1) {
                mergedArray.push(array[i])
            } else {
                mergedArray.push(merge(array[i], array[i + 1]));
            }
        }
        array = mergedArray;
        mergedArray = [];
    }
    return array[0];
}


// TESTS

let a = [3, 9, 10, 27, 38, 43, 82]
let b = [15, 35, 50, 75, 100, 105]

console.log(mergeSort([...a, ...b]));
