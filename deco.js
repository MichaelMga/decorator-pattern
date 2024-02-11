class Produit {

    constructor(nom, prix){
        this.nom = nom;
        this.prix = prix;
    }

    voirLePrix(){
        return this.prix;
    }
}

class InflationDecorateur {
    
    constructor(produit){
        this.produit = produit;
    }

    voirLePrix(){
        return this.produit.prix * 1.2;
    }
}


const chaussure = new Produit("chaussure", 50);

console.log("chaussure sans inflation >")

console.log(chaussure.voirLePrix());

console.log("chaussure avec inflation >")

const decorateur = new InflationDecorateur(chaussure);

console.log(decorateur.voirLePrix());

