// export const concatOpt = (...args) => {
//     let newArray = [];
//     args.forEach((array) => {
//         array.forEach((itemOfArray) => {
//             newArray.push(itemOfArray);
//         });
//     });
//     return newArray;
// };

export const concatOpt = (...args) => {
    return args.flat();
};
