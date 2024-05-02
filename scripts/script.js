

function WelcomePageRedirection()
{
    window.location.href = "pageTwo.html";
}

function VisitorRegister()
{
    alert("capybara pochesan");


    let name = document.getElementById("inputFirstName").value;
    let age = document.getElementById("ageInput").value;
    let phone = document.getElementById("phoneInput").value;
    let birthday = document.getElementById("birthdayInput").value;
    let passport = document.getElementById("passportInput").value;

    let userData = document.getElementById("inputData").value;

    let formData = new FormData(userData);

    let testForm = new FormData();
    testForm.append("name", name);
    testForm.append("age", age);
    testForm.append("phone", phone);
    testForm.append("birthday", birthday);
    testForm.append("passport", passport);  

    

    let xhr = new XMLHttpRequest()
    xhr.open("POST", "https://localhost:7046/api/Visitor/")
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send(testForm);

    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            var response = JSON.parse(xhr.responseText);
            console.log('New item added:', response);
        } else {
            console.error('Error adding new item:', xhr.statusText);
        }
    };

   



   
}


/** 

function WelcomePageRedirection()
{
    window.location.href = "pageTwo.html";
}

function VisitorRegister()
{
    alert("capybara pochesan");

    let name = document.getElementById("inputFirstName").value.concat(' ', document.getElementById("inputSecondName").value);
    let email = document.getElementById("emailInput").value;
    let age = document.getElementById("ageInput").value;
    let phone = document.getElementById("phoneInput").value;
    let birthday = document.getElementById("birthdayInput").value;
    let passport = document.getElementById("passportInput").value;

    let request = {
        'name': name,
        'age' : age,
        'phone' : phone,
        'birthdate' : birthday
    }


    let xhr = new XMLHttpRequest()
    xhr.open("POST", "https://localhost:7046/api/Visitor/Add", true)
    xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
    xhr.send(JSON.stringify(request));
    
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            var response = JSON.parse(xhr.responseText);
            console.log('New item added:', response);
        } 
    };

    xhr.onerror = function() {
        console.error('Error adding new item');
    };
}
*/