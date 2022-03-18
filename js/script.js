/* Variables globales */
let textoMenu = "Esto son los productos:\n"
let totalVenta = 0;
let contador = 0;
let textoColor = "";
    /* Variable select */
    let contenedorProductos = document.querySelector(".container-productos");

/* Objeto de herramientas */
class Herramienta{
    constructor(nombre, precio, stock, color,imagen,id){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.color = color;
        this.imagen = imagen;
        this.id = id;
    }
}

/* Herramientas */
const martillo = new Herramienta("Martillo",100,20,"Rojo","../img/martillo.jpg",1);
const llaveAlem = new Herramienta("Llave alem",50,10,"Rojo","../img/llave-alem.jpg",2);
const pinza = new Herramienta("Pinza",90,40,"Rojo","../img/taladro.jpg",3);
const cajaHerramientas = new Herramienta("Caja de Herramientas",500,15,"Azul","../img/caja-de-tornillos.jpg",4);
const destornillador = new Herramienta("Destornillador",10,100,"Azul","../img/destornillador.jpg",5);

/* Array de objetos */
const listaHerramientas = [martillo, llaveAlem, pinza, cajaHerramientas, destornillador]; 

/* ---FILTRO SELECT--- */

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
                                                <p>$${producto.precio}</p>
                                                </div>    
                                                <p>El color es: ${producto.color}</p>
                                        </div>
                                        <button id="btn-card" class="btn-grad btn-grad--ancho" type="button">Comprar</button>
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
                                                <p>$${producto.precio}</p>
                                            </div>
                                              
                                                <p>El color es: ${producto.color}</p>
                                        </div>
                                        <button id="btn-card" class="btn-grad btn-grad--ancho" type="button">Comprar</button>   
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

/* ---CARRITO--- */


function carrito(){
    const cardBtns = document.querySelectorAll('#btn-card');
    cardBtns.forEach((cardBtn) => {
        cardBtn.addEventListener('click', compraClick)
    })
}

const comprarButton = document.querySelector('.carrito_boton-comprar').addEventListener('click', comprarButtonClicked)

function compraClick(e){
    let button = e.target;
    let item = button.closest('.card');
    
    let itemTitle = item.querySelector(".card__titulo").textContent;
    let itemPrecioyStock = item.querySelector(".card__descrip").textContent;
    let itemImg = item.querySelector('.card__imagen').src;
    anyadirItemCarrito(itemTitle,itemPrecioyStock,itemImg)
}

let containerCardsCarrito = document.querySelector(".carrito__container");/* VARIBLE GLOBAL */

function anyadirItemCarrito(itemTitle,itemPrecioyStock,itemImg){

    const elementsTitle = containerCardsCarrito.getElementsByClassName('carrito__title');
    for(let i = 0; i < elementsTitle.length; i++){
        if(elementsTitle[i].textContent == itemTitle){
            let elmentQuantity = elementsTitle[i].parentElement.parentElement.querySelector(".carrito__cantidad");
            elmentQuantity.value++;
            totalCarrito();
            return; /* Para que termine la funcion */
        }
    }

    let rowCardsCarrito =  document.createElement("div");
    let cardsCarritoContenido = `
        <div class="carrito__elementos">
            <img class="carrito__img" src="${itemImg}" alt="">
            <h4 class= "carrito__title">${itemTitle}</h4>
            <button id="boton-agregar" class="btn-agregar">+</button>
            <h5 class= "carrito__precio">${itemPrecioyStock}</h5>
            <input class="carrito__cantidad" type="number" value="1">
            <button id="boton-vaciar" class="btn-vaciar">X</button>
        </div>`
        rowCardsCarrito.innerHTML = cardsCarritoContenido;
        containerCardsCarrito.append(rowCardsCarrito);

        rowCardsCarrito.querySelector('#boton-vaciar').addEventListener('click', eliminarCardCarrito)
        
        rowCardsCarrito.querySelector('.carrito__cantidad').addEventListener('click',cambiarCantidadItem)
        
        totalCarrito()
}

function totalCarrito(){
    let total = 0;
    const cardTotal = document.querySelector(".total__plata");
    
    const carritoItems = document.querySelectorAll(".carrito__elementos");
    
    
    carritoItems.forEach((carritoItem) =>{
        const carritoItemPrecioElemento = carritoItem.querySelector('.carrito__precio');
        const carritoItemPrecio = Number(carritoItemPrecioElemento.textContent.replace('$',''));
        
        const carritoItemCantidad = carritoItem.querySelector('.carrito__cantidad');
        const carritoItemContador = Number(carritoItemCantidad.value);
        
        total += carritoItemPrecio * carritoItemContador;
        
    });
    
    cardTotal.innerHTML = `$${total}`;
}

function eliminarCardCarrito(e){
    const buttonClicked = e.target;
    buttonClicked.closest('.carrito__elementos').remove();
    totalCarrito();
}

function cambiarCantidadItem(e){
    const input = e.target;
    input.value <= 0 ? (input.value = 1) : null; 
    totalCarrito();
}

function comprarButtonClicked(){
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Su compra se realizo con exito',
        showConfirmButton: false,
        timer: 1500
      })
    containerCardsCarrito.innerHTML = ''; 
    totalCarrito();
}

/* INICIO */
carrito();












    
    
     


    
    




