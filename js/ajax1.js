'use-strict';

//Coger variable del localStorgae
let nombrePais = localStorage.getItem("nombre");
console.log(nombrePais);

var pais = [];

paises(nombrePais);

function paises(nombrePais){
    fetch('https://restcountries.com/v3.1/name/'+nombrePais)
    .then (data => data.json())
    .then(data =>{
        pais = data;
        pintarCarcateristicasPais(pais);
    })
}

function pintarCarcateristicasPais(pais){
    let nombre = document.querySelector('#nombre');
    nombre.innerHTML = pais[0].name.common;
    let nombre2 = document.querySelector('#nombre2');
    nombre2.innerHTML = pais[0].name.common;
    console.log(pais[0].flags.png);
    let bandera = document.querySelector('#img');
    bandera.src = pais[0].flags.png;
    let nombreOficial = document.querySelector('#oficial');
    nombreOficial.innerHTML = "Nombre oficial: "+pais[0].name.official;
    let capital = document.querySelector('#capital');
    capital.innerHTML = "Capital: "+pais[0].capital;
    let region = document.querySelector('#region');
    region.innerHTML = "Region: "+pais[0].region;
    let area = document.querySelector('#area');
    area.innerHTML = "Area: "+pais[0].area;
    let population = document.querySelector('#population');
    population.innerHTML = "Population: "+pais[0].population;
}

function inicio(){
    window.location.href="index.html";
} 