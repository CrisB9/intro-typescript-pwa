const tiendaProductos:Cuenta[]=[
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

    private valor:number;
    public tirar(){
        this.generar();
    }
];
const [total1,iva1]=calcularIva2(tiendaProductos);
console.log('Total: ${total1} \n IVA: ${iva1}');

