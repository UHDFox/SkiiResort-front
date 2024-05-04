let offset ={ 
a: 0
};

let limit ={ 
limit: 5
};





    
async function GetNextPage()
{   
    var button = document.getElementById("GetListButton");
    button.addEventListener("click", function(){offset.a = 0; limit.limit = 5;});

    
    var formData = new FormData();
    
    formData.append("offset", offset.a);
    formData.append("limit", limit.limit);
    
    var jsonData = {}
    jsonData[0] = offset.a, jsonData[1] = limit.limit;
    
    const result = await fetch('https://localhost:7046/api/Visitor?offset=' + offset.a + '&limit=' + limit.limit)
    .then(response => response.json()) // Преобразуем ответ в JSON
    .then(data => {
    data.forEach(item => {
      addToList(item); // Добавляем каждый элемент данных в список
    });
  })
        
    offset.a += 5; limit.limit += 5;
    
   

    var list = document.getElementById("list");

   

    
    
    

   
}

function addToList(data) {
  const listItem = document.createElement('li'); // Создаем элемент списка
  listItem.textContent = data.na; // Заполняем его данными
  document.getElementById('list').appendChild(listItem); // Добавляем в список
}