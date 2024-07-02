import { quizContent } from './questionnaires.js';

let quizContainer = document.getElementById('game-content');
let indiceJeu=0 ;
const boutonDebuter = document.getElementById('debuter_jeu');



function debuterJeu(){
quizContainer.innerHTML = quizContent[indiceJeu];
indiceJeu+=1
}


boutonDebuter.addEventListener('click', () => {
switch (indiceJeu){

case 0:
    debuterJeu();
    boutonDebuter.textContent='QUESTION SUIVANTE';
break;

case quizContent.length-2:
    quizContainer.innerHTML = quizContent[indiceJeu];
    boutonDebuter.textContent='VOIR MON RÉSULTAT';
    indiceJeu+=1
break;

case quizContent.length-1:
    quizContainer.innerHTML = quizContent[indiceJeu];
    boutonDebuter.textContent='REPRENDRE';
    indiceJeu=0;
    break;

    default:
    debuterJeu();
}

});