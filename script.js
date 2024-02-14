//your JS code here. If required.
// script.js
async function submitForm() {
    // Retrieve user input values
    const textInput = document.getElementById("text").value;
    const delayInput = parseInt(document.getElementById("delay").value);

    // Validate input
    if (!textInput || isNaN(delayInput) || delayInput < 0) {
        alert("Please enter valid values.");
        return;
    }

    // Clear output
    document.getElementById("output").innerText = "";

    try {
        // Introduce delay using async/await
        await new Promise(resolve => setTimeout(resolve, delayInput));

        // Display user-provided text after the delay
        document.getElementById("output").innerText = textInput;
    } catch (error) {
        console.error("Error:", error);
    }
}
