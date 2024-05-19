
async function CreateLocationAsync()
{
  var form = document.getElementById('createLocationForm');
  var formData = new FormData(form);

  var jsonData = {};
 
  formData.forEach((value, key) => {
    jsonData[key] = value;
  });

 await fetch('https://localhost:7046/api/v1/Location', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(jsonData)
  })
  .then(response => 
    { // Исправлено на использование response.json() внутри then
    const responseElement = document.getElementById('locationCreateResponse');
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
      var responseElement = document.getElementById('locationCreateResponse');
      responseElement.style.display = 'inline';
      responseElement.innerText = "bad request. Please, check if you have entered the data correctly"
  })      
}


