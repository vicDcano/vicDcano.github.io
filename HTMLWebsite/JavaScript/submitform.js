// // const formCaptcha = document.getElementById('divCaptcha');
// // const form = document.querySelector('form');

// // function onLoadCallback() 
// // {
// //     grecaptcha.render('divCaptcha', {
// //         sitekey: '6Ldj-OgrAAAAAN5Ie09f8lrlQJ6lW_1kW5mfbx42',
// //         callback: successCallback,
// //         'expired-callback': expiredCallback
// //     });
// // }

// // function successCallback(response) 
// // {
// //     document.getElementById('g-recaptcha-response').value = response;
// //     document.getElementById('submitForm').disabled = false; // Enable submit button
// // }

// // function expiredCallback() 
// // {
// //     document.getElementById('submitForm').disabled = true; // Disable submit button
// //     document.getElementById('g-recaptcha-response').value = ''; // Clear the response field
// // }

// // form.addEventListener('submit', function(e) 
// // {
// //     const recaptchaResponse = document.getElementById('g-recaptcha-response').value;
    
// //     // Check if reCAPTCHA was completed
// //     if (!recaptchaResponse || recaptchaResponse === '') {
// //         e.preventDefault(); // Prevent form submission
// //         alert("Please complete the reCAPTCHA to proceed.");
        
// //         return false;
// //     }
// // });

// // // // Alternative approach: Disable submit button initially and only enable after reCAPTCHA
// // // document.addEventListener('DOMContentLoaded', function() 
// // // {
// // //     document.getElementById('submitForm').disabled = true;
// // // });

// const form = document.getElementById('captchaForm');
// const submitButton = document.getElementById('submitForm');

// form.addEventListener('submit', function(e) 
// {

//     const hCaptcha = form.querySelector('textarea[name=h-captcha-response]').value;

//     if (!hCaptcha) {
//         e.preventDefault();
//         alert("Please fill out captcha field")
//         return
//     }
// });

// function successCallback(response) 
// {
//     document.getElementById('captchaForm').value = response;
//     document.getElementById('submitForm').disabled = false; // Enable submit button
// }
const form = document.getElementById('captchaForm');
const submitButton = document.getElementById('submitForm');

// 1. Disable submit button initially when the page loads
document.addEventListener('DOMContentLoaded', function() {
    submitButton.disabled = true;
});

// 2. Attach to 'window' so the hCaptcha widget can find it globally
window.onCaptchaSuccess = function(response) {
    console.log("hCaptcha solved successfully!"); // Helpful for debugging
    submitButton.disabled = false; 
};

// 3. Attach to 'window' to disable the button if the user takes too long
window.onCaptchaExpired = function() {
    console.log("hCaptcha token expired.");
    submitButton.disabled = true; 
};

// 4. Final safety check when the user clicks "Submit"
form.addEventListener('submit', function(e) {
    // Look for the hidden textarea hCaptcha creates
    const hCaptchaResponse = form.querySelector('textarea[name=h-captcha-response]');
    
    // If the token is missing or empty, stop the submission
    if (!hCaptchaResponse || !hCaptchaResponse.value) {
        e.preventDefault();
        alert("Please complete the hCaptcha to proceed.");
        return false;
    }
});