function submitVin() {
    // Retrieve VIN input element
    var vinInput = document.getElementById("vinInput");
    
    // Attach an event listener to submit button
    var vin = vinInput.value.trim();
      
      $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/vinlookup?vin=' + vin,
        headers: { 'X-Api-Key': 'IwFKMaGVtaSUQ+XmewVrvA==tSMCY5AL6jlpqeOl'},
        contentType: 'application/json',
        success: function(result) {
          console.log(result)
          // Handle success response here
        },
        error: function ajaxError(jqXHR) {
          console.error('Error: ', jqXHR.responseText);
          // Handle error response here
        }
      });
    }

  