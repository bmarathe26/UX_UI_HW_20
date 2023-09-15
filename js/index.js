console.log("successfully loaded")

// Get the "Contact Me" button element
const res = document.getElementById("connectButton");

// Add a click event listener to the button
res.addEventListener("click", function () {
    // your actual email address
    const email = "bhargavi2626@gmail.com";

    // Create a mailto link with the email address
    const mailtoLink = `mailto:${email}`;

    // Open the user's default email client
    window.location.href = mailtoLink;
});

// JavaScript code to change button color on hover (Let's Connect)
const res1 = document.getElementById('connectButton');

// Add a mouseover event listener to change the background color on hover
res1.addEventListener('mouseover', function() {
    res1.style.backgroundColor = '#0E6655'; // New background color on hover
});

// Add a mouseout event listener to revert to the original background color
res1.addEventListener('mouseout', function() {
    res1.style.backgroundColor = '#566573'; // Default background color
});

// JavaScript code to change button color on hover (Resume)
const button1 = document.getElementById('Resume1');

// Add a mouseover event listener to change the background color on hover
button1.addEventListener('mouseover', function() {
button1.style.backgroundColor = '#0E6655'; // New background color on hover
});

// Add a mouseout event listener to revert to the original background color
button1.addEventListener('mouseout', function() {
    button1.style.backgroundColor = '#566573'; // Default background color
});

// JavaScript code to change button color on hover (SayHi)
const button2 = document.getElementById('sayHi1');


// Add a mouseover event listener to change the background color on hover
button2.addEventListener('mouseover', function() {
button2.style.backgroundColor = '#0E6655'; // New background color on hover
});

// Add a mouseout event listener to revert to the original background color
button2.addEventListener('mouseout', function() {
    button2.style.backgroundColor = '#566573'; // Default background color
});


// JavaScript code to change button color on hover (Read CaseStudy)
const button3 = document.getElementById('pb1');


// Add a mouseover event listener to change the background color on hover
button3.addEventListener('mouseover', function() {
button3.style.backgroundColor = '#0E6655'; // New background color on hover
});

// Add a mouseout event listener to revert to the original background color
button3.addEventListener('mouseout', function() {
    button3.style.backgroundColor = '#566573'; // Default background color
});

// JavaScript code to change button color on hover (Read CaseStudy 2 )
const button4 = document.getElementById('pb2');


// Add a mouseover event listener to change the background color on hover
button4.addEventListener('mouseover', function() {
button4.style.backgroundColor = '#0E6655'; // New background color on hover
});

// Add a mouseout event listener to revert to the original background color
button4.addEventListener('mouseout', function() {
    button4.style.backgroundColor = '#566573'; // Default background color
});


//JavaScript code to scale the image when you hower on it.
const cardImage = document.getElementById('card-image1');



// Add a mouseover event listener to change the background color on hover
cardImage.addEventListener('mouseover', function() {
    cardImage.style.transform = "scale(1.2)"; // New background color on hover
});

// Add a mouseout event listener to revert to the original background color
cardImage.addEventListener('mouseout', function() {
    cardImage.style.transform = "scale(1)"; // Default background color
});

// JavaScript code to scale the image when you hower on it.
const cardImage1 = document.getElementById('card-image2');


// Add a mouseover event listener to change the background color on hover
cardImage1.addEventListener('mouseover', function() {
    cardImage1.style.transform = "scale(1.2)"; // New background color on hover
});

// Add a mouseout event listener to revert to the original background color
cardImage1.addEventListener('mouseout', function() {
    cardImage1.style.transform = "scale(1)"; // Default background color
});

/*/ Get a reference to the image element
const image1 = document.getElementById('card-image1');

// Set the initial scale factor
let scale = 1;

// Add a scroll event listener to the window
window.addEventListener('scroll', () => {
  // Calculate the new scale factor based on the scroll position
  scale = 1 + window.scrollY * 0.001; // You can adjust the multiplier as needed
  
  // Apply the scale transformation to the image
  image1.style.transform = `scale(${scale})`;
});*/


/*/ Get a reference to the image element
const image2 = document.getElementById('card-image2');

// Set the initial scale factor
let scale1 = 1;

// Add a scroll event listener to the window
window.addEventListener('scroll', () => {
  // Calculate the new scale factor based on the scroll position
  scale1 = 1 + window.scrollY * 0.001; // You can adjust the multiplier as needed
  
  // Apply the scale transformation to the image
  image2.style.transform = `scale(${scale1})`;
});*/

