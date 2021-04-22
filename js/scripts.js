function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
};

function divide(number1, number2) {
  return number1 / number2;
};

function test() {
  alert("test");
}

$(document).ready(function() {
  $("form#calculate").submit(function(event) {
      event.preventDefault();
      const number1 = parseInt($("#calculate1").val());
      const number2 = parseInt($("#calculate2").val());
      let operation = $("#operation").val();

      console.log(operation);

      if (operation == 'addition') {
          const result = add(number1, number2);
          if (isNaN(result)) {
              alert("Please put the appropriate numbers in.")
          } else {
              $("#output").text(result);
          }
      }
      if (operation == 'subtraction') {
          const result = subtract(number1, number2);
          if (isNaN(result)) {
              alert("Please put the appropriate numbers in you lazy bum.")
          } else {
              $("#output").text(result);
          }
      }
      if (operation == 'multiplication') {
          const result = multiply(number1, number2);
          if (isNaN(result)) {
              alert("Please put the appropriate numbers in you lazy bum.")
          } else {
              $("#output").text(result);
          }
      }
      if (operation == 'division') {
          const result = divide(number1, number2);
          if (isNaN(result)) {
              alert("Please put the appropriate numbers in you lazy bum.")
          } else {
              $("#output").text(result);
          }

      }
      // $("#output").text(result);
  });
});