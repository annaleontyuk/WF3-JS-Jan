/*var panier = [{
    nomFruit: "banane",
    quantity: 4,
    price: 3
},
{
    nomFruit: "fraise",
    quantity: 3,
    price: 5
},
{
    nomFruit: "mango",
    quantity: 2,
    price: 10

}

];
*/

//or

let panier = new Map();

panier.set("banane", {prix:3, quantity: 4});
panier.set("fraise", {prix:5, quantity: 3});
panier.set("mango", {prix:10, quantity: 2});

let prixTotal = 0;

for(let[key, value] of panier){
    console.log(key);
    console.log(value.prix*value.quantity);
    //let calcul=value.prix*value.quantity;
    //prixTotal=prixTotal+calcul;

    prixTotal=prixTotal + (value.prix * value.quantity);
}

console.log("prix total du panier: ", prixTotal);
