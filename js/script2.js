/*Objeto: Herramientas*/
class Herramienta{
    constructor(nombre, precio, stock, color){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.color = color;
    }
}
/* Variables Globales */
let textoListadoMenu = "Estos son los productos: ";
let contador = 0;

/* Herramientas */
const martillo = new Herramienta("Martillo",100,20,"Rojo");
const llaveAlem = new Herramienta("Llave alem",50,10,"Rojo");
const cajaHerramientas = new Herramienta("Caja de Herramientas",500,15,"Azul");
const destornillador = new Herramienta("Destornillador",10,100,"Azul");
const pinza = new Herramienta("Pinza",90,40,"Rojo");

/* Array de objetos con listado de herramientas */
const listaHerramientas = [martillo, llaveAlem, cajaHerramientas, destornillador,pinza]; 

/* Recorre el array de objetos */
for(const herramienta of listaHerramientas){
    contador++;
    textoListadoMenu += "\n" + contador + "- " + herramienta.nombre + " ----> " + "$" + herramienta.precio;
}

/* Funcion de listado menu */
function listarProductos(){
    alert(textoListadoMenu);
}

/* Filtrar herramientas por precio */


/* Funcion de compra */
function comprar(){
   let opcionCompra = prompt("Desea comprar:\n 1- Martillo\n 2- Llave alem\n 3- Caja de herramientas\n 4- Destornillador\n 5- Pinza").toUpperCase();     
        if (opcionCompra == "MARTILLO")
        {
            let total = 0;
            let cantidadCompra = parseInt(prompt("Cuantos desea comprar?"));
                if(cantidadCompra <= listaHerramientas[0].stock){
                    listaHerramientas[0].stock -= cantidadCompra;
                    cantidadCompra *= listaHerramientas[0].precio;
                    console.log("Quedan: " + listaHerramientas[0].stock + " de " + listaHerramientas[0].nombre);
                    alert("Su compra se realizo con exito y es de $" + cantidadCompra);
                    total =+ cantidadCompra;
            }
                else{
                    if(listaHerramientas[0].stock == 0){
                        alert("No tenemos stock")
                    }
                    else{
                        alert("Solo podes comprar: " + listaHerramientas[0].stock +" " + listaHerramientas[0].nombre);
                    }
                }      
        }
        else if (opcionCompra == "LLAVE ALEM"){
            cantidadCompra = prompt("Cuantos desea comprar?");
            if(cantidadCompra <= listaHerramientas[1].stock){
                listaHerramientas[1].stock -= cantidadCompra;
                cantidadCompra *= listaHerramientas[1].precio;
                console.log("Quedan: " + listaHerramientas[1].stock + " de " + listaHerramientas[1].nombre);
                alert("Su compra se realizo con exito y es de $" + cantidadCompra);
                total =+ cantidadCompra;
            }
            else{
                if(listaHerramientas[1].stock == 0){
                    alert("No tenemos stock")
                }
                else{
                    alert("Solo podes comprar: " + listaHerramientas[1].stock +" " + listaHerramientas[1].nombre);
                }
                }
            }
            else if (opcionCompra == "CAJA DE HERRAMIENTAS"){
                cantidadCompra = prompt("Cuantos desea comprar?");
                if(cantidadCompra <= listaHerramientas[2].stock){
                    listaHerramientas[2].stock -= cantidadCompra;
                    cantidadCompra *= listaHerramientas[2].precio;
                    console.log("Quedan: " + listaHerramientas[2].stock + " de " + listaHerramientas[2].nombre);
                    alert("Su compra se realizo con exito y es de $" + cantidadCompra);
                    total =+ cantidadCompra;
                }
                else{
                    if(listaHerramientas[2].stock == 0){
                        alert("No tenemos stock")
                    }
                    else{
                        alert("Solo podes comprar: " + listaHerramientas[2].stock +" " + listaHerramientas[2].nombre);
                    }
                    }
                }
                else if (opcionCompra == "DESTORNILLADOR"){
                    cantidadCompra = prompt("Cuantos desea comprar?");
                    if(cantidadCompra <= listaHerramientas[3].stock){
                        listaHerramientas[3].stock -= cantidadCompra;
                        cantidadCompra *= listaHerramientas[3].precio;
                        console.log("Quedan: " + listaHerramientas[3].stock + " de " + listaHerramientas[3].nombre);
                        alert("Su compra se realizo con exito y es de $" + cantidadCompra);
                        total =+ cantidadCompra;
                    }
                    else{
                        if(listaHerramientas[3].stock == 0){
                            alert("No tenemos stock")
                        }
                        else{
                            alert("Solo podes comprar: " + listaHerramientas[3].stock +" " + listaHerramientas[3].nombre);
                        }
                        }
                    }
                    else if (opcionCompra == "PINZA"){
                        cantidadCompra = prompt("Cuantos desea comprar?");
                        if(cantidadCompra <= listaHerramientas[4].stock){
                            listaHerramientas[4].stock -= cantidadCompra;
                            cantidadCompra *= listaHerramientas[4].precio;
                            console.log("Quedan: " + listaHerramientas[4].stock + " de " + listaHerramientas[4].nombre);
                            alert("Su compra se realizo con exito y es de $" + cantidadCompra);
                            total =+ cantidadCompra;
                        }
                        else{
                            if(listaHerramientas[4].stock == 0){
                                alert("No tenemos stock")
                            }
                            else{
                                alert("Solo podes comprar: " + listaHerramientas[4].stock +" " + listaHerramientas[4].nombre);
                            }
                            }
                        }
        else{
            alert("Gracias por visitarnos");        
        }
    }

/* Menu */
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

filtradoHerramientas()