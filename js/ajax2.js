'use-strict';

var noticia = [];
var divNoticia = document.querySelector('#noticia')

realizarPeticionNoticias();

function realizarPeticionNoticias(){
    fetch('https://newsdata.io/api/1/sources?country=es&apikey=pub_69564925acb43c34c315ceb30f7fc7194c160')
    .then (data => data.json())
    .then(data =>{
        noticia = data;
        pintarNoticia(noticia);
    })
}

function pintarNoticia(noticia){
    noticia.results.map(function(noticia,i){
    let tituloNoticia = document.createElement('h2');
    tituloNoticia.innerHTML = i+1+" - "+ noticia.name;
    divNoticia.appendChild(tituloNoticia);
    let urlNoticia = document.createElement('a');
    urlNoticia.innerHTML = noticia.url;
    urlNoticia.href = noticia.url;
    divNoticia.appendChild(urlNoticia);
    });
}

function inicio(){
    window.location.href="index.html";
} 