class Letter {
  constructor(char) {
    this.char = char;
    if("1234567890".includes(char) || "abcdefghijklmnopqrstuvwxyzé".includes(char.toLowerCase())
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
    if(character === this.char.toLowerCase()) {
        this.visible = true;
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
