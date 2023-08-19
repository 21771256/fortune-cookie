const express = require('express');
const child_process = require('child_process');

// Create a new Express web application
const app = express();

// Set handler for the index of the website
app.get('/', (req, res) => {
    // Adding date for ex4
    var currentDate = new Date().toLocaleString(); // Get current date and time as a string
    // Run the system `fortune` command and respond with the message
    child_process.exec('fortune', (error, message) => {
        if(error === null) {
            res.send("Your fortune is: " + message + '<br>' +currentDate);
        } else {
            res.send('Error: ' + error);
        }
    })
}); 

// Start web application server
app.listen(3000, () => {
    console.log('Server started');
});
