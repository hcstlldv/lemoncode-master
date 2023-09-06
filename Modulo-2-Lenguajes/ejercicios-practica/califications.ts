import { values } from './values';

export const average = (results: number[]): number => {
    if (!results) return 0;
    const summatoryResults = results.reduce((x, y) => {
        return x + y;
    });
    const average = summatoryResults / results.length;
    return average;
};

export const transformGradeToText = (grade: number) => {
    if (grade < 4) return 'Muy deficiente';
    if (grade < 5) return 'Insuficiente';
    if (grade < 6) return 'Suficiente';
    if (grade < 7) return 'Bien';
    if (grade < 9) return 'Notable';
    if (grade < 10) return 'Sobresaliente';
    return 'Matrícula de Honor';
};

const eso2o = {
    David: 8.25,
    Maria: 9.5,
    Jose: 6.75,
    Juan: 5.5,
    Blanca: 7.75,
    Carmen: 8,
};

export const printAverage = (classResults: Object) => {
    const results = values<number>(classResults);
    const classAverage = average(results);
    return transformGradeToText(classAverage);
};

console.log(printAverage(eso2o));
