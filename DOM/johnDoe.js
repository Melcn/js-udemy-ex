// Les selecteurs

let header  = document.getElementsByTagName('header');
let logo    = document.getElementById('logo');
let container = document.getElementsByClassName('container');
let h1 = document.querySelector('h1');
let p = document.querySelectorAll('p');


h1.textContent = "Hello World !";
//textContent est une propriété qui permet de modifier le text du titre
h1.innerHTML  ="<div style ='font-weight: normal'> Hello World </div>";
//innerHTML ici nous permet de modifier le style via HTML

console.log(header);
console.log(logo);
console.log(container);
console.log(h1);
console.log(p);


