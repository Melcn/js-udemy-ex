// *** LES SELECTEURS ***

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

// *** AJOUTER DES ELEMENTS AU DOM ***

// Ajouter du texte à la suite 
document.write('test');

//Ajouter un element brut 
h1.append('test');

//Pour les objets
//Creer un elemement
let helloWorld = document.createElement('div');

//le personnaliser
helloWorld.textContent = "Hello World !";

//L'ajouter à notre page
//document.body.append(helloWorld);
//Affiche mon objet Hello World avant container
document.querySelector('.container').prepend(helloWorld);


// *** SUPPRIMER DES ELEMENTS ***

//remove en ayant stock dans une variable au préalable
h1.remove();

//remove en selectionnant directement
document.querySelector('h1').remove();
