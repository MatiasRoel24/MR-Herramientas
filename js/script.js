/* Variables globales */
let textoMenu = "Esto son los productos:\n"
let totalVenta = 0;
let contador = 0;
let textoColor = "";
    /* Variable select */
    let contenedorProductos = document.querySelector(".container-productos");

/* Objeto de herramientas */
class Herramienta{
    constructor(nombre, precio, stock, color,imagen){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.color = color;
        this.imagen = imagen;
    }
}

/* Herramientas */
const martillo = new Herramienta("Martillo",100,20,"Rojo","../img/martillo.jpg");
const llaveAlem = new Herramienta("Llave alem",50,10,"Rojo","../img/llave-alem.jpg");
const pinza = new Herramienta("Pinza",90,40,"Rojo","../img/taladro.jpg");
const cajaHerramientas = new Herramienta("Caja de Herramientas",500,15,"Azul","../img/caja-de-tornillos.jpg");
const destornillador = new Herramienta("Destornillador",10,100,"Azul","../img/destornillador.jpg");

/* Array de objetos */
const listaHerramientas = [martillo, llaveAlem, pinza, cajaHerramientas, destornillador]; 

/* Recorre el array */
for (const herramienta of listaHerramientas){
        contador++;
        textoMenu += `${contador}- ${herramienta.nombre}: $${herramienta.precio}\n`;
}

/* FILTRO SELECT */

    /* Genero cards completas */
    for(const producto of listaHerramientas){
            let cards = document.createElement("div");

            cards.innerHTML = ` <div class="container-cards">
                                    <div class="card">
                                        <div class="card__img">
                                            <img class="card__imagen" src="${producto.imagen}" alt="${producto.nombre}">
                                        </div>
                                        <div class="card__info">
                                            <div class="card__titulo">
                                            <p>${producto.nombre}</p>
                                            </div>
                                            <div class="card__descrip">
                                                <p>El precio es: $${producto.precio}</p>
                                                <p>El stock es: $${producto.stock}</p>
                                        </div>
                                        <a class="btn-grad btn-grad--ancho" href="#">Comprar</a>
                                    </div>
                                </div>`
            contenedorProductos.appendChild(cards);
    }

    /* Genero cards filtradas */
    function generadorCards(listaColor){
        contenedorProductos.innerHTML = '';

        for(const producto of listaColor){
            let cards = document.createElement("div");

            cards.innerHTML = ` <div class="container-cards">
                                    <div class="card">
                                        <div class="card__img">
                                            <img class="card__imagen" src="${producto.imagen}" alt="${producto.nombre}">
                                        </div>
                                        <div class="card__info">
                                            <div class="card__titulo">
                                            <p>${producto.nombre}</p>
                                            </div>
                                            <div class="card__descrip">
                                                <p>El precio es: $${producto.precio}</p>
                                                <p>El stock es: $${producto.stock}</p>
                                        </div>
                                        <a class="btn-grad btn-grad--ancho" href="#">Comprar</a>
                                    </div>
                                </div>`
            contenedorProductos.appendChild(cards);
        }
    } 

    /* Genero boton filtro */
    function filtroSelect(){
        /* Filtro de color */
        let filtroColor = document.getElementById('filtro-color');
        let colorHerramienta = filtroColor.value;

        const listaColor = listaHerramientas.filter(x => x.color == colorHerramienta);

        /* GENERO LAS CARDS SEGUN EL FILTRO */
        if (listaColor.length == 0){
            contenedorProductos.innerHTML = '';
            generadorCards(listaHerramientas)
        }
        else{
            contenedorProductos.innerHTML = '';
            generadorCards(listaColor)
        }
    }

/* CARRITO */


    
    
     


    
    




