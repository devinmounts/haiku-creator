// function new_count(word) {
//   word = word.toLowerCase();
//   if(word.length <= 3) { return 1; }
//     word = word.replace
//
//
// }
export class Haiku{
  constructor(line1, line2, line3) {
    this.line1 = line1.replace(/[.?',/#!$%^&*;:{}=\-_`~()]/g,"").replace(/s{2,}/g," ").split(" ");
    this.line2 = line2.replace(/[.?',/#!$%^&*;:{}=\-_`~()]/g,"").replace(/s{2,}/g," ").split(" ");
    this.line3 = line3.replace(/[.?',/#!$%^&*;:{}=\-_`~()]/g,"").replace(/s{2,}/g," ").split(" ");
    this.letters = {
      y: "y",
      vowels: ["a", "e", "i", "o", "u"]
    }

    this.line1Result = 0;
    this.line2Result = 0;
    this.line3Result = 0;



  }
  countVowelsLine1() {
    for (let i = 0; i < this.line1.length; i++){
      for (let k = 0; k < this.line1[i].length; k++) {
        if(this.letters.vowels.includes(this.line1[i][k])){
          this.line1Result ++;
        }
      }
    }
  }
  countVowelsLine2() {
    for (let i = 0; i < this.line2.length; i++){
      for (let k = 0; k < this.line2[i].length; k++) {
        if(this.letters.vowels.includes(this.line2[i][k])){
          this.line2Result ++;
        }
      }
    }
  }
  countVowelsLine3() {
    for (let i = 0; i < this.line3.length; i++){
      for (let k = 0; k < this.line3[i].length; k++) {
        if(this.letters.vowels.includes(this.line3[i][k])){
          this.line3Result ++;
        }
      }
    }
  }

  }
