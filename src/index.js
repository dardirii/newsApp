
 const content = document.getElementById('data');
 content.innerHTML = message('loading...');
 let url = 'https://newsapi.org/v2/top-headlines?country=id&apiKey=4ddad75f151740bcbc45fc0243f1a0e2'
 const data = fetch(url);
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
      content += `<div class="card col-3 m-1" style="width: 18rem;">
      <img src="${articles.urlToImage}" class="card-img-top" alt="...">
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

  document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let searchQuery = document.getElementById('search').value;
    let newUrl = `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=4ddad75f151740bcbc45fc0243f1a0e2`
    fetch(newUrl)
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
  });

  //function search() {
  //  // Get the search query from the input field
  //  let searchQuery = document.getElementById('search').value.toLowerCase();
  //  
  //  // Get the list of articles
  //  let articlesList = document.getElementById('data').querySelectorAll('.card');
  //  
  //  // Loop through each article and check if it contains the search query
  //  articlesList.forEach(function(article) {
  //    let articleTitle = article.querySelector('.card-title').textContent.toLowerCase();
  //    if (articleTitle.includes(searchQuery)) {
  //      article.style.display = 'block'; // show the article card
  //    } else {
  //      article.style.display = 'none'; // hide the article card
  //    }
  //  });
  //  
  //}
  