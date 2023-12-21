function validateEmail() {
    // Get the email input value
    var emailInput = document.getElementById('emailInput').value;

    // Validate the email format using a simple regex
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var isValidEmail = emailRegex.test(emailInput);

    // Show or hide the error message based on the validation result
    var invalidMessage = document.getElementById('invalid');
    invalidMessage.style.display = isValidEmail ? 'none' : 'block';

    if (isValidEmail) {
      // Assuming email is valid, hide the first div and show the second div
      document.getElementById('wrapper').style.display = 'none';
      document.getElementById('submit').style.display = 'flex';
    }
  }

  function dismissEmail() {
    // Hide the second div and show the first div
    document.getElementById('wrapper').style.display = 'flex';
    document.getElementById('submit').style.display = 'none';
  }