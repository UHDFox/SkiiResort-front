let offset = { a: 0 };  // Offset to track pagination
let limit = { limit: 5 };  // Limit for number of items per page
let pageCounter = { count: 1 };  // Tracks the current page number
let isLoading = false;  // Prevent multiple fetch requests at the same time

// Function to get the list of tariff and display it
async function GetTariffsList() {
    const x = document.getElementById("tariffsList");

    // Toggle the display of the list
    x.style.display = x.style.display === "none" || x.style.display === "" ? "block" : "none";

    // Reset pagination
    offset.a = 0;
    pageCounter.count = 1;
    document.getElementById("PageCounter").innerHTML = pageCounter.count;

    await fetchTariffs();  // Fetch initial list of tariff
}

// Function to fetch tariff from API
async function fetchTariffs() {
    if (isLoading) return;  // Prevent fetching if already loading
    isLoading = true;  // Set loading state

    try {
        // Fetch data from API
        const response = await fetch(`https://localhost:7046/api/v1/Tariff?offset=${offset.a}&limit=${limit.limit}`);

        // Check if the response status is not OK (2xx)
        if (!response.ok) {
            throw new Error(`Server returned error: ${response.status}`);
        }

        const data = await response.json();

        // Clear the previous list
        document.getElementById('list').innerHTML = "";

        // If there are results, add them to the list
        if (data.list.length > 0) {
            data.list.forEach(item => {
                addToList(item);
            });
        } else {
            // If no tariffs found, display a message
            document.getElementById('list').innerHTML = "<li>No tariffs found.</li>";
        }

        // Enable/Disable Previous and Next buttons
        document.getElementById("PrevPageButton").disabled = offset.a === 0;  // Disable if on first page
        document.getElementById("NextPageButton").disabled = data.list.length < limit.limit;  // Disable if no more pages
    } catch (error) {
        // Handle the error (server returned 500 or any other error)
        console.error("Error fetching data:", error);
        document.getElementById('list').innerHTML = "<li>An error occurred while fetching data. Please try again later.</li>";

        // Disable the next button to prevent further pagination
        document.getElementById("NextPageButton").disabled = true;
    } finally {
        // Update the page counter display
        updatePageCounter();

        isLoading = false;  // Reset loading state
    }
}

// Helper function to add an item to the list
function addToList(data) {
    const listItem = document.createElement('li');  // Create a new list item
    listItem.textContent = `${data.id} - ${data.name}`;  // Display both the ID and name
    document.getElementById('list').appendChild(listItem);  // Add the item to the list
}

// Function to handle going to the next page
async function GetNextPage() {
    if (!isLoading) {  // Proceed if not already loading
        offset.a += limit.limit;  // Increase offset for the next page
        pageCounter.count += 1;  // Increase the page counter
        await fetchTariffs();  // Fetch the next page of results
    }
}

// Function to handle going to the previous page
async function GetPrevPage() {
    if (!isLoading && offset.a > 0) {  // Proceed if not already loading and not on the first page
        offset.a -= limit.limit;  // Decrease offset for the previous page
        pageCounter.count -= 1;  // Decrease the page counter
        await fetchTariffs();  // Fetch the previous page of results
    }
}

// Function to update the page counter display
function updatePageCounter() {
    document.getElementById("PageCounter").innerHTML = pageCounter.count;  // Display the current page number
}