class Herramienta{
    constructor(nombre, precio, stock){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}

let textoListadoMenu = "Estos son los productos: ";
let contador = 0;

const martillo = new Herramienta("Martillo",100,20);
const llaveAlem = new Herramienta("Llave alem",50,10);

const listaHerramientas = [martillo, llaveAlem];

for(const herramienta of listaHerramientas){
    contador++;
    textoListadoMenu += "\n" + contador + "- " + herramienta.nombre + " ----> " + "$" + herramienta.precio;
}

function listarProductos(){
    alert(textoListadoMenu);
}

function comprar(){
   let opcionCompra = prompt("Desea comprar:\n 1- Martillo\n 2- Llave alem").toUpperCase();
        if (opcionCompra == "MARTILLO"){
            let cantidadCompra = parseInt(prompt("Cuantos desea comprar?"));
            let total = 0;
            if(cantidadCompra <= listaHerramientas[0].stock){
                listaHerramientas[0].stock -= cantidadCompra;
                cantidadCompra *= listaHerramientas[0].precio;
                console.log("Quedan: " + listaHerramientas[0].stock);
                alert("Su compra se realizo con exito y es de $" + cantidadCompra);
                total =+ cantidadCompra;
            }
            else{
                if(listaHerramientas[0].stock == 0){
                    alert("No tenemos stock")
                }
                else{
                    alert("Solo podes comprar: " + listaHerramientas[0].stock);
                }
            }
        }
        else if (opcionCompra == "LLAVE ALEM"){
            cantidadCompra = prompt("Cuantos desea comprar?");
            if(cantidadCompra <= listaHerramientas[1].stock){
                listaHerramientas[1].stock -= cantidadCompra;
                cantidadCompra *= listaHerramientas[1].precio;
                console.log("Quedan: " + listaHerramientas[1].stock);
                alert("Su compra se realizo con exito y es de $" + cantidadCompra);
                total =+ cantidadCompra;
            }
            else{
                if(listaHerramientas[1].stock == 0){
                    alert("No tenemos stock")
                }
                else{
                    alert("Solo podes comprar: " + listaHerramientas[1].stock);
                }
                }
            }
        else{
            alert("Gracias por visitarnos");        
        }
    }


function menu(){
    let opcion = prompt("Menu: \n1 - Ver herramientas\n2 - Comprar\n ESC- SALIR");
    while(opcion != "ESC"){
        switch (opcion) {
            case "1":
                listarProductos();
                break;
            case "2":
                comprar();
                break;
            default:
                alert("Opcion incorrecta :C");
        }
        opcion = prompt("Menu: \n1 - Ver herramientas \n2 - Comprar\n ESC- SALIR");
    }
}

menu()