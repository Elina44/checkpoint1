/* On te donne 2 angles d'un triangle.
écris la fonction qui permet de récupérer la valeur du 3e angle.
(Pour rappel, la somme des 3 angles d'un triangle est toujours égale à 180)
Exemple :
thirdAngle(90, 30) doit renvoyer 60
thirdAngle(20, 80) doit renvoyer 80
*/


function thirdAngle(a, b) {
  // Your code here !
  const sum = a + b;
  const result = 180 - sum;
  return result;
}

//ou :
//on retrourne directement la réponse : de 180 on enlève la somme des 2 angles
function thirdAngle(a, b) {
  return 180 - (a + b)
}
console.log(thirdAngle(90, 30));

module.exports = thirdAngle;
