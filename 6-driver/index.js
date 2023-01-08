const HAS_LICENCE = true;
const AGE = 18;
const IS_DRUNK = false;

const isDrivingAllowed = HAS_LICENCE && AGE >= 18 && !IS_DRUNK;

console.log(`Homework №3
Пользователь${isDrivingAllowed ? '' : ' не'} может садиться за руль`);
