import config from '../../config.js';

async function GetElementByIdAsync()
{     
      const result = await fetch(`${config.apiUrl}/Tariffication/id:guid?id=`  + document.getElementById("tarifficationIdInput").value)
      .then(response => {
        if (response.ok) { // Проверяем, что статус ответа 200
          return response.json();
        } else {
          let visitorInfo = document.getElementById("getElementByIdInfo");
          var newElement = document.createElement('li');
          newElement.textContent = "unexpected status:" + data.status;
          visitorInfo.appendChild(newElement);
        }
      })
      .then(data => {
        var list = document.getElementById('getElementByIdInfo');
        list.innerHTML = "";
        Object.entries(data).forEach(element => {
            FillVisitorInfo(element)
          })})
          .catch(error =>{
            let visitorInfo = document.getElementById("getElementByIdInfo");
            visitorInfo.innerHTML = "";
            var newElement = document.createElement('li');
            newElement.textContent = "couldn't find entity with such id";
            visitorInfo.appendChild(newElement);
          })
}       

function FillVisitorInfo(data) 
{
  var list = document.getElementById("getElementByIdInfo");
  const listItem = document.createElement('li'); // Создаем элемент списка
  listItem.textContent = data[0] + " : " + data[1]; // Заполняем его данными
  list.appendChild(listItem); // Добавляем в список
}

window.GetElementByIdAsync = GetElementByIdAsync;
