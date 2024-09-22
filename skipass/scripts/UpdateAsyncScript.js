
async function UpdateSkipassAsync()
{
  var form = document.getElementById('updateSkipassForm');
  var formData = new FormData(form);

  var checkbox = document.getElementById("isVipSkipassCheckbox");
  var isVipCheck = checkbox.checked;
  var jsonData = {};
  formData.append("id", document.getElementById("skipassId").value);
  formData.forEach((value, key) => {
    jsonData[key] = value;
  });
  jsonData["isVip"] = isVipCheck;

 await fetch('https://localhost:7046/api/v1/Skipass', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(jsonData)
  })
  .then(response => 
    { // Исправлено на использование response.json() внутри then
    const responseElement = document.getElementById('skipassUpdateResponse');
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
      var responseElement = document.getElementById('skipassUpdateResponse');
      responseElement.style.display = 'inline';
      responseElement.innerText = "bad request. Please, check if you have entered the data correctly"
  })      
}
