/* Objeto de herramientas */
class Herramienta{
    constructor(nombre, precio, stock, color){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.color = color;
    }
}

/* Herramientas */

const martillo = new Herramienta("Martillo",100,20,"Rojo");
const llaveAlem = new Herramienta("Llave alem",50,10,"Rojo");
const pinza = new Herramienta("Pinza",90,40,"Rojo");
const cajaHerramientas = new Herramienta("Caja de Herramientas",500,15,"Azul");
const destornillador = new Herramienta("Destornillador",10,100,"Azul");

/* Array de objetos */
const listaHerramientas = [martillo, llaveAlem, pinza, cajaHerramientas, destornillador]; 

/* Variables globales */
let textoMenu = "Esto son los productos:\n"
let totalVenta = 0;
let contador = 0;
let textoColor = "";

/* Funciones */

/* Recorre el array */
for (const herramienta of listaHerramientas){
        contador++;
        textoMenu += `${contador}- ${herramienta.nombre}: $${herramienta.precio}\n`;
}

/* Muestra de menu */
function mostrarMenu(){
    alert(textoMenu)
}

/* Compra */
function compraHerramientas(){ /* Como lo paso por parametro la herramienta buscada para hacer otra funcion? */
        let herramientaCompra = prompt("Ingrese el producto que desea comprar (ESC para salir): ");
        let herramientaBuscada = listaHerramientas.find(herramienta => herramienta.nombre === herramientaCompra);/* LET? */
        while (herramientaBuscada != undefined){
            let cantidadCompra = parseInt(prompt("Ingrese la cantidad que desea comprar: "));
            if(cantidadCompra <= herramientaBuscada.stock){
                herramientaBuscada.stock -= cantidadCompra;
                cantidadCompra *= herramientaBuscada.precio;
                console.log("Quedan: " + herramientaBuscada.stock + " de " + herramientaBuscada.nombre);
                alert("Su compra se realizo con exito y es de $" + cantidadCompra);
                totalVenta += cantidadCompra;
            }
            herramientaCompra = prompt("Ingrese el producto que desea comprar (ESC para salir): ");
            herramientaBuscada = listaHerramientas.find(herramienta => herramienta.nombre === herramientaCompra);/* LET? */
        }
        alert(`El total de su compra es de $${totalVenta}`);
}

/* Filtrar herramienta por color */

function filtradoHerramientas(){
    let colorHerramienta = prompt("Ingrese color de la herramienta(Rojo o azul): ");
    const colorBuscado = listaHerramientas.filter(herramienta => herramienta.color === colorHerramienta);

    for(color of colorBuscado){
        textoColor += color.nombre + " ";
    }
    
    alert(`Las herramientas con color ${colorHerramienta} son: ${textoColor}`);

    compraHerramientas() /* Como hago para aplicar el filtrado? */
}

/* Salir */
function salir(){
    alert("Hasta luego")
}


/* MENU */
function menu(){
    let opcion = prompt("--MENU--\n1- Comprar\n2- Filtro herramienta por color\n3- Salir");
        switch (opcion) {
            case "1":
                mostrarMenu();
                compraHerramientas();
                break;
            case "2":
                filtradoHerramientas();
                break;
            case "3":
                salir();
                break;
            default:
                alert("Opcion incorrecta :C");
        }
}


menu()

