import { apprenants } from "./data.js"; 
export function normaliserNom(nom) {
      return nom.trim().toLowerCase();
}
export function validerResultat(jour, exercicesTermines, totalExercices) {
    if (jour < 1 || jour > 7) {
        return false;
    }

    if (exercicesTermines > totalExercices) {
        return false;
    }

    if ( exercicesTermines < 0 || totalExercices < 0){
        return false; 
    }

    return true;
}
 export function ajouterApprenant(nomComplet, ville) {
    for (let i of apprenants) {
        if (nomComplet === i.nomComplet) {
            console.log("Cet apprenant existe déjà !");
            return false;
        }
    }
    const object = {
        id: apprenants.length + 1,
        nomComplet: normaliserNom(nomComplet),
        ville: ville,
        resultat: []
    };

    apprenants.push(object);
    return true;
}
export function enregistrerResultat(id,resultat) {
    for(let apprenant of apprenants) {
        if(apprenant.id=== id)
        {
            for(let i=0;i<apprenant.resultats.length; i++)
            {
                if(apprenant.resultats[i].jour===resultat.jour){
                    apprenant.resultats[i]=resultat;
                    return;
                }
            }
            apprenant.resultats.push(resultat);
            return;
        }
    }
}
export function rechercherApprenant(recherch) {
    for(let persone of nomComplet){
        if(id.nomComplet===id){
            return nomComplet;
        }
    }
    return null
}

