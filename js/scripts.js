// business logic
var userInput;
var numberZero =["0"];
var numberOne = ["1"];
var divisibleBythree;
var userInputArray = [];
var containsZero = false;
var containsOne = false;
var resultUserInput;



var containsOne = userInput;
  numberOne.forEach(function(one) {
    if (userInput === numberOne) {
      containsOne = true;
  };
});



var zeroBeep = userInput;

//user interface logic
$(document).ready(function() {
  $("#formNumberwang").submit(function(event) {
    userInput = $("#number").val();
      resultUserInput = userInput;
        alert (resultUserInput);

  var divisibleByThree = (resultUserInput % 3 === 0);
    if (divisibleByThree === true) {
      $("#resultNumber").text("I'm afraid I can't do that Dave.");
  } else {
      resultUserInput = resultUserInput.split("");
        alert (typeof(resultUserInput));
  };
    var containsOne = resultUserInput;
      numberOne.forEach(function(one) {
        if (userInput.includes(one)) {
          $("#resultNumber").text("Beep!");
        };
      });




    event.preventDefault();
  });


});
