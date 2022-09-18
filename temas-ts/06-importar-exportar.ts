import { calcularIva2,Producto } from "./05-desestructurar-funciones";

const tiendaProductos:Producto[]=[
    {
        desc:'Telefono1',
        precio:123
    },
    {
        desc:'Tablet2',
        precio:456
    },
    {
        desc:'Telefono2',
        precio:789
    },
];
const [total1,iva1]=calcularIva2(tiendaProductos);
console.log('Total: ${total1} \n IVA: ${iva1}');