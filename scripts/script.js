

function WelcomePageRedirection()
{
    window.location.href = "pageTwo.html";
}

function VisitorRegister()
{
    var form = document.getElementById('visitorForm');

    var formData = new FormData(form);

    var jsonData = {};
    
    formData.forEach((value, key) => {
      jsonData[key] = value;
    });

    fetch('https://localhost:7046/api/Visitor', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(jsonData)
    })    
  }


  function GetVisitorsList()
  {
    var x = document.getElementById("visitorsList");
    if (x.style.display === "none") {
      x.style.display = "block";
    } 
    else 
    {
      x.style.display = "none";
    }

  }

  