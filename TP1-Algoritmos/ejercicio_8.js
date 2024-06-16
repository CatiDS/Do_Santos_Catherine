
let cadena1 = window.prompt("Introduzca un texto: ");
band=0;

cadena=(cadena1.toLowerCase());
document.write("</br>");


cadena= cadena.replace("á","a");
cadena= cadena.replace("é","e");
cadena= cadena.replace("í","i");
cadena= cadena.replace("ó","o");
cadena= cadena.replace("ú","u");

for (const val of cadena) {

if(band==0)
    {
    switch (val) {
        case "a":
                letra= val;
                pos=cadena.indexOf("a");
                band=1;
            break;
        case "e":
                letra= val;
                pos= cadena.indexOf("e");
                band=1;
             break;
        case "i":
                letra=val;
                pos=cadena.indexOf("i");
                band=1;
             break;
        case "o":
                letra=val;
                pos=cadena.indexOf("o");
                band=1;
             break;
        case "u":
                letra=val;
                pos=cadena.indexOf("u");
                band=1;
             break;
    }
}
    
}
if (band==1)
    {
    pos = (pos +1);
    document.write(`La primer vocal del texto ${cadena1} es: ${letra} y es la letra n° ${pos}`);
    }
else
    {document.write(`No se han encontrado vocales en el texto ${cadena1}`);
    }
