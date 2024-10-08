import config from '../../config.js';

async function TapSkipassAsync() {
  const form = document.getElementById('tapSkipassRequest');
  const formData = new FormData(form);
  
  const jsonData = Object.fromEntries(formData.entries());
  const responseElement = document.getElementById('tapSkipassResponse');
  responseElement.style.display = 'inline';

  try {
      const response = await fetch(`${config.apiUrl}/VisitorActions/tapSkipass`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(jsonData)
      });

      const responseData = await response.json();

      if (response.ok) {
          responseElement.innerText = (response.status === 201) 
              ? "Transaction finished successfully" 
              : `Unexpected response: ${responseData.message}`;
      } else {
          handleErrorResponse(response.status, responseData.message, responseElement);
      }
  } catch (error) {
      responseElement.innerText = 'Unexpected error occurred. Please try again.';
  }
}

function handleErrorResponse(status, message, responseElement) {
  let errorMessage = 'Unexpected error.';

  if (status === 400) { // Bad Request
      errorMessage = "Bad request. Please check your input.";
  } else if (status === 500) { // Internal Server Error
      if (message.includes('inactive')) {
          errorMessage = "Your skipass is inactive. Please, contact administrators.";
      } else if (message.includes('tariff')) {
          errorMessage = "Couldn't find the tariff related to the current skipass.";
      } else if (message.includes('location')) {
          errorMessage = "Couldn't find location-related pricing for the current tariff.";
      } else if (message.includes('tariffication')) {
          errorMessage = "Couldn't find tariffication related to this tariff and location.";
      } else if (message.includes('Not enough balance')) {
          errorMessage = "Not enough balance on your skipass.";
      }
  }

  responseElement.innerText = errorMessage;
}

window.TapSkipassAsync = TapSkipassAsync;