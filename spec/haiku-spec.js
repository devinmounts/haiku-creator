import { Haiku } from './../src/haiku.js';

describe('Haiku', function() {
  var reusableHaiku;

  beforeEach(function() {
    reusableHaiku = new Haiku("the fresh green grass talks", "it says hello and good day", "I smile and walk on");
  });

  it('should test whether a haiku has three lines', function(){
    expect(reusableHaiku.line1).toEqual(["the", "fresh", "green", "grass", "talks"]);
    expect(reusableHaiku.line2).toEqual(["it", "says", "hello", "and", "good", "day"]);
    expect(reusableHaiku.line3).toEqual(["I", "smile", "and", "walk", "on"]);
  });

  it('should test countVowels() method returns number of vowels', function() {
    newHaiku = new Haiku("the three of us");
    expect(newHaiku.countVowels()).toEqual(4);
  });
});
