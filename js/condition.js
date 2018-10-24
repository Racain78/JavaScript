//alert("yo");

//Structure de IF

if(true){/* par défaut la condition à verifier le IF vérifie si elle est vrai*/
     /*..... Votre condition ......*/
}

//var nb1 = 10;

//if(nb1 < 50){
    //console.log("nb1 est bien inférieur à 50");
//}

//if(true){
    /* ... code si VRAI ... */
//} else{
    /* ... code si FAUX ... */
//}

/*if(nb1 > 50){
    console.log("nb1 est bien supérieur à 50");
} else{
    console.log("nb1 n'est pas supérieur à 50");
}*/

var MajoriteFR = 18;

// demander l'âge en s'assurant que nous avons bien un NUMBER
var age = parseInt(prompt("Indiquez votre âge"));

if(age >= MajoriteFR){// Bienvenue si vrai
    alert("Bienvenue, vous êtes majeur");
} else{
    // si il est mineur je lui signale
    alert("Allez voir un autre site ...");
    document.location.href="https://www.youtube.com/watch?v=-HBkU7dsiJU";
}