var Uppercase = {};

var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

/*
  Generates a letter after HTML document has loaded.
*/

$(document).ready(function() {
  Uppercase.generateLetter();
});

Uppercase.generateLetter = function() {
  var number = Math.floor(Math.random() * 26);
  $(".upper-letter").text(letters[number]);
};

$(".new-letter").click(function() {
  Uppercase.generateLetter();
});
