window.onload  = function(){
    //before
        var div = document.getElementsByTagName("div"); //by tag
        var idcard = document.getElementById("card"); //by id
        var classcard = document.getElementsByClassName("card"); //by class
        var p = document.getElementsByTagName("p");
        console.log("div: ", div, "idcard: ", idcard, "classcard: ", classcard, "p: ", p);
    //today 
        var divWithQuerySelectorByTagName= document.querySelector("div");
        var divWithQuerySelectorById = document.querySelector("#card");
        var divWithQuerySelectorByClassName=document.querySelector(".card");
        var getAllpWithQuerySelectorAll = document.querySelectorAll("p");
    
        console.log("divWithQuerySelectorByTagName: ", divWithQuerySelectorByTagName, 
        "divWithQuerySelectorById: ", divWithQuerySelectorById,"divWithQuerySelectorByClassName: ", divWithQuerySelectorByClassName, "getAllpWithQuerySelectorAll: ", getAllpWithQuerySelectorAll);
    }