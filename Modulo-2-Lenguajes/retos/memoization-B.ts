const expensiveFunctionB = () => {
    console.log('Una única llamada');
    return 3.1415;
};

const memoizeB = (func) => {
    let result;
    return () => (result === undefined ? (result = func()) : result);
};

const memoizedB = memoizeB(expensiveFunctionB);
console.log(memoizedB()); // Una única llamada // 3.1415
console.log(memoizedB()); // 3.1415
console.log(memoizedB()); // 3.1415
