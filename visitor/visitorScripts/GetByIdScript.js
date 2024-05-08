async function GetByElementById()
{     
      const result = await fetch('https://localhost:7046/api/Visitor/visitorId:guid?id='  + document.getElementById("visitorIdInput").value)
      .then(response => response.json()) // Преобразуем ответ в JSON
      .then(data => {
        var list = document.getElementById('getElementByIdInfo');
        list.innerHTML = "";
        Object.entries(data).forEach(element => {
          FillVisitorInfo(element)})})
          .catch(error =>{
            let visitorInfo = document.getElementById("getElementByIdInfo");
            var newElement = document.createElement('li').textContent = "couldn't find entity with such id";
            visitorInfo.appendChild();
          });
}       

function FillVisitorInfo(data) {
    var list = document.getElementById("getElementByIdInfo");
    const listItem = document.createElement('li'); // Создаем элемент списка
    listItem.textContent = data[0] + " : " + data[1]; // Заполняем его данными
    list.appendChild(listItem); // Добавляем в список
  }
/*
  function processGetResponse(response) {
    return response.then(data => {
        const responseElement = document.getElementById('getElementByIdInfo');
        
        // Проверка на код статуса 400
        switch(response.status)
        {
          case 404: 
            document.getElementById('getElementByIdInfo').appendChild(document.CreateElement("li").textContent = "couldn't find entity with such id"); 
          default:
            if(response.status != 200)
            {
              document.getElementById('getElementByIdInfo').appendChild(document.CreateElement("li").textContent = "unexpected status" + response.status); 
            }
            else
            {
              FillVisitorInfo(response.json())
              .then(data => {
                var infoFiels = document.getElementById("getElementByIdInfo");
               Object.entries(data).forEach(([key, value]) => {
                FillVisitorInfo(value)})})
            }
          }
        })
  }*/

  