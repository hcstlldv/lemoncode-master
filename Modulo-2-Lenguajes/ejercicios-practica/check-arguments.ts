// Para mí esta forma es la más expresiva aunque no se la más compacta
export function validateInput(input: string | undefined | null) {
    if (input === undefined) return 'Unknown';
    if (input === null) return '';

    return input;
}

// Esta sería la más compacta y expresiva (aunque a mí no me parezca tan expresiva de primeras)
export function validateInput2(input: string | undefined | null) {
    return input === undefined ? 'Unknown' : input === null ? '' : input;
}
