// business logic
var userInput;
var numberZero =["0"];
var numberOne = ["1"];
var divisibleBythree;
var userInputArray = [];
var containsZero = false;
var containsOne;
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
      // userInput = userInput.split("");
      alert (resultUserInput);

    if
        ((resultUserInput % 3 === 0)) {
          
        }
        $("#resultNumber").text("I'm afraid I can't do that Dave.");
      }





    event.preventDefault();
  });


});
