let martillo = 'martillo';
let stockMartillo = 20;
let precioMartillo = 100;

let llaveAlem = 'llave alem';
let stockLlaveAlem = 10;
let precioLlaveAlem = 50;

function listarProductos(){
    alert(`Estas son las herramientas: \n1 - ${martillo}: $${precioMartillo}\n2 - ${llaveAlem}: $${precioLlaveAlem}`);
}

function comprar(){
   let opcionCompra = prompt("Desea comprar:\n 1- martillo\n 2- llave alem\nESC- SALIR");
        if (opcionCompra == "1"){
            let cantidadCompra = parseInt(prompt("Cuantos desea comprar?"));
            let total = 0;
            if(cantidadCompra <= stockMartillo){
                stockMartillo -= cantidadCompra;
                cantidadCompra *= precioMartillo;
                console.log("Quedan: " + stockMartillo);
                alert("Su compra se realizo con exito y es de $" + cantidadCompra);
                total =+ cantidadCompra;
            }
            else{
                if( stockMartillo == 0){
                    alert("No tenemos stock")
                }
                else{
                    alert("Solo podes comprar: " + stockMartillo);
                }
            }
        }
        else if (opcionCompra == "2"){
            cantidadCompra = prompt("Cuantos desea comprar?");
            if(cantidadCompra <= stockLlaveAlem){
                stockLlaveAlem -= cantidadCompra;
                cantidadCompra *= precioLlaveAlem;
                console.log("Quedan: " + stockLlaveAlem);
                alert("Su compra se realizo con exito y es de $" + cantidadCompra);
                total =+ cantidadCompra;
            }
            else{
                if( stockLlaveAlem == 0){
                    alert("No tenemos stock")
                }
                else{
                    alert("Solo podes comprar: " + stockMartillo);
                }
                }
            }
        else{
            alert("Gracias por visitarnos :");        
        }
    }

function menu(){
    let opcion = prompt("Menu: \n1 - Ver herramientas \n2 - Comprar\n ESC- SALIR");
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