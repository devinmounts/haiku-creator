export class Haiku{
  constructor(line1, line2, line3) {
    this.line1 = line1.replace(/[.?',/#!$%^&*;:{}=\-_`~()]/g,"").toLowerCase().split(" ");
    this.line2 = line2.replace(/[.?',/#!$%^&*;:{}=\-_`~()]/g,"").toLowerCase().split(" ");
    this.line3 = line3.replace(/[.?',/#!$%^&*;:{}=\-_`~()]/g,"").toLowerCase().split(" ");
    this.letters = {
      y: "y",
      vowels: ["a", "e", "i", "o", "u"],
      exceptions: ["recipe", "catastrophe", "resume", "toupee", "puree", "recipe", "catastrophe", "apostrophe", "acme", "acne", "ante", "boise", "maybe", "possee", "adobe", "apache", "karate", "peyote", "reveille", "sesame", "shoshone", "syncope", "vigilante", "hyperbole", "coyote"],
      diphthongs: ["ee", "ai", "ay", "ea", "ie", "ei", "oo", "ou", "oe", "ue", "ey", "ay", "oy", "oi", "au"]
    }
    this.lineResult = 0;
  }

  syll

  vowelsCounter(line) {
    for (let i = 0; i < line.length; i++){
      for (let k = 0; k < line[i].length; k++) {
        if(this.letters.vowels.includes(line[i][k])){
          this.lineResult++;
        }
      }
    }
  }

  endswithE(line){
    for (let i = 0; i < line.length; i++) {
      if ((line[i].endsWith("e") && line[i].length > 3) && (!this.letters.exceptions.includes(line[i]))) {
        this.lineResult -= 1;
      }
    }
  }

  phthongCheck(line){
    for ( let i = 0; i < line.length; i++) {
      if(line[i].length > 3){
        let k=0;
        while(k < line[i].length){
          if ((this.letters.vowels.includes(line[i][k])) && (this.letters.vowels.includes(line[i][k+1])) && (this.letters.vowels.includes(line[i][k+2]))) {
            this.lineResult--;
            k+=2;
          } else if ((this.letters.vowels.includes(line[i][k])) && (this.letters.vowels.includes(line[i][k+1]))){
            this.lineResult--;
            k+=1;
          }
          else {
            k+=1;
          }
        }
      }
    }
  }

  containsY(line) {
    for ( let i = 0; i < line.length; i++) {
      let k=0;
      while(k < line[i].length){
        if ((this.letters.y.includes(line[i][k])) && (line[i][k] !== line[i][k === 0]) && (line[i][k] !== line[i][line[i].length-1])) {
          this.lineResult++;
          k+=1;
        } else {
          k+=1;
        }
      }
    }
  }

  endsWithY(line) {
    for (let i = 0; i < line.length; i++){
      for (let k = 0; k < line[i].length; k++) {
        if((line[i].endsWith("y")) && (this.letters.vowels.includes(line[i][k-1]))){
          this.lineResult++;
        }
      }
    }
  }

}
