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
    const enterName = prompt("Enter your name?");
    const changeName = document.querySelector("#name");//pour récupérer l'ID ou on doit mettre ce qui est écrit
    changeName.style.color = "white";
    changeName.innerHTML = enterName; 
    const enterColor = prompt("Entrer couleur");
    changedColor.style.backgroundColor = enterColor;//pour modifier la couleur, on la rentre sur le prompt
    btn.style.backgroundColor = enterColor;//idem pour changer le bouton
    //sur les class pink-bg et pink-text on veut les mettre d'une autre couleur :
    const changedColorBg = document.querySelectorAll(".pink-bg");
    const changedColorText = document.querySelectorAll(".pink-text");
    //on construit une boucle car avec All on a un tableau:
    for (let i = 0; i < changedColorBg.length; i++){
        changedColorBg[i].style.backgroundColor = enterColor;
    }
    for (let i = 0; i < changedColorText.length; i++){
        changedColorText[i].style.Color = enterColor;
    }
});
//pour changer la couleur des a dans le nav :
const links = document.querySelectorAll("a");
links.forEach(e => e.style.color = "#750ff7");


//on selectionne les 3 li pour mettre en texte toto:
const mdf = document.querySelector(".mdf");
mdf.addEventListener("click", function () {
    let li = document.querySelectorAll("#front-dev-tools li");
    for(let i = 0; i < li.length; i++){
        li[i].innerHTML = "toto"
    }
})
//Autre solution :
mdf.addEventListener("click", function(){
    let li = document.querySelectorAll("#front-dev-tools li");
    const arrayDev = ["VSCode", "Github", "Terminal"];
    for(let i = 0; i < li.length; i++){
        li[i].innerHTML = "toto"
    }
});
//solution Super bonus :
const addBackend = document.querySelector("#add-backend");
const btnBack = document.querySelector(".btn-back");
const backUl = document.querySelector("#back-ul");

btnBack.addEventListener("click", () => {
    let newList = document.createElement(li);
    newList.innerHTML = addBackend.value;
    backUl.appendChild(newList);
})
/*//Solution :
//Pour changer l'avatar :
const myAvatar = document.querySelector(".avatar-bis");
myAvatar.addEventListener("click", function(){
    myAvatar.src = ("./image/avatar.sgv");
});

//Pour changer le nom :
const btnName = document.createElement("button");
const btnPosition = document.querySelector(".pink-bg");

btn.addEventListener(`click`, function() {
    const enterName = prompt("Enter your name?");
    const changeName = document.querySelector("#name");//pour récupérer l'ID ou on doit mettre ce qui est écrit
    changeName.style.color = "white";
    changeName.innerHTML = enterName; //pour
});

*/