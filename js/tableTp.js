window.onload  = function(){


var fruitsLegumes = ["banane", "fraise", "orange", "avocado",  "celerie", "choux", "clementine", "mango", "ananas", "durian", "concombre", "bokchoi"];

var panier = [];
console.log(fruitsLegumes);
console.log(panier);

let count=fruitsLegumes.length;
 for(i=0; i < count; i++){
     let fruit= fruitsLegumes.pop();
     panier.push(fruit);
 }

console.log(fruitsLegumes);
console.log(panier);


}
