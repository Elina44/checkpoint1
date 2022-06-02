/*
Un employé de théatre souhaiterait obtenir la liste de tous les sièges présents dans sa salle principale.
Dans la salle les sièges sont répartis de la manière suivantes : 
  - Il y a 26 colonnes de sièges, numérotés de "1" à "26"
  - Chaque colonne contient 100 sièges, numérotés de "1" à "100"

Compléter la fonction theaterSieges de manière à ce qu'elle retourne une matrice 
où chaque sous-tableau liste les positions des sieges d'une rangée.

exemple :

[
  ['1-1', '1-2', '1-3', ..., '1-100'], 
  ['2-1', '2-2', '2-3', ..., '2-100'],
  ... 
  ['26-1', '26-2', '26-3', ..., '26-100']
] 
*/
//Je créé mes 2 tableaux:
const siege = [ [numberColumn], [numberRang] ];

function theaterSieges(siege){
  for ( let i = 0; i < i; i++){
    for (let j = 0; j < [i].length; j++){
      console.log(siege[i][j]);
    }
  }
}

//Correction:
function theaterSieges(){
  let colonne = Array(26);
  let siege = Array(100);
  for(let i = 0; i < 26; i++){
    colonne[i] = Array(26);
    for(let j = 0; j < 100; j++){
      siege[j] = Array(100)
      colonne[i][j] = (i + 1) + "-" +(j + 1)
    }
  }
  return colonne
}

//Autre solution :
function theaterSieges() {
  colonnes = [1,2,26];
  rangeeSieges = [1,100];
  for (let i = 0; i < colonnes.length; i++) {
    for (let j = 0; j < rangeeSieges.length; j++);
    return colonne[i]+ "-"+rangeeSieges[j];
  }
}
//Solution Amina :

function theaterSieges() {
  const arrayTheatre = [];//on crée un 1er tableau pour les colonnes
  for (let i = 1; i < 27; i++){//on met i = 1 pour commencer à compter à 1 et pas zéro; conséquence on va jsq 27
    const newArray = [];//on créé le 2è tableau
    for (let j = 1; j < 101; j++) {
      newArray.push(i + "-" + j);
    }
    arrayTheatre.push(newArray);
  }
  return arrayTheatre;
}


/*const sieges = [
  {numberColonne: <27}, 
  {numberRang: <101}  
  ]
*/
/*function theaterSieges(sieges) {
  // Your code here !
  const colonne = colonneSiege;
  maximun = colonne
  const rang = rangSiege;

  const theaterSiege = {};
  for ( let i = 0; i < 100; i++){
    for (let j = 0; j < 26[i].length; j++){
      console.log(sieges[i][j]);
    }
  }
}

//console.log(theaterSieges());
*/
module.exports = theaterSieges;
