import config from '../../config.js';

async function DeleteAsync()
{
      const result = await fetch(`${config.apiUrl}/Tariffication?id=` + document.getElementById("deleteTarifficationIdInput").value, 
      { method: 'DELETE' })
      .then(response => 
        {
            var responseElement = document.getElementById('tarifficationDeleteResponse')
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

window.DeleteAsync = DeleteAsync;