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

  