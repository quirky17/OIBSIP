document.addEventListener("DOMContentLoaded", function () {
  const displayOperation = document.getElementById("operation");
  const displayResult = document.getElementById("result");
  const buttons = document.querySelectorAll(".buttons button");

  let operation = "";
  let result = "";

  function updateDisplay() {
    displayOperation.textContent = operation;
    displayResult.textContent = result;
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const keyType = button.className;
      const keyValue = button.textContent;

      if (keyType.includes("number")) {
        operation += keyValue;
      }

      if (keyType.includes("operator")) {
        operation += keyValue;
      }

      if (keyType.includes("decimal")) {
        if (!operation.includes(".")) {
          operation += keyValue;
        }
      }

      if (keyType.includes("sqrt")) {
        if (parseFloat(operation) >= 0) {
          result = Math.sqrt(parseFloat(operation));
          operation = "";
        }
      }

      if (keyType.includes("equal")) {
        try {
          result = eval(operation);
          if (isNaN(result) || !isFinite(result)) {
            throw "Invalid Input";
          }
          operation = "";
        } catch (error) {
          result = "Error";
        }
      }

      if (keyType.includes("clear")) {
        operation = "";
        result = "";
      }

      if (keyType.includes("delete")) {
        operation = operation.slice(0, -1);
      }

      updateDisplay();
    });
  });
});
