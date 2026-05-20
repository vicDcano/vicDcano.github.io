const form = document.getElementById('captchaForm');
const submitButton = document.getElementById('submitForm');

// Disable submit button when the page loads
document.addEventListener('DOMContentLoaded', function() {
    submitButton.disabled = true;
});

// Attach to 'window' so the hCaptcha widget can find it globally
window.onCaptchaSuccess = function(response) {
    console.log("hCaptcha solved successfully!"); // Helpful for debugging
    submitButton.disabled = false; 
};

// Attach to 'window' to disable the button if the user takes too long
window.onCaptchaExpired = function() {
    console.log("hCaptcha token expired.");
    submitButton.disabled = true; 
};

// Final safety check when the user clicks "Submit"
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