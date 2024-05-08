
function VisitorRegister()
{
    var form = document.getElementById('createVisitorForm');

    var formData = new FormData(form);

    var jsonData = {};
    
    formData.forEach((value, key) => {
      jsonData[key] = value;
    });

    fetch('https://localhost:7046/api/Visitor', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(jsonData)
    })
    .then(ProcessPostResponse).catch(error => {
        var responseElement = document.getElementById('visitorCreateResponse');
        responseElement.style.display = 'inline';
        responseElement.innerText = "bad request. Please, check if you have entered the data correctly"
    })      
}

function ProcessPostResponse(response) {
  return response.json().then(data => {
      const responseElement = document.getElementById('visitorCreateResponse');
      responseElement.style.display = 'inline';
      // Проверка на код статуса 201
      if (response.status === 201) {
          responseElement.innerText = "added successfully";
      } else {
          // Обработка других кодов статусов
          responseElement.innerText = 'Unexpected status:' + response.status;
      }
  });
}
 
