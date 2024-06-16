
var valores = [true, false, 2 ,"hola", "mundo", 3, "char"];
band=0;
mayor=0;
var arreglo1 = [];
var arreglo2= [];
/// punto 1
for (const val of valores) {
    if (typeof(val)=="string") {
        arreglo1.unshift(val);
            if(band==0){
                 mayor= val;
                band++}
        if(val.length>mayor.length){
                    mayor=val;
            }
     }
     else{ 
        if (typeof(val)=="number"){
            arreglo2.unshift(val);
            }

     }

            }

document.write(`------------- 1 -------------</br>`);
document.write(`</br>`);
document.write(`El elemento de texto mayor es: ${mayor} `);
document.write(`</br>`);


//punto 2

aux=0;
b= arreglo1.length;
for (i=0; i<(b-1);i++) {
    if ((arreglo1[i]).length>(arreglo1[i+1]).length) {
        aux= arreglo1[i];
        arreglo1[i]=arreglo1[i+1];
        arreglo1[i+1]=aux;
        i=-1;
    }
}
document.write(`</br>------------- 2 -------------</br>`);
document.write(`</br>`);
document.write("Elementos de texto de menor a mayor cantidad de letras: ")
document.write(`</br>`);
document.write(arreglo1);
document.write(`</br>`);


//punto 3


a= arreglo2[0];
b= arreglo2[1];


suma= a+b;
resta= a-b;
div= a/b;
mult= a+b;
document.write(`</br>------------- 3 -------------</br>`);
document.write(`</br>`);
document.write(`Operaciones matemáticas básicas entre ${a} y ${b}: </br>`);
document.write(`</br>`);
document.write(`La suma de: ${a} + ${b} es igual a: ${suma} </br>`);
document.write(`La resta de: ${a} - ${b} es igual a: ${resta} </br>`);
document.write(`La división de: ${a} / ${b} es igual a: ${div} </br>`);
document.write(`La multiplicación de: ${a} * ${b} es igual a: ${mult} </br>`);













