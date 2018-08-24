var Zerototwenty = {};

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];
/*
  Generates a letter after HTML document has loaded.
*/

$(document).ready(function() {
  Zerototwenty.generateNumber();
});

Zerototwenty.generateNumber = function() {
  var number = Math.floor(Math.random() * 21);
  $(".number").text(numbers[number]);
};

$(".new-letter").click(function() {
  Zerototwenty.generateNumber();
});
