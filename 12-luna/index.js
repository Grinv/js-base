function isCardNumberCorrect(cardNumber) {
    const CORRECT_CARD_NUMBBER_LENGTH = 16;

    const cleanCardNumber = cardNumber.trim().replaceAll('-', '');
    if (cleanCardNumber.length !== CORRECT_CARD_NUMBBER_LENGTH) {
        return false;
    }

    const cleanCardNumberArray = cleanCardNumber.split('');

    if (cleanCardNumberArray.some(symbol => Number.isNaN(Number(symbol)))) {
        return false;
    }

    const transformedArray = cleanCardNumberArray.map((number, index) => {
        if (index % 2 === 0) {
            const doubleNumbernumber = number * 2;
            return doubleNumbernumber > 9 ? doubleNumbernumber - 9 : doubleNumbernumber;
        }
        return Number(number);
    })

    return transformedArray.reduce((acc, number, index) => {
        if (index === transformedArray.length - 1) {
            return (acc + number) % 10 === 0;
        }
        return acc += number;
    }, 0)
}

const CARD_NUMBER = '4561-2612-1234-5464'

console.log(isCardNumberCorrect(CARD_NUMBER));
