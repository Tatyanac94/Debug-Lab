// Question 3: Why does the counter start at NaN?
//Because the counter value is not a number.
let count = 0;

const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');

// Question 4: What happens to the counter value in the HTML when increment is clicked?
// The counter value increases by 1.
incrementButton.addEventListener('click', function() {
    debugger
    count++;
    document.getElementById('counter-value').innerText = count;
});

// Question 5: Why does the decrement button not work?
// The decrement button is not working because the count variable is not a number.
decrementButton.addEventListener('click', function() {
    count--;
    document.getElementById('counter-value').innerText = count;
});

// Question 6: Why does the reset function set the count to '0' as a string?
// The reset function sets the count to '0' as a string the count variable is a string.
resetButton.addEventListener('click', function() {
    count = '0';
    document.getElementById('counter-value').innerText = count;
});

// Question 7: How can you monitor the value of count using breakpoints?
// You can monitor the value of count using breakpoints by clicking on the "Debug" button in the debugger pane.

// Question 8: What is the scope of the count variable in DevTools?
// The scope of the count variable is the global scope.

// Question 9: Use the Network tab to find out: Is the app.js file loaded successfully?
// The app.js file is loaded successfully.

// Question 10: Use the Console to track errors. Are there any errors being thrown?
// There are no errors being thrown.
