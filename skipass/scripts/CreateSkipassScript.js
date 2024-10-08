import config from '../../config.js';

async function CreateSkipassAsync()
{
  var form = document.getElementById('createSkipassForm');
  var formData = new FormData(form);

  var checkbox = document.getElementById("IsActiveSkipassCheckbox");
  var IsActiveCheck = checkbox.checked;
  var jsonData = {};
 
  formData.forEach((value, key) => {
    jsonData[key] = value;
  });
  jsonData["status"] = IsActiveCheck;

 await fetch(`${config.apiUrl}/Skipass`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(jsonData)
  })
  .then(response => 
    { // Исправлено на использование response.json() внутри then
    const responseElement = document.getElementById('skipassCreateResponse');
    responseElement.style.display = 'inline';
    // Проверка на код статуса 201
    if (response.status === 201) {
      responseElement.innerText = "added successfully";
    } else {
      // Обработка других кодов статусов
      responseElement.innerText = 'Unexpected status: ' + data.message; // Исправлено на использование data.message
    }
  })
    .catch(error => {
      var responseElement = document.getElementById('skipassCreateResponse');
      responseElement.style.display = 'inline';
      responseElement.innerText = "bad request. Please, check if you have entered the data correctly"
  })      
}

window.CreateSkipassAsync = CreateSkipassAsync;
