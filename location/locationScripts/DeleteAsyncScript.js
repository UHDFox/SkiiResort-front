async function DeleteAsync()
{
      const result = await fetch('https://localhost:7046/api/v1/Skipass?id=' + document.getElementById("deleteLocationIdInput").value, 
      { method: 'DELETE' })
      .then(response => 
        {
            var responseElement = document.getElementById('locationDeleteResponse')
            if(response.status == 200)
            {
                responseElement.style.display = 'inline';
                responseElement.innerText = "deleted successfully";
            }
            else if(response.status == 500)
            {
            responseElement.style.display = 'inline',
            responseElement.innerText = "bad request. Please, check if you have entered the data correctly";
            }
            
        })
      .catch(error => {
        responseElement.style.display = 'inline',
        responseElement.innerText = 'Unexpected status:' + response.status})
}
