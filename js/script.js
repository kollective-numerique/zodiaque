var i = 1

while (i < 101 ) 
{
    fetch(`https://jsonplaceholder.typicode.com/photos/${i}` )
    
    .then((response) => response.json())
    .then((json) =>
    {
        let ajout = `<div class="content"><img src= " ${json.url} "/></div>`
         document.getElementById("image_wrapper").innerHTML += ajout
    }
    )
    i++;
}

 
  
