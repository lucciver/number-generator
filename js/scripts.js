// business logic
// var userInput;
var userInput;
var rangeNumbers= [];

alert(rangeNumbers);




var numAnalyze = function(number) {
  var numberArray = userInput.split("");
  if (number % 3 === 0) {
    return "I'm afraid I can't do that Dave.";
  } else if (numberArray.includes("1")){
      return "boop!";
  } else if (numberArray.includes("0")){
      return "beep!";
  } else {
      return number;
      console.log(userInput);
  };
};

var numberCount = function(number) {

};
//user interface logic
$(document).ready(function() {
  $("#formNumberWang").submit(function(event) {
    event.preventDefault();
    userInput = $("#number").val();

    var rangeNumbers= userInput;
    for (var currentNumber = 0; currentNumber <= userInput; currentNumber += 1) {

      rangeNumbers += currentNumber;
    }
      console.log(userInput)
      console.log(rangeNumbers);


    });
  });
