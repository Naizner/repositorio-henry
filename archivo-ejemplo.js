class Alumno {
    constructor(nombre, apellido){
        this._nombre=nombre;
        this._apellido=apellido;
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre=nombre;
    }

}
let alumno(Nicolas, Aizner)
console.log(alumno);