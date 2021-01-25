window.onload  = function(){
    //before
    var p = document.getElementsByTagName("p");
    var greenP = document.getElementsByID("green");
    var p1 = document.getElementsByClassName("p1")
    console.log("greenP: ", greenP);
//today 
    var pWithQuerySelectorByTagName= document.querySelector("P");
    var pWithQuerySelectorByTagId = document.querySelector("#green");
    var pWithQuerySelectorBCalssName=document.querySelector(".p1");

    console.log("pWithQuerySelectorByTagName: ", pWithQuerySelectorByTagName)

    

}