document.addEventListener('DOMContentLoaded', function() {
    var inputBox = document.getElementById('inputBox');
    var buttons = document.querySelectorAll('button');
    var operators = ['+', '-', '*', '/', '%'];
  
    buttons.forEach(function(button) {
      button.addEventListener('click', function() {
        var value = button.innerHTML;
  
        if (value === 'AC') {
          inputBox.value = '';
        } else if (value === 'DEL') {
          inputBox.value = inputBox.value.slice(0, -1);
        } else if (value === '=') {
          try {
            inputBox.value = eval(inputBox.value);
          } catch (error) {
            inputBox.value = 'Error';
          }
        } else {
          inputBox.value += value;
        }
      });
    });
  });
  