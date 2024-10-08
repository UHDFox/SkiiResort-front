import config from '../../config.js';

function DeleteAsync() {
  const id = document.getElementById("deleteTariffIdInput").value;

  // Perform the deletion logic (e.g., API call)
  fetch(`${config.apiUrl}/VisitorActions?id=${id}`, {
      method: 'DELETE',
      headers: {
          'Content-Type': 'application/json'
      }
  })
      .then(response => {
          const tariffDeleteResponse = document.getElementById("visitorActionsDeleteResponse");

          if (response.ok) {
              // Show success message
              tariffDeleteResponse.innerHTML = `<li>Tariff deleted successfully.</li>`;
              // Close the modal
              const modal = bootstrap.Modal.getInstance(document.getElementById('deleteModal'));
              modal.hide();
          } else {
              // Show error message
              tariffDeleteResponse.innerHTML = `<li>Error deleting tariff: ${response.status}</li>`;
          }
      })
      .catch(error => {
          console.error('Error:', error);
          document.getElementById("visitorActionsDeleteResponse").innerHTML = `<li>Error deleting tariff.</li>`;
      });
}

window.DeleteAsync = DeleteAsync;