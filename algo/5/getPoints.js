/* Notre équipe de football participe à un championnat
dans laquelle elle a joué 10 matchs.
Le résultat d'un match est comme suit : "3-0"
Le premier chiffre correspond au nombre de but que notre équipe a marqué.
Le deuxième correspond au nombre de but que notre adversaire a marqué.
Victoire : +3 points
Match nul : +1 points
Défaite : +0 point
Ci-dessous, tu as un tableau avec tous les résultats de notre équipe,
qui te permet de tester si ta fonction est bonne. Le résultat doit être 13
écris la fonction qui nous permet de récupérer le nombre
de points de notre équipe à la fin du championnat
*/

const scores = ['1:0', '2:0', '3:0', '4:4', '2:2', '3:3', '1:4', '2:3', '2:4', '3:3'];

function getPoints(array) {
  // Your code here !
}

module.exports = getPoints;
//Solution :
function getPoints(array) {
  let point = 0;
  array.forEach(result => {
    const score = result.split(":");
    for (let i = 0; i < score.lenght; i++) {
      if(score[i] > score[i+1]){
        point +=3;
      }else if (score[i] == score[i+1]){
        point +=1;
      } else {
        point +=0;
      }
    }
  })
  return point;
}

//Autre solution :

function getPoints(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++){
    const chars = array[i].split("");
    if (chars[0] > chars[2]) {
      sum = sum + 3;
    } else if (chars[0] == chars[2]) {
      sum = sum + 1;
    }
  }
  return sum;
}