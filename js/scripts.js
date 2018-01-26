// business logic
var rangeNumbers = [];

var numAnalyze = function(number) {
  if (number != 0 && number % 3 === 0) {
    return "I'm afraid I can't do that Dave";
  } else if (number === 1 || number.toString().includes(1) === true) {
      return "boop!";
  } else if (number === 0 || number.toString().includes(0) === true) {
      return "beep!";
  } else {
      return number;

  }
}

//user interface logic
$(document).ready(function() {
  $("#formNumberWang").submit(function(event) {
    event.preventDefault();

    userInput = $("#number").val();

    for (var startNumber = 0; startNumber <= userInput; startNumber += 1) {

      rangeNumbers.push(numAnalyze(startNumber));
    }

    $("#resultNumber").text(rangeNumbers);






















    });
  });
