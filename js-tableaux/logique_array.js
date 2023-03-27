let panier= ['fraise', 'banane', 'poire'];

//forIn
for (const fruit in panier) { //fruit contient l'index
    console.log(panier[fruit]);
}

let listeDePays = ['France', 'Belgique', 'Japon', 'Maroc'];

//forOf
for (const pays of listeDePays) {
    console.log(pays);
}

//Foreach
listeDePays.forEach(function(pays){
    console.log(pays);
})

listeDePays.forEach(pays => console.log(pays));



//Concatenation d'un tableau associatif
let monTableauAssociatif = {
    'prenom'    : 'Mark',
    'nom'       : 'Zuckerberg',
    'poste'     : 'PDG de Facebook'
};

function maFonction(tableau){
    let chaine = '';

    for (const valeur in tableau) {
        
        chaine+= (valeur + ' : ' + tableau[valeur] + '\n');
    }

    console.log(chaine);
}

maFonction(monTableauAssociatif);
