export const tail = (array) => {
    const [first, ...rest] = array;
    return rest;
};
