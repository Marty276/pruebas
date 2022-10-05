
const calcular = document.getElementById("calcular");

calcular.addEventListener("click", Respuesta);

function Respuesta(){
	
	let pc1 = document.getElementById("p1").value;
	let pc2 = document.getElementById("p2").value;
	let pc3 = document.getElementById("p3").value;
	
	let p1 = Number(pc1);
	let p2 = Number(pc2);
	let p3 = Number(pc3);
	console.log(p1, p2, p3);
	
	if(p1 > 5){
		p1 /= 10;
		p2 /= 10;
		p3 /= 10;
	}
	
	const minima = 30;
	
	//PROMEDIO
	let prom = (p1 + p2 + p3) / 3;
	console.log(prom);
	
	//ESTADO ACTUAL
	if(prom >= 30){
		let actualstatus = "aprobando";
	}
	else{
		let actualstatus = "reprobando";
	}
	
	//MÁXIMA POSIBLE
	let maxima = (p1 + p2 + p3 + 5) / 4;
	
	//POSIBILIDAD
	if(maxima >= 3){
		var posibilidadap = true;
		console.log(posibilidadap);
	}
	else{
		var posibilidadap = false;
	}
	
	if((p1 + p2 + p3) >= 11){
		var posibilidadrp = false;
	}
	else{
		var posibilidadrp = true;
	}
	
	//NOTA NECESARIA
	let necesaria = 12 - prom * 3;
	
	//SALIDA
	
	let anssqr = document.getElementById("anssqr");
	let ans = document.getElementById("ans");
	
	anssqr.style.visibility = "visible";
	ans.innerHTML = "<h2>Resultados</h2>"
	
	console.log(posibilidadap);
	
	//POSIBILIDAD DE APROBAR
	if(posibilidadap == true && posibilidadrp == false){
		ans.innerHTML += "<p>¡Felicidades! Esta materia está aprobada en el año (por más que repruebes el último periodo)<br>";
	}
	else if(posibilidadap == false){
		ans.innerHTML += "<p>Lo siento, con tus notas actuales no es posible aprobar la materia en el año</p><br>";
	}
	
	//NOTA NECESARIA
	if(posibilidadap == true){
		ans.innerHTML += "<p>La nota que necesitas para aprobar es:</p><h3>" + necesaria.toFixed(2) + "</h3";
	}
	else{
		ans.innerHTML += "<p>La nota que necesitarías para aprobar es:</p><h3>" + necesaria.toFixed(2) + "</h3";
	}
	
	//PROMEDIO
	ans.innerHTML += "<p>Actualmente tienes un promedio de: </p><h3>" + prom.toFixed(2) + "</h3";
	

	//NOTA MÁXIMA
	ans.innerHTML += "<p>La nota máxima con la que podrás pasar si tienes un <b>5.0</b> en este periodo es: </p><h3>" + maxima.toFixed(2) + "</h3";
	
	//BOTÓN LIMPIAR
	ans.innerHTML += '<button class="btnlimpiar" id="clean">Limpiar</button>'
	const cleanbtn = document.getElementById("clean");
	cleanbtn.addEventListener("click", Limpiar);
	function Limpiar(){
		anssqr.style.visibility = "hidden";
	}
}
