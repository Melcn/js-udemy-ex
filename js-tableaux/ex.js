//Simple
let monTableau = ['un', 'deux','trois'];

console.log(monTableau[0]);
console.log(monTableau.length); // nombre d'element dans mon tableau

//Deux dimensions
let monTableau2D = [
    ['Mark', 'Jeff', 'Bill'],
    ['Zuckerberg', 'Bezos', 'Gates']
];

console.log(monTableau2D[0][1]);

//Associatif
let monTableauAssociatif = {
    'prenom'    : 'Mark',
    'nom'       : 'Zuckerberg',
    'poste'     : 'PDG de Facebook'
};

console.log(monTableauAssociatif['poste']);
