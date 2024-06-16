class Vehiculo{

    constructor (marca, modelo, año)
    {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    obtenerInformación ()
    {
        return `El vehiculo elegido es: ${this.marca} 
         ${this.modelo} año ${this.año} `;

    }
}


class Automovil extends Vehiculo{
    
    constructor(marca, modelo, año, color , precio)
    {
        super(marca, modelo, año);
        this.color = color ;
        this.precio = precio ;
    }

    obtenerInformación ()
    {
        return super.obtenerInformación() +
        ` color  ${this.color}, su precio es $  ${this.precio}`;

    }
}

let v1 = new Vehiculo ("Yamaha","Crypton","2013");
let a1 = new Automovil("Chevrolet","Cruze 5","2024","negro","30.000.000")
console.log(v1.obtenerInformación());
console.log(a1.obtenerInformación());




