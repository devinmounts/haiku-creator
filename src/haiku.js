// function new_count(word) {
//   word = word.toLowerCase();
//   if(word.length <= 3) { return 1; }
//     word = word.replace
//
//
// }
export class Haiku{
  constructor(line1, line2, line3) {
    this.line1 = line1.split(" ");
    this.line1Vowels = 0;
    this.line2 = line2.split(" ");
    this.line2Vowels = 0;
    this.line3 = line3.split(" ");
    this.line3Vowels = 0;
    this.syllables = 0;
  }

    constructor(line1) {
      this.line1 = line1.split(" ");
      this.syllables = 0;
    }
  }

  countVowels() {
    this.line1.forEach(function(word){
      if(word.length <= 2) { return 1; }
    word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
    word = word.replace(/^y/, '');
    this.syllables += word.match(/[aeiouy]{1,2}/g).length;
    });
    return this.syllables

  }
}
