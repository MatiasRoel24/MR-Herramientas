let contenedorProductos = document.getElementById("container-productos")
let cards = document.createElement("div");

cards.innerHTML = ` <div class="container-cards">
                            <div class="card">
                                <div class="card__img">
                                    <img class="card__imagen" src="../img/martillo.jpg" alt="martillo">
                                </div>
                                <div class="card__info">
                                    <div class="card__titulo">
                                    <p>Lorem ipsum dolor sit amet.</p>
                                    </div>
                                    <div class="card__descrip">
                                        <p>Lorem ipsum dolor sit amet consectetur, 
                                    adipisicing elit. Sit provident similique numquam praesentium animi a, 
                                    nostrum dolores ex aperiam ut?</p>
                                </div>
                                <a class="btn-grad btn-grad--ancho" href="#">Comprar</a>
                            </div>
                        </div>`


contenedorProductos.append(cards)
                 

                    

