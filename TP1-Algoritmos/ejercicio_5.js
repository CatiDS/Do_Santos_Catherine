let dato, resultado; //Declara las variables dato y resultado 
val1 = window.prompt("Introduce tu nombre", "...");// Muestra un cuadro de diálogo
//  en el navegador web con un msj que solicita al usuario el ingreso del nombre
//  y lo guarda en la variable val1
val2 = window.prompt("Introduce tu apellido", "...");// Muestra un cuadro de diálogo 
// en el navegador web con un msj que solicita al usuario el ingreso del apellido y
// lo guarda en la variable val2
resultado = `Concatenado tu nombre y apellido es: ${val1} ${val2} ` ;// Guarda en 
// la variable resultado un string con un mensaje al cual le concatena los valores 
// guardados en val1 y val2
document.write(resultado); //Muestra en el navegador web el contenido 
//de la variable resultado (un string)