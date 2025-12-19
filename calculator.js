// Get the display element where values will be shown
const display = document.getElementById("display");

// Select all calculator buttons
const buttons = document.querySelectorAll("button");

// Store the first number entered by the user
let firstValue = null;

// Flag to indicate if the addition operator is active
let isAddition = false;
let isSubtraction = false;

// Handle calculator button interactions

buttons.forEach(button => {
    button.addEventListener("click", () => {

        // Retrieve the text content of the clicked button
        const value = button.textContent;

        // If the button is a number, append it to the display
        if (!isNaN(value)) {
            display.value += value;
        }

        // If the "+" button is clicked, store the first value
        else if (value === "+") {
            firstValue = parseFloat(display.value);
            isAddition = true;
            display.value = "";
        }

        // If the "-" button is clicked, prepare subtraction
        else if (value === "-") {
            firstValue = parseFloat(display.value);
            isSubtraction = true;
            isAddition = false;
            display.value = "";
        }

        // If "=" is clicked, perform the selected operation
        else if (value === "=") {
            const secondValue = parseFloat(display.value);
            let result = null;

            if (isAddition) {
                result = firstValue + secondValue;
            } else if (isSubtraction) {
                result = firstValue - secondValue;
            }

            if (result !== null) {
                display.value = result;
            }

            // Reset values after calculation
            firstValue = null;
            isAddition = false;
            isSubtraction = false;
        }

        // Clear the display and reset all stored values
        else if (value === "C") {
            display.value = "";
            firstValue = null;
            isAddition = false;
            isSubtraction = false;
        }
    });
});

