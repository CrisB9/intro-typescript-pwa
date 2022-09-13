

let nombres:string[]=['mario', 'dario', 'juan']

console.log(nombres);

let datos=[ 'Maria', 23, true,'Lopez']

console.log(datos);

datos.push(200);
datos.push('Maria')
datos.push(false);
console.log(datos);

let arreglo: Array<number>=[1,2,3,4]

interface Alumno{
    matricula:string,
    nombre:string,
    edad:number,
    email:string,
    materia?:string[]
}


const alumno:Alumno={
    matricula:'18002144',
    nombre:'Maria',
    edad:23,
    email:'maria@gmail.com'

}