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


//Création du bouton
const btn = document.createElement("button");
//Mise du texte dans le bouton
const text = document.createTextNode("Modifier le prémon");
//Je mets le texte dans le boutton
btn.appendChild(text);
//Je créé une class au bouton
btn.classList.add("classbtn");
//Je sélectionne la div existante où je veux le placer
const divBtn = document.querySelector(`.description`);
//Je mets le bouton dans la div 
divBtn.appendChild(btn);

//J'appelle le bouton pour lui mettre des propriétés :
const newBtn = document.querySelector(".classbtn");
newBtn.style.color = "white";//couleur du texte
newBtn.style.backgroundColor = "pink"; //couleur de fond

//J'appelle le btn pour Q qd je clique dessus, un prompt s'ouvre :
//Ce qui va être écrit dans remplacer Matt qui est en id name en HTML =>donc je le sélectionne
const remplace = document.querySelector("#name");
const newName = prompt("What's your name ?");

btn.addEventListener(`click`, function () {
    
    window.innerHTML = " ";
    
});


