// esta implementación solo crear copias de las propiedades de primer nivel, las de segundo nivel en adelante son la misma referencia
// export function clone(source) {
//     return { ...source };
// }

export function clone(source) {
    return JSON.parse(JSON.stringify(source));
}
