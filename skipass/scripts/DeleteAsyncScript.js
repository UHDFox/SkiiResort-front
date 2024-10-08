import config from '../../config.js';

function DeleteAsync() {
  const id = document.getElementById("deleteSkipassIdInput").value;

  // Perform the deletion logic (e.g., API call)
  fetch(`${config.apiUrl}/Skipass?id=${id}`, {
      method: 'DELETE',
      headers: {
          'Content-Type': 'application/json'
      }
  })
      .then(response => {
          const skipassDeleteResponse = document.getElementById("skipassDeleteResponse");

          if (response.ok) {
              // Show success message
              skipassDeleteResponse.innerHTML = `<li>Skipass deleted successfully.</li>`;
              // Close the modal
              const modal = bootstrap.Modal.getInstance(document.getElementById('deleteModal'));
              modal.hide();
          } else {
              // Show error message
              skipassDeleteResponse.innerHTML = `<li>Error deleting skipass: ${response.status}</li>`;
          }
      })
      .catch(error => {
          console.error('Error:', error);
          document.getElementById("skipassDeleteResponse").innerHTML = `<li>Error deleting skipass.</li>`;
      });
}

window.DeleteAsync = DeleteAsync;