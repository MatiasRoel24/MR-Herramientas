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

/*  function guardarCarritoEnLocalStorage(){
    miLocalStorage.setItem('carrito', itemTitle);
}  */

/* INICIO */
carrito();