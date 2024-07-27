document.querySelector('.projet1').addEventListener('click', function(){

  let url = 'https://11999977.github.io/Reproduction_W3C/'

  window.open(url);

});

document.querySelector('.projet2').addEventListener('click', function(){

  let cheminImage = '../Images/Site_Streaming_2\ \(2\).png'

  window.open(cheminImage);

});

document.querySelector('.projet3').addEventListener('click', function(){

  let url = 'https://11999977.github.io/ToDoList/'

  window.open(url);

});

document.querySelector('.projet4').addEventListener('click', function(){

  let url = 'https://11999977.github.io/METEO/'

  window.open(url);

});


let menu = document.querySelector('.slide_menu')
document.querySelector('.burger').addEventListener('click', function(){

  menu.style.display = "flex";
})
menu.addEventListener('click', function(){

  let menu = document.querySelector('.slide_menu').style.display = "none";
})


