// business logic
var userInput;
var numberZero =["0"];
var numberOne = ["1"];
var divisibleBythree;
var userInputArray = [];
var containsZero;
var containsOne;
var resultUserInput;
var displayRange;

//user interface logic
$(document).ready(function() {
  $("#formNumberWang").submit(function(event) {
    userInput = $("#number").val();
      resultUserInput = userInput;
        alert (resultUserInput);

  var divisibleByThree = (resultUserInput % 3 === 0);
    if (divisibleByThree === true) {
      $("#resultNumber").text("I'm afraid I can't do that Dave.");
    } else {
      resultUserInput = resultUserInput.split("");
    };
  var containsOne = resultUserInput;
    numberOne.forEach(function(one) {
      if (resultUserInput.includes(one)) {
          $("#resultNumber").text("beep!");
    } else {
      containsOne = false;
      };
    });
  event.preventDefault();
  });
});
