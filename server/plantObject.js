const quotes = require("./plants");

let iCurrentPicture = 0;
let iCurrentQuote = 0;

const library = {
   
    getNextPicture: ()=> game.pictures[iCurrentPicture++],
    plants: plants,
    getNextQuote: ()=> game.quotes[(iCurrentQuote = (iCurrentQuote + 1) % game.quotes.length)],
    room: {
        picture: "",
        quotes: [{ text: "Start", player: "Start", chosen: true}],
        players: [],
        dealer: 0
    }
}

module.exports = game;