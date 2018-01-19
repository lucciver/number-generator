// business logic
var userInput;
var numberZero =["0"];
var numberOne = ["1"];
var divisibleBythree = false;
var numberArray = [];
var containsZero;
var containsOne;


var containsZero = userInput;
  numberZero.forEach(function(zero) {
    if (userInput === numberZero) {
      containsZero = true;
      };
    });

var containsOne = userInput;
  numberOne.forEach(function(one) {
    if (userInput === numberOne) {
      containsOne = true;
  };
});

var divisibleBythree = function(userInput) {
  if ((userInput % 3 === 0)) {
    divisibleBythree = true;
  }
}
//user interface logic
$(document).ready(function() {
  $("#formNumberwang").submit(function(event) {
    userInput = $("#number").val();
      alert (userInput);
        userInput = userInput.split("");
          alert (typeof(userInput));
            alert (userInput);

    event.preventDefault();
  });


});
