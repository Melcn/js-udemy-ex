//Fonctions flechées : utiliser principalement pour les fonction courtes avec une instruction. 

let maFonction = () => console.log('test');


//Les closures (fermetures) : sauvegarde les variables locales d'une fonction 

function bonjour(prenom) {

    let resultat = "Bonjour " + prenom; // var locale
    let maClosure = () => console.log(resultat);

    return maClosure;
}

function timer() {
    let secondes = 0;

    let maClosure = () => {
        return ++secondes;
    }

    return maClosure;
}


let monTimer = timer();
console.log(monTimer());
