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

//Loop (iteration) same principle as "for" used in TP

    var table2 = ["foo", "bat", "foo", "baz"];

    for(var item of table2){ //"for/of" for tables
        console.log("item table: ", item);
    }

    var monObj = {
        foo: "bar",
        hello: "world",
        age: 30
    }
    for(var keyObject in  monObj){ //"for/in" for objects
        console.log("key: ", keyObject, "value: ", monObj[keyObject]);
    }

    //TP iteration object for/in
    //

    var fruits = {
        pomme: 4,
        poire: 0,
        banane: 10,
        tomate:6
    }

    for(var property in fruits){
        console.log("key: ",property, "has value: ", fruits[property]);
    }

//Comment ajouter dans un table

    var table3=[];
    console.log("table is empty: ".  table3);
    table3[5]="tomate";
    console.log("table after adding stuff: ", table3);
    console.log(table3[5]);

//push method add an item at the end of a table

table3.push("banane");
console.log("add an item at the end of a table: ",table3);

//pop method to delete last item in a table

    table3.pop()
    console.log("delete last entry with pop: ", table3);


//shift method to delete the first item from a table
    table3.shift();
    console.log("delete first item with shift: ", table3);



}
