
alert("Ingrese sus notas para calcular su promedio: ");
nota=1;
arraynotas=[]
for (i=0; i<5; i++)
    {
    nota= parseInt(window.prompt(`Ingrese su ${i+1}° nota: `));
            if (nota>=0 && nota<=10)
                {
                    arraynotas.unshift(nota);  
                }
            else{
                alert("Ingreso de nota inválido!!!... Debe ser un valor entre 0 y 10. ");
                i--;

            }
        }


suma=0;


for (const val of arraynotas) {
    suma= (suma+(val));
}
promedio = (suma/(arraynotas.length));


if(promedio<5)
    {
        alert("REPROBADO");
    }

else {
    if (promedio<9) {
        alert("APROBADO");
    } else {
        alert("SOBRESALIENTE");

     }

}


