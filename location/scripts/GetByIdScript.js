import config from '../../config.js';

async function GetElementByIdAsync() {
    const id = document.getElementById("locationIdInput").value;
    const url = `${config.apiUrl}/Location/id:guid?id=${id}`;  // Fixed URL structure

    try {
        const response = await fetch(url, {
            mode: 'cors', // Ensure this is 'cors' unless you have a reason to use 'no-cors'
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            // Handle non-200 responses here
            let locationInfo = document.getElementById("getElementByIdInfo");
            var newElement = document.createElement('li');
            newElement.textContent = "Unexpected status: " + response.status;
            locationInfo.appendChild(newElement);
            return;  // Stop further processing
        }

        const data = await response.json(); // Convert to JSON
        // Clear the list before adding new data
        let list = document.getElementById('getElementByIdInfo');
        list.innerHTML = "";
        // Loop through the data and fill the location info
        Object.entries(data).forEach(element => {
            FillLocationInfo(element); // Fill with the retrieved data
        });

    } catch (error) {
        // Handle any network or JSON parsing errors
        let locationInfo = document.getElementById("getElementByIdInfo");
        locationInfo.innerHTML = ""; // Clear any previous info
        var newElement = document.createElement('li');
        newElement.textContent = "Couldn't find entity with such id.";
        locationInfo.appendChild(newElement);
    }
}

// Function to populate the list with key-value data
function FillLocationInfo(data) {
    var list = document.getElementById("getElementByIdInfo");
    const listItem = document.createElement('li'); // Create list item
    listItem.textContent = `${data[0]} : ${data[1]}`; // Format the data
    list.appendChild(listItem); // Append it to the list
}

window.GetElementByIdAsync = GetElementByIdAsync;