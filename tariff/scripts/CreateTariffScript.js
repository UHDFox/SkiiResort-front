import config from '../../config.js';

async function CreateTariffAsync() {
  var form = document.getElementById('createTariffForm');
  var formData = new FormData(form);

  var checkbox = document.getElementById("isVipTariffCheckbox");
  var isVipCheck = checkbox.checked;
  var jsonData = {};
  formData.forEach((value, key) => {
    jsonData[key] = value;
  });
  jsonData["isVip"] = isVipCheck;

  await fetch(`${config.apiUrl}/Tariff`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(jsonData)
  })
  .then(response => {
      const responseElement = document.getElementById('tariffCreateResponse');
      responseElement.style.display = 'inline';
      // Check for status code 201
      if (response.status === 201) {
          responseElement.innerText = "added successfully";
      } else {
          return response.json().then(data => {
              responseElement.innerText = 'Unexpected status: ' + data.message;
          });
      }
  })
  .catch(error => {
      var responseElement = document.getElementById('tariffCreateResponse');
      responseElement.style.display = 'inline';
      responseElement.innerText = "bad request. Please, check if you have entered the data correctly";
  });
}

window.CreateTariffAsync = CreateTariffAsync;
