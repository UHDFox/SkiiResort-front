import config from '../../config.js';

async function UpdateSkipassAsync() {
  var form = document.getElementById('updateSkipassForm');
  var formData = new FormData(form);

  var checkbox = document.getElementById("IsActiveSkipassCheckbox");
  var isActiveCheck = checkbox.checked; // Исправлено название переменной
  var jsonData = {};
  
  formData.append("id", document.getElementById("skipassIdInput").value); // Исправлено ID поля
  
  formData.forEach((value, key) => {
    jsonData[key] = value;
  });
  
  jsonData["isActive"] = isActiveCheck; // Исправлено имя поля для отправки

  await fetch(`${config.apiUrl}/Skipass`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(jsonData)
  })
  .then(response => {
    const responseElement = document.getElementById('skipassUpdateResponse');
    responseElement.style.display = 'inline';

    if (response.ok) {
      responseElement.innerText = "Updated successfully";
    } else {
      return response.json().then(data => {
        responseElement.innerText = 'Unexpected status: ' + data.message;
      });
    }
  })
  .catch(error => {
    var responseElement = document.getElementById('skipassUpdateResponse');
    responseElement.style.display = 'inline';
    responseElement.innerText = "Bad request. Please, check if you have entered the data correctly";
  });
}

window.UpdateSkipassAsync = UpdateSkipassAsync;
