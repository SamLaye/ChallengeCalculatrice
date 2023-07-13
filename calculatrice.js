let operation = document.getElementById("operation");
let resultat = document.getElementById("resultat");
let zero = 0;
zero = parseInt(zero)

function afficher9(){
	if(operation.value == zero){
		operation.value = "";
	}
	operation.value = operation.value + "9"; 
}

function afficher8(){
	if(operation.value == zero){
		operation.value = "";
	}
	operation.value = operation.value + "8"; 
}

function afficher7(){
	if(operation.value == zero){
		operation.value = "";
	}
	operation.value = operation.value + "7"; 
}

function afficher6(){
	if(operation.value == zero){
		operation.value = "";
	}
	operation.value = operation.value + "6"; 
}

function afficher5(){
	if(operation.value == zero){
		operation.value = "";
	}
	operation.value = operation.value + "5"; 
}

function afficher4(){
	if(operation.value == zero){
		operation.value = "";
	}
	operation.value = operation.value + "4"; 
}

function afficher3(){
	if(operation.value == zero){
		operation.value = "";
	}
	operation.value = operation.value + "3"; 
}

function afficher2(){
	if(operation.value == zero){
		operation.value = "";
	}
	operation.value = operation.value + "2"; 
}

function afficher1(){
	if(operation.value == zero){
		operation.value = "";
	}
	operation.value = operation.value + "1"; 
}

function afficher0(){
	if(operation.value == zero){
		operation.value = "";
	}
	operation.value = operation.value + "0"; 
}

function afficherPoint(){
	operation.value = operation.value + "."; 
}

function division(){
	operation.value = operation.value + " / "; 
}

function multiplication(){
	operation.value = operation.value + " * "; 
}

function addition(){
	operation.value = operation.value + " + "; 
}

function soustraction(){
	operation.value = operation.value + " - "; 
}

function calculer(){
	let premierCaractere = operation.value.charAt(0)
	console.log(premierCaractere)
	if(premierCaractere == "/" || premierCaractere == "*")
	{
		operation.value = "Syntaxe error"
		console.log("Syntaxe error")
	}
	else
	{
		// La fonction eval() prend une chaîne de caractères en argument et l'évalue comme du code JavaScript.
		let resultatOperation = eval(operation.value)

		resultat.value = resultatOperation;
	}
}

function CE_action(){
	operation.value = zero;
}

function C_action(){
	operation.value = zero;
	resultat.value = zero;
}


// CE QUE J'AI APPRIS
// _La fonction eval(): qui permet de transformer une expression mathematique présente
// dans un "string" afin de pouvoir le calculer
// _La fonction charAt(n): qui renvoie le caractère situé à la position 'n' d'un "string"