function getConvertRate(currency) {
    const rub = 1;
    const dollar = 80;
    const euro = 82;

    switch (currency) {
        case 'rub':
            return rub;
        case 'dollar':
            return dollar;
        case 'euro':
            return euro;
        default:
            return 0;
    }
}

function convert(sum = 0, currencyIn, currencyOut) {
    if (!currencyIn || !currencyOut) {
        return null;
    }

    return getConvertRate(currencyIn) / getConvertRate(currencyOut) * sum;
}

console.log(`Homework №4
${convert(1, 'euro', 'rub')}`);
