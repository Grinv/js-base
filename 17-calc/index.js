// FYI попытался сделать максимально семантически правильно и максимально
// заюзать стандартные методы html :)

function getResult(form) {
    const number1 = Number(form.get('number1'));
    const number2 = Number(form.get('number2'));

    switch(document.activeElement.dataset.operation) {
    case 'addition':
        return number1 + number2;
    case 'subtraction':
        return number1 - number2;
    case 'multiplication':
        return number1 * number2;
    case 'division':
        return number1 / number2;
    }
}

function calc(e) {
    e.preventDefault();
    document.getElementById('result').value = getResult(new FormData(e.target));
}