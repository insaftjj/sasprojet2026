import promptSync from "prompt-sync";
import { apprenants } from "./data.js";
import { 
    ajouterApprenant, 
    rechercherApprenant, 
    enregistrerResultat, 
    calculerProgression
} from "./functions.js";
const prompt = promptSync({ sigint: true });


function afficherListeApprenants(liste) {
  if (liste.length === 0) {
    console.log("Aucun apprenant enregistré.");
    return;
  }

  for (const apprenant of liste) {
    console.log(`#${apprenant.id} - ${apprenant.nomComplet} (${apprenant.ville}) - ${apprenant.resultats.length} journée(s) renseignée(s)`);
  }
}

function afficherMenu() {
  console.log("================ MENU ================");
  console.log("1. Afficher la liste des apprenants");
  console.log("2. Ajouter un apprenant");
  console.log("3. Consulter/Rechercher un apprenant");
  console.log("4. Ajouter ou modifier le résultat d'une journée");
  console.log("5. Calculer la progression d'un apprenant");
  console.log("0. Quitter");
  console.log("=======================================");
}

function app() {
  let enExecution = true;

  while (enExecution) {
    afficherMenu();
    const choix = prompt("Choisissez une option : ").trim();

    switch (choix) {
      case "1":{
        console.log("Afficher la liste des apprenants")
        afficherListeApprenants(apprenants);
        break;
      }
      case "2": {
        console.log(" Ajouter un apprenant");
        const nom = prompt("Nom complet : ");
        const ville = prompt("Ville : ");
        const ajoute = ajouterApprenant(nom, ville);
        if (ajoute) {
          console.log("Apprenant ajouté avec succès.");
        }
        break;
      }

      case "3": {
        console.log("Rechercher un apprenant");
        const terme = prompt("Entrez l'ID ou le Nom : ");
        const resultat = rechercherApprenant(terme);
        console.log(resultat ? resultat : "Aucun apprenant trouvé.");
        break;
      }

      case "4": {
        console.log("  Ajouter ou modifier le résultat d'une journée");
        const id = parseInt(prompt("ID de l'apprenant : "));
        const jour = parseInt(prompt("Numéro du jour : "));
        const exTermines = parseInt(prompt("Exercices terminés : "));
        const totalEx = parseInt(prompt("Total exercices : "));
        const challenge = prompt("Challenge terminé (oui/non) : ").toLowerCase() === "oui";

        const enregistre = enregistrerResultat(id, {
          jour: jour,
          exercicesTermines: exTermines,
          totalExercices: totalEx,
          challengeTermine: challenge
        });
        if (enregistre) {
          console.log(`Résultat du jour ${jour} enregistré.`);
        }
        break;
      }

      case "5": {
        console.log(" Calculer la progression d'un apprenant");
        const id = parseInt(prompt("ID de l'apprenant : "));
        console.log(`Progression : ${calculerProgression(id)}%`);
        break;
      }
      case "0":
        console.log("Au revoir !"); 
        enExecution = false;
        break;

      default:
        console.log("Option invalide. Veuillez saisir un nombre valide.");
    }
  }
 }

app();
