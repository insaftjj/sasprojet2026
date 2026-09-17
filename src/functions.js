

import { apprenants } from "./data.js"; 
export function normaliserNom(nom) {
      return nom.trim().toLowerCase();
}
export function
validerResultatt(resultat){
    return typeof resultat==='number' && resultat >= 0 && resultat <=20;
}
export function
ajouterApprenant(nomcomplet,ville){
    const nouvelApprenant = {
        id: apprenants.length + 1,
        nomComplet: normaliserNom(nomComplet),
        ville: ville,
        resultat:[]
    };
apprenants.push(nouvelApprenant);
    return nouvelApprenant;
}  