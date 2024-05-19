
function UpdateVisitorAsync()
{
    var form = document.getElementById('updateVisitorForm');

    var formData = new FormData(form);

    var jsonData = {};
    
    formData.forEach((value, key) => {
      jsonData[key] = value;
    });

    fetch('https://localhost:7046/api/v1/Visitor', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(jsonData)
    })
    .then(ProcessPutResponse).catch(error => {
        var responseElement = document.getElementById('visitorUpdateResponse');
        responseElement.style.display = 'inline';
        
        responseElement.innerText = "bad request. Please, check if you have entered the data correctly";
    })      
}


  function ProcessPutResponse(response) {
    return response.json().then(data => {
        const responseElement = document.getElementById('visitorUpdateResponse');
        responseElement.style.display = 'inline';
        // Проверка на код статуса 200
        if (response.status === 200) {
            responseElement.innerText = "updated successfully";
        } else {
            // Обработка других кодов статусов
            responseElement.innerText = 'Unexpected status:' + error;
        }
    });
}