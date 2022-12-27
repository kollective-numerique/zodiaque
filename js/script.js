
if (window.HTMLTitleElement = "page") 
{
  function createimage(tableau) {
    for (item of tableau) {
      let simg = document.createElement('img');
      simg.setAttribute('src', item.url);
      document.body.appendChild(simg);
    }
  }
}


  function photos()
  {
  
    fetch('https://jsonplaceholder.typicode.com/photos')
    
   .then((response) => response.json())
   .then((json) => console.log(json));
  };

photos();
button.addEventListener("click", photos);





