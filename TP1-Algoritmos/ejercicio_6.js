let meses = [" enero" ," febrero"," marzo"," abril"," mayo"," junio"," julio", 
" agosto"," septiembre"," octubre"," noviembre"," diciembre" ];

let valor;
valor= window.prompt("Ingrese un número para mostrar el mes al que corresponde: ");

if (valor>0 && valor<=12) {
    alert (meses[valor-1]);
} else {
    alert ("El número ingresado no corresponde a un mes");
    
}