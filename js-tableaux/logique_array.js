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