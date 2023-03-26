function sanitizeInput(input) {
    // remove any non-letter or space characters
    return input.replace(/[^a-zA-Z ]/g, '');
  }
  
  function validateColorInput(input) {
    const colorRegex = /^[a-zA-Z ]{1,20}$/; // allow 1-20 letters or spaces
    const sanitizedInput = sanitizeInput(input.value);
    input.value = sanitizedInput;
    const validationMsg = document.getElementById("colorValidationMsg");
    if (colorRegex.test(sanitizedInput)) {
      validationMsg.style.display = "none";
    } else {
      validationMsg.style.display = "block";
    }
  }
  
  function validateCountryInput(input) {
    const countryRegex = /^[a-zA-Z ]{1,20}$/; // allow 1-20 letters or spaces
    const sanitizedInput = sanitizeInput(input.value);
    input.value = sanitizedInput;
    const validationMsg = document.getElementById("countryValidationMsg");
    if (countryRegex.test(sanitizedInput)) {
      validationMsg.style.display = "none";
    } else {
      validationMsg.style.display = "block";
    }
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