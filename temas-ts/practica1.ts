const AlumnoUTL:{
    nombre:'Mario',
    edad:23,
    direccion{
        calle:'Veracruz',
        pais:'MX',
        estado:'GTO',
    },
    
    mostrarDireccion(){
        return this.nombre+','+this.direccion.estado+','+this.direccion.pais;
    }
}

const direccion=AlumnoUTL.mostrarDireccion();
console.log(direccion);