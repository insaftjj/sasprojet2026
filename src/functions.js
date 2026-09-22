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
    const nomNormalise = normaliserNom(nomComplet);

    for (let apprenant of apprenants) {
        if (nomNormalise === normaliserNom(apprenant.nomComplet)) {
            console.log("Cet apprenant existe déjà !");
            return false;
        }
    }

       let nouvelId = 1
       if(apprenants.length>0){
       nouvelId = apprenants[apprenants.length-1].id+1;

    }

    const object = {
        id: nouvelId,
        nomComplet: nomComplet.trim(),
        ville: ville,
        resultats: []
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
    for(let persone of apprenants){
        if (persone.id == recherch || persone.nomComplet === recherch){
            return persone;
        }
    }
    return null
}
export function calculerProgression(id) {
    let apprenant= rechercherApprenant(id);
    if(apprenant=== null) {
        return 0
    }
    let totalExercices = 0
    let exercicesTermines =0;
    for(let  resultat of apprenant.resultats){
        totalExercices += resultat.totalExercices;
        exercicesTermines += resultat.exercicesTermines;
    }
    return Math.round((exercicesTermines/totalExercices)*100);

}