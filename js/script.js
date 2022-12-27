
/*
function createimage(tableau) {
  for (item of tableau) {
    let simg = document.createElement('img');
    simg.setAttribute('src', item.url);
    document.body.appendChild(simg);
  }
}

fetch("data.json");
   .then((response) => response.json())
  .then((json) => createimage(json))*/

  const button = document.getElementById("animal");
  let image = document.getElementById("image");

  function photos()
  {
  
    fetch('https://jsonplaceholder.typicode.com/photos')
    
   .then((response) => response.json())
   .then((json) => console.log(json));
  };

photos();



for (let i = 0; i < 50; i++) {

  function demarrage() 
  {
    var monImage = document.createElement('image');
    image.src = `#${response.id}`;

    id++;

  }
  
  window.addEventListener("load",demarrage);
  
  button.addEventListener("click", photos);
  
}
