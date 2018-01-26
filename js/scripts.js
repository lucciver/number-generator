// business logic
// var userInput;
var userInput;

var rangeNumbers = [];




var numAnalyze = function(number) {

  if (number % 3 === 0) {
    return "I'm afraid I can't do that Dave.";
  } else if (rangeNumbers.includes("1")){
      return "boop!";
  } else if (rangeNumbers.includes("0")){
      return "beep!";
  } else {
      return number;

  };
};

var numberCount = function(number) {

};
//user interface logic
$(document).ready(function() {
  $("#formNumberWang").submit(function(event) {
    event.preventDefault();

    var rangeNumbers = [];
    userInput = $("#number").val();

    for (var currentNumber = 0; currentNumber <= userInput; currentNumber += 1) {
    rangeNumbers.push(numAnalyze(number));
    }

    $("#resultNumber").text(rangeNumbers);
    console.log(number);








    });
  });
