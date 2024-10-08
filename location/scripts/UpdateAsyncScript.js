import config from '../../config.js';

async function UpdateLocationAsync()
{
  var form = document.getElementById('updateLocationForm');
  var formData = new FormData(form);

  var jsonData = {};
 
  formData.forEach((value, key) => {
    jsonData[key] = value;
  });

  await fetch(`${config.apiUrl}/Location`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(jsonData)
  })
  .then(response => 
    { // Исправлено на использование response.json() внутри then
    const responseElement = document.getElementById('locationUpdateResponse');
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
      var responseElement = document.getElementById('locationUpdateResponse');
      responseElement.style.display = 'inline';
      responseElement.innerText = "bad request. Please, check if you have entered the data correctly"
  })      
}

window.UpdateLocationAsync = UpdateLocationAsync;