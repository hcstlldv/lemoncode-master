export const diceRandom = (min: number = 1, max: number = 6) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

export const dice = (() => {
    let prevValue: number | undefined;
    return (reset?: boolean) => {
        let value: number | undefined = diceRandom();
        if (reset) {
            prevValue = undefined;
            value = undefined;
        }
        if (!prevValue) prevValue = value;
        if (value === prevValue && value === 6) {
            console.log('Congrats!!');
        }
        return value;
    };
})();

console.log(dice());
console.log(dice());
