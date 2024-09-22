async function GetElementByIdAsync() {
  const id = document.getElementById("visitorIdInput").value;  // Adjusted the input field to visitor
  const url = `https://localhost:7046/api/v1/Visitor/id:guid?id=${id}`;  // Routing remains unchanged

  try {
      const response = await fetch(url, {
          mode: 'cors',  // Ensure CORS is enabled
          headers: {
              'Content-Type': 'application/json'
          }
      });

      if (!response.ok) {
          // Handle non-200 responses
          let visitorInfo = document.getElementById("getElementByIdInfo");
          var newElement = document.createElement('li');
          newElement.textContent = "Unexpected status: " + response.status;
          visitorInfo.appendChild(newElement);
          return;  // Stop further processing
      }

      const data = await response.json();  // Convert response to JSON
      // Clear the list before adding new data
      let list = document.getElementById('getElementByIdInfo');
      list.innerHTML = "";
      // Loop through the data and populate visitor info
      Object.entries(data).forEach(element => {
          FillVisitorInfo(element);  // Call the function to fill the list
      });

  } catch (error) {
      // Handle network or JSON parsing errors
      let visitorInfo = document.getElementById("getElementByIdInfo");
      visitorInfo.innerHTML = "";  // Clear any previous data
      var newElement = document.createElement('li');
      newElement.textContent = "Couldn't find entity with such id.";
      visitorInfo.appendChild(newElement);
  }
}

// Function to populate the list with key-value data
function FillVisitorInfo(data) {
  var list = document.getElementById("getElementByIdInfo");
  const listItem = document.createElement('li');  // Create list item
  listItem.textContent = `${data[0]} : ${data[1]}`;  // Format the data
  list.appendChild(listItem);  // Append it to the list
}