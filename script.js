// Function to generate a random color in hexadecimal format
const randomColor = () => {
    const hex = "0123456789ABCDEF"; // Valid hexadecimal digits
    let color = '#'; // Initialize color string with '#'
    // Loop to generate a 6-digit hexadecimal number
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color; // Return the generated color
};

let intervalId; // Variable to store the interval ID

// Arrow function for changing the background color
const changeBgColor = () => {
    document.body.style.backgroundColor = randomColor(); // Change the body's background color to a random color
};

// Function to start the color changing interval
const startColorChanging = () => {
    if (intervalId == null) { // Check if intervalId is undefined or null
        intervalId = setInterval(changeBgColor, 1000); // Change color every second (1000 milliseconds)
    }
};

// Function to stop the color changing interval
const stopColorChanging = () => {
    clearInterval(intervalId); // Clear the interval to stop changing colors
    intervalId = null; // Reset the intervalId to ensure it can be started again
    document.body.style.backgroundColor = 'white'; // Reset background color to white
};

// Add event listener to the 'Start' button to start changing colors
document.querySelector('#start').addEventListener('click', startColorChanging);
// Add event listener to the 'Stop' button to stop changing colors
document.querySelector('#stop').addEventListener('click', stopColorChanging);

