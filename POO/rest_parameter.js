function addition(...nombres) {

    let resultat = 0;

    nombres.forEach(nombre => {
        resultat+= nombre;
    });

    console.log(resultat);
}

addition(4, 9, 5, 415, 78, 54);

// Dans cette exemple le rest parameter (...)permet d'ajouter continuellement des nombres à additionner 