// business logic
// var userInput;

var numberArray = [];




var numAnalyze = function(number) {
  if (number % 3 === 0) {
    return "I'm afraid I can't do that Dave.";
  } else if (number === "1") {
      return "boop!";
  } else if (number === "0") {
      return "beep!";
  } else {
      return number;

  }
}

var numberCount = function(number) {

};
//user interface logic
$(document).ready(function() {
  $("#formNumberWang").submit(function(event) {
    event.preventDefault();

    userInput = $("#number").val();

    var rangeNumbers = [];

    for (var startNumber = 0; startNumber <= userInput; startNumber += 1) {
      // rangeNumbers += startNumber;
      rangeNumbers.push(numAnalyze(startNumber));
    }

    // var numberArray = rangeNumbers.split( "");
    //
    // console.log(numberArray);

console.log(rangeNumbers);





$("#resultNumber").text(rangeNumbers);






















    });
  });
