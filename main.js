// personnage Jason le tueur en série 
const jason = {
    name: "Jason",
    pointsDeVie: 100

};

//tableaux de tous les survivants et leurs caractéristiques
    const prenoms = ["Niels","Garen","Brandon","Jack","Bruce"];
    const caracteristiques = ["hacker","musclé","combattant","discret","rapide"];

    //choix aléatoire des survivants & carac
    const survivants = [];
    for (let i = 0; i < 5; i++) {
        const nomAleatoire = prenoms[Math.floor(Math.random() * prenoms.length)];
        const caractereAleatoire = caracteristiques[Math.floor(Math.random() * caracteristiques.length)];
        survivants.push({
            nom: nomAleatoire,
            caractéristique: caractereAleatoire,
            pointsDeVie: 15
        });
    }-


     //faire une fonction pour les attaques et les proba de mourir... -> Survivants

function resoudreAttaque(attaquant, cible) {
 
    const probMourir = Math.random();
    const probEsquiver = Math.random();
    const probInfligerDegatsEtMourir = Math.random();
    //attaquer
   
    if (probMourir < 0.3) {
        
        console.log(`${attaquant.name} a massacré ${cible.nom}, le mec ${cible.caractéristique}`);
        cible.pointsDeVie = 0
    } else if (probEsquiver < 0.5) {
        console.log(`${cible.nom} a esquivé tel un chef et a ingfligé 10 de dégâts à ${attaquant.name}`);
        attaquant.pointsDeVie -= 10;
    } else if (probInfligerDegatsEtMourir < 0.1) {
        console.log(`${cible.nom} a infligé 15 de dégâts à ${attaquant.name} mais est dead en même temps`);
        attaquant.pointsDeVie -= 15;
        
    }
}


// faire une boucle de combat pour tuer Jason
while (jason.pointsDeVie > 0 && survivants.some (survivant => survivant.pointsDeVie > 0)) {
    for (const survivant of survivants) {
        if (survivant.pointsDeVie > 0) {
            resoudreAttaque(jason, survivant);
        }
    }

    for (const survivant of survivants) {
        if (survivant.pointsDeVie > 0) {
            resoudreAttaque(survivant, jason);
        }
    }
}


// COnclusion et résultats
console.log("Morts :");
if (jason.pointsDeVie <= 0) {
    console.log("Jason est finalement mort.");
} else {
    for (const survivant of survivants) {
        if (survivant.pointsDeVie <= 0) {
            console.log(`${survivant.nom} est malheureusement décédé.`);
        }
    }
}

if (jason.pointsDeVie <= 0) {
    console.log("Jason a été pulvérisé mais une minute de silence pour nos héros:");
    for (const survivant of survivants) {
        if (survivant.pointsDeVie > 0) {
            console.log(survivant.nom);
        }
    }
} else {
    console.log("Jason est trop fort, les survivants ne lui arrivent pas à la cheville");
}