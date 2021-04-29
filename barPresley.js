function sumar(){

	var contador = parseInt(document.getElementById("id").value);

	contador = contador + 1;
	
	document.getElementById("id").value = contador;

}

function restar(){

	var contador = parseInt(document.getElementById("id").value);

	contador = contador - 1;
	
	document.getElementById("id").value = contador;

}

function sumar1(){

	var contador = parseInt(document.getElementById("id1").value);

	contador = contador + 1;
	
	document.getElementById("id1").value = contador;

}

function restar1(){

	var contador = parseInt(document.getElementById("id1").value);

	contador = contador - 1;
	
	document.getElementById("id1").value = contador;

}

function sumar2(){

	var contador = parseInt(document.getElementById("id2").value);

	contador = contador + 1;
	
	document.getElementById("id2").value = contador;

}

function restar2(){

	var contador = parseInt(document.getElementById("id2").value);

	contador = contador - 1;
	
	document.getElementById("id2").value = contador;

}

function sumar3(){

	var contador = parseInt(document.getElementById("id3").value);

	contador = contador + 1;
	
	document.getElementById("id3").value = contador;

}

function restar3(){

	var contador = parseInt(document.getElementById("id3").value);

	contador = contador - 1;
	
	document.getElementById("id3").value = contador;

}

function sumar4(){

	var contador = parseInt(document.getElementById("id4").value);

	contador = contador + 1;
	
	document.getElementById("id4").value = contador;

}

function restar4(){

	var contador = parseInt(document.getElementById("id4").value);

	contador = contador - 1;
	
	document.getElementById("id4").value = contador;

}

function sumar5(){

	var contador = parseInt(document.getElementById("id5").value);

	contador = contador + 1;
	
	document.getElementById("id5").value = contador;

}

function restar5(){

	var contador = parseInt(document.getElementById("id5").value);

	contador = contador - 1;
	
	document.getElementById("id5").value = contador;

}

function agregar_carrito(){

	var cafe = parseInt(document.getElementById("id5").value);
	var tortilla = parseInt(document.getElementById("id1").value);
	var desayuno = parseInt(document.getElementById("id2").value);
	var sandwich = parseInt(document.getElementById("id3").value);
	var pintxos = parseInt(document.getElementById("id4").value);
	var empanada = parseInt(document.getElementById("id5").value);

	if(cafe > 0){

		document.getElementById("carrito").setText("cafe x" + cafe "\n");

	}else if(tortilla > 0){

		document.getElementById("carrito").setText("tortilla x" + tortilla);

	}else if(desayuno > 0){

		document.getElementById("carrito").setText("desayuno x" + desayuno);

	}else if(sandwich > 0){

		document.getElementById("carrito").setText("sandwich x" + sandwich);

	}else if(pintxos > 0){

		document.getElementById("carrito").setText("pintxos x" + pintxos);

	}else if(empanada > 0){

		document.getElementById("carrito").setText("empanada x" + empanada);

	}				

}