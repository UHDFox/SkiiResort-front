function addToList(data) {
    const listItem = document.createElement('li'); // Создаем элемент списка
    listItem.textContent = data.id; // Заполняем его данными
    document.getElementById('list').appendChild(listItem); // Добавляем в список
  }
  
  async function GetSkipassesList()
  {
    var x = document.getElementById("skipassesList");
    if (x.style.display === "none") {
      x.style.display = "block";
    } 
    else 
    {
      x.style.display = "none";
    }
    
    document.getElementById("NextPageButton").disabled = false; //reset next page button disable
    document.getElementById("PrevPageButton").disabled = true; //reset next page button disable

    if(document.getElementById('list').getElementsByTagName("li").length == 0)
    {
      const result = await fetch('https://localhost:7046/api/v1/Skipass?offset=' + offset.a + '&limit=' + limit.limit)
      .then(response => response.json()) // Преобразуем ответ в JSON
      .then(data => {
      data.list.forEach(item => {
      addToList(item); // Добавляем каждый элемент данных в список
        });
      });
    }
  }