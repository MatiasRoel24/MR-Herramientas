/* Variables globales */
    let textoMenu = "Esto son los productos:\n"
    let totalVenta = 0;
    let contador = 0;
    let textoColor = "";
    /* Variables carrito */
        let carrito = [];
        let containerCardsCarrito = document.querySelector(".carrito__container");
        let DOMcarrito = document.querySelector(".carrito__container");
        let btnCompra = document.querySelector(".carrito_boton-comprar");
        let DOMTotal = document.querySelector(".total__plata");
        let DOMbtnVaciar = document.querySelector(".carrito-boton-vaciar");
        const miLocalStorage = window.localStorage;
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
                                            <div class="card__descripcion">
                                                <p>El precio es:</p>
                                                <p class="card__descrip">$${producto.precio}</p>
                                            </div>    
                                            <button id="btn-card" class="btn-grad btn-grad--ancho" type="button" marcador="${producto.id}">Comprar</button>
                                        </div>
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
                                            <div class="card__descripcion">
                                                <p>El precio es:</p>
                                                <p class="card__descrip">$${producto.precio}</p>
                                                </div>
                                            <button id="btn-card" class="btn-grad btn-grad--ancho" type="button" marcador="${producto.id}">Comprar</button>   
                                        </div>
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
    /* Busco btns card */
        let btnProductos = document.querySelectorAll("#btn-card");
        btnProductos.forEach((btnProducto) => {
            btnProducto.addEventListener('click', anyadirProductoAlCarrito)/* Por cada uno escucho un cambio*/
        })
    /* Añadir productos al carrito */

        function anyadirProductoAlCarrito(e){
            /* Efectuo el cambio escuchado */
                /* Añadir nodo a nuestro carrito */
                carrito.push(e.target.getAttribute('marcador')); /* Busco el id */
                /* Actualizamos el carrito */
                renderizarCarrito();
                /* Actualizamos el localStorage */
                guardarCarritoEnLocalStorage();
        }
        
        function renderizarCarrito(){
            /* Vaciamos todo el HTML */
             DOMcarrito.textContent = ''; 
            /* Quitamos los duplicados */
            
            const carritoSinDuplicados = [...new Set(carrito)];
            
            /* Generamos nodos apartir del carrito */
            carritoSinDuplicados.forEach((item) => {
                /* Buscamos el item que necesitamos*/
                const miItem = listaHerramientas.filter((itemBaseDatos) =>{
                    /* Coinciden las id? Solo puede existir un caso */
                    return itemBaseDatos.id === parseInt(item);
                });
                
                /* Cuenta el numero de veces que se repite el producto */
                const numeroUnidadesItem = carrito.reduce((total, itemId) => {
                    return itemId === item ? total += 1 : total;
                }, 0);
                
                /* Creamos la card de item */
                let rowCardsCarrito =  document.createElement("div");
                let cardsCarritoContenido = `
                    <div class="carrito__elementos">
                        <img class="carrito__img" src="${miItem[0].imagen}" alt="">
                        <h4 class= "carrito__title">${numeroUnidadesItem} X ${miItem[0].nombre} </h4>
                        <h5 class= "carrito__precio">$${miItem[0].precio}</h5>
                        <button id="boton-vaciar" class="btn-vaciar">X</button>
                    </div>`
                    rowCardsCarrito.innerHTML = cardsCarritoContenido;
                    containerCardsCarrito.append(rowCardsCarrito);
                    /* Genero Boton */
                    let btnsVaciar = rowCardsCarrito.querySelectorAll("#boton-vaciar");
                    btnsVaciar.forEach((btn) =>{
                        btn.setAttribute('data-set',item);
                        btn.addEventListener('click',borrarItemCarrito)
                    });
            });
            DOMTotal.textContent = "$" + calcularTotal();    
        }

        function borrarItemCarrito(e){ 
            /* Obtengo el producto ID que en el btn pulsado */
            const btnsVaciar = e.target;
            let btnId = btnsVaciar.getAttribute("data-set");
            /* Borramos el producto */
            carrito = carrito.filter((carritoId) => {
                return carritoId !== btnId;
            });
            /* Volvemos a renderizar */
            renderizarCarrito();
            /* Actualizamos el localStorage */
            guardarCarritoEnLocalStorage();
    
        }

        function calcularTotal(){
            return carrito.reduce((total, item) =>{
                const miItem = listaHerramientas.filter((itemBaseDatos) =>{
                    return itemBaseDatos.id === parseInt(item);
                });

                return total + miItem[0].precio;
            }, 0).toFixed(2);
        }

        function vaciarCarrito(){
            /* Limpiamos el carrito */
            carrito = [];
            /* Renderizamos los cambios */
            renderizarCarrito();
            /* Borramos el LocalStorage  */
            localStorage.clear();
        }

        function guardarCarritoEnLocalStorage(){
            miLocalStorage.setItem('carrito', JSON.stringify(carrito))
        }

        function cargarCarritoDeLocalStorage(){
            /* Existe un carrito en el localStorage? */
            if (miLocalStorage.getItem('carrito') !== null){
                /* Carga la info */
                carrito = JSON.parse(miLocalStorage.getItem('carrito'));
            }
        }

        /* Eventos */

        /* Boton de compra */
        
        btnCompra.addEventListener('click',compraTotal)
        function compraTotal(){
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Su compra se realizo con exito',
                showConfirmButton: false,
                timer: 1500
              })
            containerCardsCarrito.innerHTML = ''; 
            vaciarCarrito();
        }

        /* Boton vaciar */

        DOMbtnVaciar.addEventListener('click',vaciarCarrito)

/* Inicio */

cargarCarritoDeLocalStorage();
renderizarCarrito();






    
    
     


    
    




