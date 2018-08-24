var Lowercase = {};

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

/*
  Generates a letter after HTML document has loaded.
*/

$(document).ready(function() {
  Lowercase.generateLetter();
});

Lowercase.generateLetter = function() {
  var number = Math.floor(Math.random() * 26);
  $(".lower-letter").text(letters[number]);
};

$(".new-letter").click(function() {
  Lowercase.generateLetter();
});
