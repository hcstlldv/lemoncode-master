type embeddedArray = embeddedArray[] | number | number[];

const internalFlatten = (
    array: embeddedArray[],
    flattenArray: number[] = []
) => {
    array.forEach((item) => {
        if (typeof item === 'number') {
            flattenArray.push(item);
        } else {
            return internalFlatten(item, flattenArray);
        }
    });
    return flattenArray;
};

const flatten = (array: embeddedArray[]) => {
    return internalFlatten(array);
};

const sample = [1, [2, 3], [[4], [5, 6, [7, 8, [9]]]]];

console.log(flatten(sample));
