function DeleteAsync() {
    const id = document.getElementById("deleteLocationIdInput").value;

    // Perform the deletion logic (e.g., API call)
    fetch(`https://localhost:7046/api/v1/Location?id=${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            const locationDeleteResponse = document.getElementById("locationDeleteResponse");

            if (response.ok) {
                // Show success message
                locationDeleteResponse.innerHTML = `<li>Location deleted successfully.</li>`;
                // Close the modal
                const modal = bootstrap.Modal.getInstance(document.getElementById('deleteModal'));
                modal.hide();
            } else {
                // Show error message
                locationDeleteResponse.innerHTML = `<li>Error deleting location: ${response.status}</li>`;
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById("locationDeleteResponse").innerHTML = `<li>Error deleting location.</li>`;
        });
}