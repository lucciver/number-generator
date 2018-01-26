// business logic
// var userInput;







var numAnalyze = function(number) {
  if (number != 0 && number % 3 === 0) {
    return "I'm afraid I can't do that Dave.";
  } else if (number.toString().indexOf("1") != -1) {
      return "boop!";
  } else if (number.toString().indexOf("1") != -1) {
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

    for (var currentNumber = 0; currentNumber <= userInput; currentNumber += 1) {
      rangeNumbers += currentNumber;
    }

    var resultNumbers = numAnalyze(rangeNumbers);

    $("#resultNumber").text(resultNumbers);



    console.log(resultNumbers);














    });
  });
