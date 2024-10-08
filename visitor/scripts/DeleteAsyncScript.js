import config from '../../config.js';

function DeleteAsync() {
  const id = document.getElementById("deleteVisitorIdInput").value;

  // Perform the deletion logic (e.g., API call)
  fetch(`${config.apiUrl}/Visitor?id=${id}`, {
      method: 'DELETE',
      headers: {
          'Content-Type': 'application/json'
      }
  })
      .then(response => {
          const locationDeleteResponse = document.getElementById("visitorDeleteResponse");

          if (response.ok) {
              // Show success message
              locationDeleteResponse.innerHTML = `<li>Visitor deleted successfully.</li>`;
              // Close the modal
              const modal = bootstrap.Modal.getInstance(document.getElementById('deleteModal'));
              modal.hide();
          } else {
              // Show error message
              locationDeleteResponse.innerHTML = `<li>Error deleting visitor: ${response.status}</li>`;
          }
      })
      .catch(error => {
          console.error('Error:', error);
          document.getElementById("visitorDeleteResponse").innerHTML = `<li>Error deleting visitor.</li>`;
      });
}

window.DeleteAsync = DeleteAsync;