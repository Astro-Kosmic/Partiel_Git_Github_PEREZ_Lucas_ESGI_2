// Get the display element where values will be shown
const display = document.getElementById("display");

// Select all calculator buttons
const buttons = document.querySelectorAll("button");

// Temporary minimal logic for testing button interactions
// Each button click is detected and logged in the console
buttons.forEach(button => {
    button.addEventListener("click", () => {

        // Retrieve the text content of the clicked button
        const value = button.textContent;

        // Log the clicked button value (debug purpose)
        console.log("Button clicked:", value);
    });
});

