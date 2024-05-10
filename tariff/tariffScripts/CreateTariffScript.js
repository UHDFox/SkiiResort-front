
async function CreateTariffAsync()
{
  var form = document.getElementById('createTariffForm');
  var formData = new FormData(form);

  var checkbox = document.getElementById("isVipTariffCheckbox");
  var isVipCheck = checkbox.checked;
  var jsonData = {};
  formData.append("id", document.getElementById("tariffId"));
  formData.forEach((value, key) => {
    jsonData[key] = value;
  });
  jsonData["isVip"] = isVipCheck;

 await fetch('https://localhost:7046/api/v1/Tariff/CreateTariff', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(jsonData)
  })
  .then(response => 
    { // Исправлено на использование response.json() внутри then
    const responseElement = document.getElementById('tariffCreateResponse');
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
      var responseElement = document.getElementById('tariffCreateResponse');
      responseElement.style.display = 'inline';
      responseElement.innerText = "bad request. Please, check if you have entered the data correctly"
  })      
}


