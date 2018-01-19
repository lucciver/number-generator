// business logic
var userInput;
var numberZero;
var numberOne;
var divisibleByThree;



//user interface logic
$(document).ready(function() {
  $("#formNumberwang").submit(function(event) {
    var userInput = $("#formNumberwang").val();
    var userInput = userInput.split();
    alert (typeof(userInput));
    event.preventDefault();
  
  });
});
