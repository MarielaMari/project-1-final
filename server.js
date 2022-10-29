import express from 'express';
import {welcomeMessage} from './1welcomeMessage.js';
import {gameRules} from './2gameRules.js';

const welcome = welcomeMessage ();
const rules = gameRules ();

const app = express ();
const PORT = 8888;

//still need ot figure out if possible to import a function to server/ Postman

//---------------WELCOME MESSAGE----------------
app.get ('/welcome', (request, response) => {
  response.send ('Welcome to "Guess the One Word Movie Title"');
});

//---------------GAME RULES---------------------
app.get ('/rules', (request, response) => {
  response.send (`GAME RULES:
  1. One word movie titles are used`);
});

app.listen (PORT, () => {
  console.log (`Server listening on port: ${PORT}`);
});
