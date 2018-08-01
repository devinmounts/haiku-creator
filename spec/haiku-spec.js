import { Haiku } from './../src/haiku.js';

describe('Haiku', function() {
  var reusableHaiku;

  beforeEach(function() {
    reusableHaiku = new Haiku("recipe fresh green grass talks", "it says hello and good day", "I smile and walk on");
  });

  it('should test whether a haiku has three lines', function(){
    expect(reusableHaiku.line1).toEqual(["recipe", "fresh", "green", "grass", "talks"]);
    expect(reusableHaiku.line2).toEqual(["it", "says", "hello", "and", "good", "day"]);
    expect(reusableHaiku.line3).toEqual(["i", "smile", "and", "walk", "on"]);
  });

  it('should test countVowelsLine1() method returns number of vowels', function() {
    reusableHaiku.countVowelsLine1();
    expect(reusableHaiku.line1Result).toEqual(8);
  });
  it('should test countVowelsLine2() method returns number of vowels', function() {
    reusableHaiku.countVowelsLine2();
    expect(reusableHaiku.line2Result).toEqual(8);
  });

  it('should test countVowelsLine3() method returns number of vowels', function() {
    reusableHaiku.countVowelsLine3();
    expect(reusableHaiku.line3Result).toEqual(5);
  });
});
