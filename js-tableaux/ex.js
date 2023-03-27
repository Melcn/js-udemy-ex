//Simple
let monTableau = ['un', 'deux','trois'];

monTableau.push('quatre'); //Ajoute l'element quatre à la suite de mon tableau
monTableau.unshift('zero'); // Ajoute l'element zero au debut de mon tableau
monTableau.pop(); //Supprime le dernier element du tableau
monTableau.shift(); //Supprimer le premier element du tableau

monTableau.splice(0, 2); // A partir de l'index 0 , je souhaite supprimer 2 elements
monTableau.splice(1, 0, 'random'); // A partir de l'index 1, j'ajoute l'element random

/*Le fait d'ajouter/ supprimer des elements du tableaux modifie les indexs */

console.log(monTableau[0]);
console.log(monTableau.length); // nombre d'element dans mon tableau
console.log(monTableau.indexOf('deux')); //Retourne l'index de la valeur deux

let chaine = monTableau.join(); // La variable chaine contient le tableau en chaine de caracteres, on peut y definir des separateurs (slash, virgule, espace, etc..)


//Deux dimensions
let monTableau2D = [
    ['Mark', 'Jeff', 'Bill'],
    ['Zuckerberg', 'Bezos', 'Gates']
];

monTableau2D[0].push('test'); // Ajoute l'element test au premier tableau
/*Preciser à quel niveau on veut supprimer/ajouter pour les tableaux à plusieurs dimensions */

monTableau2D.splice(2, 0, ['30', '45', '70']);
//console.log(monTableau2D[0][1]);
console.log(monTableau2D);


//Associatif
let monTableauAssociatif = {
    'prenom'    : 'Mark',
    'nom'       : 'Zuckerberg',
    'poste'     : 'PDG de Facebook'
};

delete(monTableauAssociatif.poste); // L'element poste a été supprimé
console.log(monTableauAssociatif['poste']);
