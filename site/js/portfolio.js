//On veut qu'au click, la photo de l'avatar change :
//Je sélectionne ma class où je veux mettre la nvelle photo:
const secondAvatar = document.querySelector('.imgavatar');
//console.log(secondAvatar);

//Je mets la source de la 2è photo:
//secondAvatar.src = "image/avatar.svg";

//fonction pour créer l'évènement :
secondAvatar.addEventListener(`click`, function(){
    alert(secondAvatar.src = "image/avatar.svg");
});

//Changer le nom et Matt en David avec un prompt :
//Je sélectionne mon élément à modifier :
//const newName = document.querySelector(`#name`);
//console.log(newName);
//const user = prompt("What's your name ?");


const divBtn = document.querySelector(`.description`);
const btn = document.createElement("button");
const text = document.createTextNode("Modifier le prémon");
btn.appendChild(text);
document.divBtn.appendChild(btn);