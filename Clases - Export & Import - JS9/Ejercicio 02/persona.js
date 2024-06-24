// Creamos la clase que vamos a exportar
export class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    mostrarInformacion() {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
    }
}
