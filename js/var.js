window.onload  = function(){
   // les types de valeurs des variables
   
   var a = 1;
   var b  = "";
   var c = [1, "", {}, function(){}, false, true];
   var d = {
       color: "red",
       number: 1,
       tableau: [],
       fonction: function(){},
       bool1: true,
       bool2:false
   };
   console.log("type property color: ",typeof d.color, "property color: ", d.color);

   var e= function(){};
   var f = true || false;

};

