function DeleteAsync() {
  const id = document.getElementById("deleteSkipassIdInput").value;

  // Perform the deletion logic (e.g., API call)
  fetch(`https://localhost:7046/api/v1/Skipass?id=${id}`, {
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