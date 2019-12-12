// TODO: write your code here
import setUpAttacks from './basic';

const characters = [
  { name: 'маг', health: 15 },
  { name: 'лучник', health: 3 },
  { name: 'мечник', health: 6 },
];

console.log(characters);

const attacks = setUpAttacks(characters);

attacks[0](9); // атакуем лучника 9 баллами урона

console.log(characters);

attacks[0](9);

console.log(characters);
