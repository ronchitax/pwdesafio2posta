var genero = prompt('ingrese su género');
var edad = prompt('ingrese su edad');
var mensaje;

if(genero=="male"){
		mensaje="sr";
	} else if (genero=="female") {
		mensaje="sra";
	} else {
		mensaje="srx";
	}
if (edad<18){
	mensaje+=" usted no puede entrar";
} else {
	mensaje+=" usted puede entrar";
}

alert("hola " + mensaje);