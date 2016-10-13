/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


alert('yo !');

    

/*
alert('yo !');   

var txtInput = prompt('saisissez votre message');
var txt = prompt('saisissez votre recherche');
alert(txt.toUpperCase());
*/

var tab = ['abc', 1, 2, "et", 78, 'jklm'];
tab.pop();
tab.pop();
console.log(tab);

var objet = { titre: "Kung fu Panda", annee: 2000, nbliens: 20,
             reals: [{nom: 'disney'}, {nom: "pixar"}]
            };
objet;


var tab = ['abc', 1, 2, "et", 78, 'jklm'];
tab.pop();
tab.pop();
console.log(tab);

var objet = {  titre: "Kung fu Panda", 
               annee: 2000, 
               nbliens: 20,
               reals: [{nom: 'disney'}, 
                       {nom: "pixar"}],
               affiche: function() {
                   console.log(this)
                   return(null);
               }
            };
objet.affiche();


var i = 0;

var id = setInterval(function() {
  console.log(i++);
  
}, 1000);

clearInterval(id);

/*****************************************************************/

var guess = 4; 
/*
alert(*/
  Math.ceil( Math.random() * 100)
//);
  
var inp = prompt("Entrez votre valeur");
var t = 0;

do{  
    t++;
  if (guess>inp)
    inp = prompt("Plus grand, essaye encore...");
  else if (guess<inp)
    inp = prompt("Plus petit, essaye encore...");
    } while(inp!=guess);

var r="";
switch(t)
{
    case 1: r = "génial"; break;
    case 2: r = "super"; break;
    case 3: r = "tres bien"; break;
    case 4: r = "bien"; break;
    default: r = "nul"; 
}

prompt("Bingo !! " + t + " essais. " + r );
