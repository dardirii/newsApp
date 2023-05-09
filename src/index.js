
 const content = document.getElementById('data');
 content.innerHTML = message('loading...');
 const data = fetch('https://newsapi.org/v2/top-headlines?country=id&apiKey=4ddad75f151740bcbc45fc0243f1a0e2');
 data
   .then(function(res){ return res.json()})
   .then(res => {
      console.log(res)
      content.innerHTML = render(res.articles)
   })
   .catch(err => {
    content.innerHTML = message(err.message)
   })
   .finally(() => {    
   });

   function render(articles) {
    let content = ``;
    articles.forEach(articles => {
      content += `<div class="card col-3 m-1>
      <div class="card-body">
        <h5 class="card-title">${articles.title}</h5>
        <p class="card-subtitle mb-2 text-body-secondary">${articles.publishedAt}</p>
        <a href=${articles.url} class="btn btn-primary">Read More</a>
      </div>
    </div>`;
    })
    return content;
  } 
  
  function message(msg) {
    return `<tr>
              <td class="text-center" colspan="8">${msg}</td>
          </tr>`;
  }

  function search() {
    // Ambil input pencarian dari user
    let input = document.getElementById("search").value;
    // Ambil elemen list yang akan dicari
    let list = document.getElementById("data").getElementsByTagName("h5");
    // Lakukan pencarian dan tampilkan hasilnya
    for (let i = 0; i < list.length; i++) {
      let item = list[i].innerHTML;
      if (item.toLowerCase().includes(input.toLowerCase())) {
        list[i].style.display = "block";
      } else {
        list[i].style.display = "none";
      }
    }
  }