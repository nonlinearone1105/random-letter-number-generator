var Mixedcase = {};

var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

/*
  Generates a letter after HTML document has loaded.
*/

$(document).ready(function() {
  Mixedcase.generateLetter();
});

Mixedcase.generateLetter = function() {
  $(".upper-letter").text("");
  $(".lower-letter").text("");
  var number = Math.floor(Math.random() * 52);
  if(number < 26) {
    $(".upper-letter").text(letters[number]);
  }
  else {
    $(".lower-letter").text(letters[number]);
  }
};

$(".new-letter").click(function() {
  Mixedcase.generateLetter();
});
