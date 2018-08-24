var Zerototen = {};

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
/*
  Generates a letter after HTML document has loaded.
*/

$(document).ready(function() {
  Zerototen.generateNumber();
});

Zerototen.generateNumber = function() {
  var number = Math.floor(Math.random() * 11);
  $(".number").text(numbers[number]);
};

$(".new-letter").click(function() {
  Zerototen.generateNumber();
});
