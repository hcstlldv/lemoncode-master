export function merge(source, target) {
    return {
        ...target,
        ...source,
    };
}
