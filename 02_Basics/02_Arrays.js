const marvelHeroes = [
  'Iron Man',
  'Thor',
  'Captain America',
  'Dr Strange',
  'Hulk',
  'Spiderman',
];
const dcHeroes = [
  'Superman',
  'Batman',
  'Aquaman',
  'Wonder Women',
  'Flash',
  'No-other-hero',
];

// const heroes = marvelHeroes.push(dcHeroes); //it includes dcHeroes as a complete new array in marvelHeroes
// console.log(marvelHeroes);

// const heroes = marvelHeroes.concat(dcHeroes);
// console.log(heroes);


const allHeroes = [...marvelHeroes, ...dcHeroes] //spread operator
console.log(allHeroes);

const anotherArray = [1,2,3,[4,5],8,[9,5,[6,7,[6,3],6],2],4]
console.log(anotherArray);

const realAnotherArray = anotherArray.flat(Infinity)
console.log(realAnotherArray);