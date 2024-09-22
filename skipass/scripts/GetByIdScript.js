async function GetElementByIdAsync() {
  const id = document.getElementById("skipassIdInput").value;
  const url = `https://localhost:7046/api/v1/Skipass/id:guid?id=${id}`;  // Fixed URL structure

  try {
      const response = await fetch(url, {
          mode: 'cors', // Ensure this is 'cors' unless you have a reason to use 'no-cors'
          headers: {
              'Content-Type': 'application/json'
          }
      });

      if (!response.ok) {
          // Handle non-200 responses here
          let skipassInfo = document.getElementById("getElementByIdInfo");
          var newElement = document.createElement('li');
          newElement.textContent = "Unexpected status: " + response.status;
          skipassInfo.appendChild(newElement);
          return;  // Stop further processing
      }

      const data = await response.json(); // Convert to JSON
      // Clear the list before adding new data
      let list = document.getElementById('getElementByIdInfo');
      list.innerHTML = "";
      // Loop through the data and fill the skipass info
      Object.entries(data).forEach(element => {
          FillSkipassInfo(element); // Fill with the retrieved data
      });

  } catch (error) {
      // Handle any network or JSON parsing errors
      let skipassInfo = document.getElementById("getElementByIdInfo");
      skipassInfo.innerHTML = ""; // Clear any previous info
      var newElement = document.createElement('li');
      newElement.textContent = "Couldn't find entity with such id.";
      skipassInfo.appendChild(newElement);
  }
}

// Function to populate the list with key-value data
function FillSkipassInfo(data) {
  var list = document.getElementById("getElementByIdInfo");
  const listItem = document.createElement('li'); // Create list item
  listItem.textContent = `${data[0]} : ${data[1]}`; // Format the data
  list.appendChild(listItem); // Append it to the list
}