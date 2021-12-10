//creation fonction
class Vehicule {

    constructor(couleur, roues, marque) {
       this.couleur = couleur;
       this.roues = roues;
       this.marque = marque;
   };

    demarrer() {
        console.log("Mon véhicule démarre");
    };

    arreter() {
        console.log("Nous sommes arrivés");
    };

    specificite() {
        return "Couleur: " + this.couleur + ", " + " NombreRoues: " + this.roues + ", Marque: " + this.marque;
    };
}

let vehicule = new Vehicule('Noir', "4", "Audi");

console.log(vehicule.specificite());
vehicule.demarrer();
vehicule.arreter();


//Velo
class Velo extends Vehicule {
   constructor(couleur, roue, marque, rayonRoues, typePeinture) {
       super(couleur, roue, marque);
       this.rayonRoues = rayonRoues;
       this.typePeinture = typePeinture;
   }

   monter() {
        console.log("Je monte sur mon vélo");
    }
}

let velo = new Velo("Noir", "2", "BMC", "20pouces", "Pétant");

console.log(velo.specificite());
velo.monter();
console.log(Velo);

//Voiture
class Voiture extends Vehicules {
   constructor(couleur, roue, marque, assurance, proprietaire) {
       super(couleur, roue, marque);
       this.assurance = assurance;
       this.proprietaire = proprietaire;
    }

    passerAuCarWash() {
        console.log("Ma voiture va être nettoyé");
    }
}

let voiture = new Voiture("Noir", "4", "BMW", "Jsp", "Moi");

console.log(voiture.specificite());
voiture.passerAuCarWash();
console.log(Voiture);