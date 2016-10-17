/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function clickbutton(){
    var titre = document.getElementById("titre");
    var menu = document.getElementsByClassName("menu");
    var contenu = document.getElementsByName("");
    
    titre.innerHTML = "yo dude !";
    
    for (var i = 0; i < menu.length; i++) {
        menu[i].innerHTML = "bonjour !";
    }
        
}


function clickbutton2(){
/*    
    var txt = document.getElementById("texte").value;
    
    txt = txt.toUpperCase();
    
    document.getElementById("texte").value = txt;
    */
    
    document.getElementById("titre").innerHTML = document.getElementById("texte").value.toUpperCase();
    
}

function clickbutton3(URLcible){
    
    //document.getElementById("result").innerHTML = URLcible;
    $('.contenu').load(URLcible);
}
