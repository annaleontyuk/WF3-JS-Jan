window.onload  = function(){
    //boucle for (local var) i: number
    for (var i = 0; i <= 10; i= i + 1) {
        console.log("boucle for: ", i)
    }
    //boucle while
    var j = 0;
    while(j <= 10) {
        console.log("boucle while: ", j);
        j = j + 1;
    }
 
    //Table
 
    var table= ["hello", "world"];
    console.log("value table 0: ",table[0]);
    console.log("value table 1: ",table[1]);
 
    //Pour afficher tout le contenu du table à l'aide d'une  boucle
 
    for(k=0; k < 2; k = k+1){
        console.log("boucle + table: ", "indice: ",k, "value: ", table[k]);
 
    }
 
    //TP 2
    //Parcourir le table de couleur et l'afficher dans la console
 
    var  tableColors = ["red", "blue", "white", "black", "orange", "tomato", "yellow"];
    var length = tableColors.length;
 
    for (t=0; t<length; t=t+1){
        console.log("table colors: ", "key: ", t, "value: ", tableColors[t]);
    }
 
    //or
 
    for (t=0; t<tableColors.length; t=t+1){
     console.log("table colors: ", "key: ", t, "value: ", tableColors[t]);
 }

}
 