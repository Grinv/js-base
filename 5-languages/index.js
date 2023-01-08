const LANGUAGE = 'fdrffu';

let greeting = '';

switch (LANGUAGE) {
    case 'ru':
        greeting = 'Дарова';
        break;
    case 'en':
        greeting = ' Hello';
        break;
    case 'de':
        greeting = 'Gutten tag!';
        break;
    default:
        greeting = 'Такого языка нет';
}

console.log(`Homework №2
${greeting}`);
