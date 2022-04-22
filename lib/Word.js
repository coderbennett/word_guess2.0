const Letter = require("./Letter");

class Word {
  constructor(str) {
      this.letters = [];
    for (let i = 0; i < str.length; i++) {
        this.letters.push(new Letter(str[i]));
    }
  }

  guessLetter(char) {
    let boo = false;
    for(let i = 0; i < this.letters.length; i++) {
      if(this.letters[i].guess(char)) {
        boo = true;
      }
    }
    return boo;
  }

  guessedCorrectly() {
    for(let i = 0; i < this.letters.length; i++) {
      if(!this.letters[i].visible) {
        return false;
      }
    }
    return true;
  }

  toString() {
    var str = "";
    for(let i = 0; i < this.letters.length; i++) {
      str += this.letters[i].toString();
    }
    return str;
  }

  getSolution() {
    var str = "";
    for(let i = 0; i < this.letters.length; i++) {
      str += this.letters[i].getSolution();
    }
    return str;
  }
}

module.exports = Word;
