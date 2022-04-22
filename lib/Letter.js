class Letter {
  constructor(char) {
    this.char = char;
    if("1234567890".includes(char) || "abcdefghijklmnopqrstuvwxyz".includes(char.toLowerCase())
    ) {
        this.visible = false;
    } else {
        this.visible = true;
    }
  }

  toString() {
    if(!this.visible) {
        return "_";
    } else {
        return this.char;
    }
  }

  guess(character) {
    if(character === this.char) {
        return true;
    } else {
        return false;
    }
  }

  getSolution() {
      return this.char;
  }
}

module.exports = Letter;
