// Implementer une methode = ajouter une fonction dans un objet 

let chien = {

    race: 'Shiba',
    poil: 'court',
    aboyer: () => console.log('Ouaf ouaf')
}

chien.aboyer();



let magicien = {
    attaquer: function(){
        console.log('Le magicien lance un sort');
    }

}

let guerrier = {
    attaquer : function(){
        console.log('Le guerrier prend son épée');
    }
}

magicien.attaquer();
guerrier.attaquer();