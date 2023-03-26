function validateColorInput(input) {
    // Remove all non-letter characters
    let sanitized = input.value.replace(/[^a-zA-Z ]/g, '');
    // Limit input to two words
    let words = sanitized.trim().split(/\s+/);
    sanitized = words.slice(0, 2).join(' ');
    // Update input value with sanitized input
    input.value = sanitized;
}
  
  function validateCountryInput(input) {
    // Remove all non-letter characters
    let sanitized = input.value.replace(/[^a-zA-Z ]/g, '');
    // Limit input to two words
    let words = sanitized.trim().split(/\s+/);
    sanitized = words.slice(0, 2).join(' ');
    // Update input value with sanitized input
    input.value = sanitized;
  }
  
  function carRegister() {
    // Sanitize input
    let colorInput = document.getElementById('color');
    let sanitizedColor = colorInput.value.replace(/[^a-zA-Z ]/g, '');
    let colorWords = sanitizedColor.trim().split(/\s+/);
    sanitizedColor = colorWords.slice(0, 2).join(' ');
    colorInput.value = sanitizedColor;
    
    let countryInput = document.getElementById('countryOfManufacture');
    let sanitizedCountry = countryInput.value.replace(/[^a-zA-Z ]/g, '');
    let countryWords = sanitizedCountry.trim().split(/\s+/);
    sanitizedCountry = countryWords.slice(0, 2).join(' ');
    countryInput.value = sanitizedCountry;
    
    // Submit form
    document.forms[0].submit();
  }