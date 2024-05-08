async function DeleteAsync()
{
      const result = await fetch('https://localhost:7046/api/Visitor/?id=' + document.getElementById("deleteVisitorIdInput").value, 
      { method: 'DELETE' })
      .then(ProcessDeleteResponse)
      .catch(error => {
        var responseElement = document.getElementById('visitorDeleteResponse')
        responseElement.style.display = 'inline',
        responseElement.InnerText = "bad request. Please, check if you have entered the data correctly"})
}

function ProcessDeleteResponse(response) {
    return response.json().then(data => {
        const responseElement = document.getElementById('visitorDeleteResponse');
        responseElement.style.display = 'inline';
        // Проверка на код статуса 200
        if (response.status === 200) {
            responseElement.innerText = "deleted successfully";
        } 
        else {
            // Обработка других кодов статусов
            responseElement.innerText = 'Unexpected status:' + response.status;
        }
    });
}