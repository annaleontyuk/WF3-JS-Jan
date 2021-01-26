var panier = {
    banane: 4,
    fraise: 10,
    celerie: 2,
    radis: 3,
    mango: 15
};

//var prixTotalFruitsLegumes = " ";

var total=0;
 for(var key in panier) {

    ++total;
 }

 console.log(total);

 //or

 var prixTotal = function(){
     var total = 0;
     for(var  i=0; i<panier.length; i++){
         total= total + panier[i].Amount;
     }

     return total;

 }

 console.log(panier.sum("Amount"));