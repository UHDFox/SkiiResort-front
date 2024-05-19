  let offset ={ 
  a: 0
  };
  
  let limit ={ 
  limit: 5
  };
  
  
  let pageCounter = {
    count : 1
  }
  
  async function GetTariffsList()
  {
    var x = document.getElementById("tariffsList");
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
      const result = await fetch('https://localhost:7046/api/v1/Tariff?offset=' + offset.a + '&limit=' + limit.limit)
      .then(response => response.json()) // Преобразуем ответ в JSON
      .then(data => {
      data.list.forEach(item => {
      addToList(item); // Добавляем каждый элемент данных в список
        });
      });
    }
  }

  function addToList(data) {
    const listItem = document.createElement('li'); // Создаем элемент списка
    listItem.textContent = data.name; // Заполняем его данными
    document.getElementById('list').appendChild(listItem); // Добавляем в список
  }
      
  async function GetNextPage()
  {   
      var button = document.getElementById("GetListButton");
      button.addEventListener("click", function(){offset.a = 0; limit.limit = 5;});
  
      if(document.getElementById("PrevPageButton").disabled = true)
      {
        document.getElementById("PrevPageButton").disabled = false;
       
      }
      
      var formData = new FormData();
      offset.a += 5;
      formData.append("offset", offset.a);
      formData.append("limit", limit.limit);
      
      var jsonData = {}
      jsonData[0] = offset.a, jsonData[1] = limit.limit;
      
      const result = await fetch('https://localhost:7046/api/v1/Tariff?offset=' + offset.a + '&limit=' + limit.limit)
      .then(response => response.json()) // Преобразуем ответ в JSON
      .then(data => {
      
      data.list.forEach(item => {
        let array = document.getElementById('list');
        if(array.getElementsByTagName("li").length == 5)
        {
          array.innerHTML = "";
        }
        addToList(item); // Добавляем каждый элемент данных в список
        
       
        if(data.totalAmount - (offset.a + limit.limit) < 0)
        {
          document.getElementById("NextPageButton").disabled = true;
        }
  
        });
      })
    pageCounter.count += 1;
    document.getElementById("PageCounter").innerHTML = pageCounter.count;
  }
  
  
  
  
  async function GetPrevPage()
  {
      if(offset.a - 5 < 0)
      {
        document.getElementById("PrevPageButton").disabled = true;
      }
      document.getElementById("list").innerHTML = "";
      var button = document.getElementById("GetListButton");
      button.addEventListener("click", function(){offset.a = 0; limit.limit = 5;});
  
      offset.a -= 5; 
      
      if(document.getElementById("NextPageButton").disabled = true)
      {
        document.getElementById("NextPageButton").disabled = false;
      }

      pageCounter.count -= 1;
      document.getElementById("PageCounter").innerHTML = pageCounter.count;
      
      var formData = new FormData();
      
      formData.append("offset", offset.a);
      formData.append("limit", limit.limit);
      
      var jsonData = {}
      jsonData[0] = offset.a, jsonData[1] = limit.limit;
      
      const result = await fetch('https://localhost:7046/api/v1/Tariff?offset=' + offset.a + '&limit=' + limit.limit)
      .then(response => response.json()) // Преобразуем ответ в JSON
      .then(data => {
        data.list.forEach(item => {
          let array = document.getElementById('list');
          if(array.getElementsByTagName("li").length == 5)
          {
            array.innerHTML = "";
            pageCounter.count -= 1;
            document.getElementById("PageCounter").innerHTML = 1;
          }
          addToList(item); // Добавляем каждый элемент данных в список
          
         
          if(data.totalAmount - (offset.a + limit.limit) < 0)
          {
            document.getElementById("NextPageButton").disabled = true;
          }
          });
        })
  }
