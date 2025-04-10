// Getting all required elements:

const startButton = document.getElementById('startButton');
// startButton: The button the user clicks to start the countdown

const timeValue = document.getElementById('timeValue');
// timeValue: The input field where the user enters the time value

const timeUnit = document.getElementById('timeUnit');
// timeUnit: The <select> element where the user chooses between "seconds" or "minutes"

const countdownDisplay = document.getElementById('countdown');
// countdownDisplay: The <p> element that will display the countdown in MM:SS format

// Link: https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById

// Function to start the countdown
function startCountdown() {
    // Get user input: time and selected unit (seconds or minutes)
    let time = parseInt(timeValue.value);
    // Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt

    const unit = timeUnit.value;

    // Convert time to seconds if minutes are selected
    if (unit === 'minutes') {
        time *= 60; // Convert minutes to seconds
    }

    // Display initial time in MM:SS format
    countdownDisplay.textContent = formatTime(time);
    // Link: https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent

    // Start the countdown
    // using setInterval(), which updates every second:
    // Link: https://developer.mozilla.org/en-US/docs/Web/API/Window/setInterval
    const countdownInterval = setInterval(() => {
        /* 
        The countdown stops when the time reaches zero, 
        and an alert is shown to notify us that the time is up!
        */
        if (time > 0) {
            time--; // Decrease time by 1 second
            countdownDisplay.textContent = formatTime(time); // Update display
        } else {
            clearInterval(countdownInterval); // Stop the countdown when time reaches 0
            alert('Time is up!'); // Notify the user
        }
    }, 1000); // Update every second
}

// Function to format time in MM:SS format
// This function converts the total seconds into a MM:SS format
function formatTime(seconds) {
    // Calculate minutes and seconds
    let minutes = Math.floor(seconds / 60);
    /* 
    The minutes are calculated by dividing the total seconds by 60 
    Notice we are using Math.floor to round down

    Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
    */
    let remainingSeconds = seconds % 60;
    // The remainingSeconds are the remainder when seconds is divided by 60
    // Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder

    // Return formatted time with zero-padding if necessary
    if (minutes < 10) {
        minutes = '0' + minutes; // Add leading zero for minutes if less than 10
    }
    if (remainingSeconds < 10) {
        remainingSeconds = '0' + remainingSeconds; // Add leading zero for seconds if less than 10
    }
    /* 
    If the "minutes" or "remainingSeconds" are less than 10, 
    we manually add a leading "0" to ensure the format stays as MM:SS
    */

    // returning the formatted time as MM:SS
    return minutes + ':' + remainingSeconds; // Return formatted string in MM:SS
    /* 
    Examples:
    - 65 seconds => will display as 01:05
    - 10 seconds => will display as 00:10
    - 5 seconds => will display as 00:05
    */
}

// Event listener for the "Start" button
// passing our function "startCountdown()" as CallBack:
startButton.addEventListener('click', startCountdown);
// Link: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
