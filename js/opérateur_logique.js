//alert("test");

/* L'opérateur ET : && ou AND */

//Si je cumule 2 conditions :

//=> prenom === prenomLogin
//=> monAge === ageLogin
// pour que les 2 correspondent pour être validés il faut les associer

if((prenomLogin === prenom) && (ageLogin === monAge)){
    /*----Code----*/
    /* je ne rentre ici que si les 2 conditions sont vraies*/
};

if ((A) && (B)){...}
=>si A est FAUX  B est vrai=> FAUX
=>si A est VRAI B est faux=> FAUX
=>si A est FAUX  B est faux=> FAUX
=>si A est VRAI B est vrai=> VRAI
/*
L'opérateur OU : || ou OR (| pipe => alt gr + 6)
*/

var utilisateurLog = true;
if(!utilisateurLog){
   //si l'utilisateur n'est pas loggé
}
// ce qui revient à écrire :
if(utilisateurLog == false){
   //si l'utilisateur n'est pas loggé
}