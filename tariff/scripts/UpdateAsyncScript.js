import config from '../../config.js';

async function UpdateTariffAsync()
{
  var form = document.getElementById('updateTariffForm');
  var formData = new FormData(form);

  var checkbox = document.getElementById("isVipTariffCheckbox");
  var isVipCheck = checkbox.checked;
  var jsonData = {};
  formData.append("id", document.getElementById("tariffId").value);
  formData.forEach((value, key) => {
    jsonData[key] = value;
  });
  jsonData["isVip"] = isVipCheck;

 await fetch(`${config.apiUrl}/Tariff`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(jsonData)
  })
  .then(response => 
    { // Исправлено на использование response.json() внутри then
    const responseElement = document.getElementById('tariffUpdateResponse');
    responseElement.style.display = 'inline';
    // Проверка на код статуса 200
    if (response.status === 200) {
      responseElement.innerText = "updated successfully";
    } else {
      // Обработка других кодов статусов
      responseElement.innerText = 'Unexpected status: ' + data.message; // Исправлено на использование data.message
    }
  })
    .catch(error => {
      var responseElement = document.getElementById('tariffUpdateResponse');
      responseElement.style.display = 'inline';
      responseElement.innerText = "bad request. Please, check if you have entered the data correctly"
  })      
}

window.UpdateTariffAsync = UpdateTariffAsync;