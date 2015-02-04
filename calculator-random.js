
function calculator(){
	var op = document.getElementById("op");
	var sentence = op.innerHTML;
	var res = sentence.split("+");
	var a = parseInt(res[0]);
	var b = parseInt(res[1]);
	var result = a + b;
	var final = result.toString(); 
	changer("res", final);

}

function changer (id, newValue) {
	var element = document.getElementById(id);
	element.innerHTML = "= "+newValue;
}

function calcRandom(){
	var numAleatorio1 = Math.floor(Math.random()*10000000000000000);
	var numAleatorio2 = Math.floor(Math.random()*10000000000000000);
	var op = document.getElementById("op");
	op.innerHTML = numAleatorio1.toString() + " + " + numAleatorio2.toString();
}
