var compteur =0;
var compteur2 =0;

var Madiv= document.getElementById("Methode2")
Madiv.addEventListener("click", UneProcedureQuiChangeLeText);

var Madiv= document.getElementById("Methode3")
Madiv.addEventListener("mouseover", UneProcedureQuiSurvole);

var Madiv= document.getElementById("Methode4")
Madiv.addEventListener("keydown", UneProcedureQuiEcrit);

function UneProcedureQuiEcrit(evenment) {
    evenment.target.innerHTML= "La dernière touche appuyé est: "+evenment.key;
}

function UneProcedureQuiChangeLeText(evenment) {
    compteur++;
    evenment.target.innerHTML ="Nombre de clic: "+compteur;
}

function UneProcedureQuiSurvole(evenment){
    compteur2++;
    evenment.target.innerHTML = "Nombre de passage dessus: "+compteur2;
}