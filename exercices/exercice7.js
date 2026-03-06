let nomProduit = "Clavier mécanique"
let prix = 89.99
let quantite = 3
let codePromo = null
let reductionPourcentage = 10
let estMembre = true
let soldeCompte = 250

/* pour le  Sous-total*/
let sousTotal = prix * quantite
console.log("Sous-total : " + sousTotal + " MAD")

/*  pour Calculer réduction*/
let reduction = 0

if (codePromo !== null && estMembre) {
    reduction = sousTotal * reductionPourcentage / 100
}

console.log("Réduction : " + reduction + " MAD")

/*  Total final*/
let total = sousTotal - reduction
console.log("Total : " + total + " MAD")

/* Vérification de solde*/
let statut = ""

if (soldeCompte >= total) {
    statut = "Paiement accepté"
} else {
    statut = "Solde insuffisant"
}

console.log(statut)

/*Nouveau solde*/
let nouveauSolde = soldeCompte

if (statut === "Paiement accepté") {
    nouveauSolde = soldeCompte - total
    console.log("Nouveau solde : " + nouveauSolde + " MAD")
}

/* Récapitulatif final*/
console.log("===== RÉCAPITULATIF =====")
console.log("Produit   : " + nomProduit)
console.log("Quantité  : " + quantite)
console.log("Prix unit.: " + prix + " MAD")
console.log("Sous-total: " + sousTotal + " MAD")
console.log("Réduction : " + reduction + " MAD")
console.log("Total     : " + total + " MAD")
console.log("Statut    : " + statut)
console.log("Solde     : " + nouveauSolde + " MAD")
console.log("=========================")