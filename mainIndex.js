//START GAME

import {welcomeMessage} from './1welcomeMessage.js';
welcomeMessage ();
console.log ();

import {gameRules} from './2gameRules.js';
gameRules ();
console.log ();

import rl from 'readline-sync';
const player = rl.question ('What is your name? ');
console.log ();

console.log (`Hello ${player}! Have fun.`);
console.log ();
//------------------------------------------------------

//------------movies nested objects in an array --------------------------------

let movies = [
  {
    id: '1',
    title: 'speed',
    genre: 'Action, Adventure, Crime',
    year: '1994',
    director: 'Jan De Bont',
    stars: 'Sandra Bullock, Keanu Reeves',
    soundtrack: '',
    quote: '',
    didYouKnow: '',
  },
  {
    id: '2',
    title: 'twilight',
    genre: 'Drama, Fantasy, Romance',
    year: '2008',
    director: 'Catherine Hardwicke',
    stars: 'Kristen Sewart, Robert Pattinson',
    soundtrack: '',
    quote: '',
    didYouKnow: '',
  },
  {
    id: '3',
    title: 'scarface',
    genre: 'Crime, Drama',
    year: '1983',
    director: 'Brian De Palma',
    stars: 'Al Pacino, Michelle Pfeiffer',
    soundtrack: '',
    quote: '',
    didYouKnow: '',
  },
  {
    id: '4',
    title: 'frozen',
    genre: 'Animation, Adventure, Comedy',
    year: '2013',
    director: 'Chris Buck, Jennifer Lee',
    stars: 'Kristen Bell (voice), Ididna Menzel (voice)',
    soundtrack: '',
    quote: '',
    didYouKnow: '',
  },
  {
    id: '5',
    title: 'titanic',
    genre: 'Drama, Romance',
    year: '1997',
    director: 'James Cameron',
    stars: 'Kate Winslet, Leonardo DiCaprio',
    soundtrack: '',
    quote: '',
    didYouKnow: '',
  },
  {
    id: '6',
    title: 'salt',
    genre: 'Action, Thriller',
    year: '2010',
    director: 'Phillip Noyce',
    stars: 'Angelina Jolie',
    soundtrack: '',
    quote: '',
    didYouKnow: '',
  },
];

function getRandomMovie () {
  const length = movies.length;
  const randomIndex = Math.floor (Math.random () * length);
  return randomIndex;
}

getHint ();
//------------from files 4getHint--------------------------------

function getHint () {
  const randomIndex = getRandomMovie ();
  const hint = movies[randomIndex];
  console.log (`Here is the hint:
          Genre: ${hint.genre}
          Year: ${hint.year}
          Director: ${hint.director}
          Stars: ${hint.stars}`);

  console.log ();
  const playersGuess = rl.question ('Enter your guess: ');

  if (playersGuess === hint.title) {
    console.log ('Good job!');

    console.log ();
    const playersNewExit = rl.question ('Would you like to play again? y/n: ');
    console.log ();

    if (playersNewExit === 'y') {
      getHint ();
    } else {
      console.log (`Thank you for playing! Good buy ${player}`);
    }
  } else {
    console.log ();
    console.log (`Sorry, wrong answer. The correct answer is "${hint.title}"`);

    console.log ();
    const playersNewExit = rl.question ('Would you like to play again? y/n: ');
    console.log ();

    if (playersNewExit === 'y') {
      getHint ();
    } else {
      console.log (`Thank you for playing! Good buy ${player}`);
    }
  }
}

//END OF GAME
