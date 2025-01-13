// script.js
document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".btn");
  
    let currentInput = "";
    let operator = null;
    let previousInput = "";
  
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const value = button.getAttribute("data-value");
  
        if (value === "C") {
          // Clear display
          currentInput = "";
          previousInput = "";
          operator = null;
          display.value = "";
        } else if (value === "=") {
          // Calculate result
          if (currentInput && operator && previousInput) {
            const result = eval(`${previousInput} ${operator} ${currentInput}`);
            display.value = result;
            currentInput = result.toString();
            previousInput = "";
            operator = null;
          }
        } else if (["+", "-", "*", "/"].includes(value)) {
          // Handle operators
          if (currentInput) {
            operator = value;
            previousInput = currentInput;
            currentInput = "";
          }
        } else {
          // Handle numbers and dot
          currentInput += value;
          display.value = currentInput;
        }
      });
    });
  });
  