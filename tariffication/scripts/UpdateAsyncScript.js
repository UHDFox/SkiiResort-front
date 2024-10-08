import config from '../../config.js';

async function UpdateAsync()
{
  var form = document.getElementById('updateTarifficationForm');
  var formData = new FormData(form);

  var jsonData = {};
 
  formData.forEach((value, key) => {
    jsonData[key] = value;
  });

 await fetch(`${config.apiUrl}/Tariffication`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(jsonData)
  })
  .then(response => 
    { // Исправлено на использование response.json() внутри then
    const responseElement = document.getElementById('tarifficationUpdateResponse');
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
      var responseElement = document.getElementById('tarifficationUpdateResponse');
      responseElement.style.display = 'inline';
      responseElement.innerText = "bad request. Please, check if you have entered the data correctly"
  })      
}

window.UpdateAsync = UpdateAsync;