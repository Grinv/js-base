const ADDRESS_LAT = 10;
const ADDRESS_LONG = 12;

const POSITION_LAT = 2;
const POSITION_LONG = 3;

const latDiff = ADDRESS_LAT - POSITION_LAT;
const longDiff = POSITION_LONG - ADDRESS_LONG;

const distance = Math.sqrt(latDiff ** 2 + longDiff ** 2);
console.log(`Homework №1
Расстояние между точками: ${distance}`);
