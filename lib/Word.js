const Letter = require("./Letter");

class Word {
  constructor(str) {
      this.letters = [];
    for (let i = 0; i < str.length; i++) {
        this.letters.push(new Letter(str[i]));
    }
  }
}

module.exports = Word;
