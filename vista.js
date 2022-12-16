export class Vista{
    main(){
        $("body").html(`
            <div class="shop-container">
            ${this.header()}
            <section class="inicio">
            <div class="slider-frame">
                <ul>
                    <li><img src="img/carrusel1.png" alt=""></li>
                    <li><img src="img/carrusel2.png" alt=""></li>
                    <li><img src="img/carrusel3.png" alt=""></li>
                    <li><img src="img/carrusel4.png" alt=""></li>
                </ul>
            </div>
        </section>

        <section id="banner">
                <img src="img/bannerIMG.png" alt="">
                <div class="banner-text">
                    <p> 
                        En <span>SClothes</span> encontrarás la mejor ropa para ti,
                        con los mejores precios y calidad.
                        Descubre nuestra colección de ropa para hombre y mujer y 
                        nuestras joyas y productos de electrónica.
                    </p>
                </div>
        </section>

        <section id="follow">
            <img src="./img/follow11.png" alt="" class="follows" id="follow1">
            <img src="./img/follow22.png" alt="" class="follows" id="follow2">
            <img src="./img/follow33.png" alt="" class="follows" id="follow3">
             <div class="follow-text">
                 <p>Siguenos para más en nuestras redes sociales! </p>
                 <div class="follow-links">
                     <a href="https://www.instagram.com/sclothes/" target="_blank"><i class="fab fa-instagram"></i></a>
                     <a href="https://twitter.com/sclothes" target="_blank"><i class="fab fa-twitter"></i></a>
                 </div>
             </div>
         </section>

         <section id="suscripcion">
                <div class="suscripcion-text">
                    <p>¡Suscribete a nuestro newsletter y recibe las mejores ofertas!</p>
                    <form action="">
                        <input type="email" placeholder="Ingresa tu correo electrónico">
                        <button type="submit">Suscribirse</button>
                    </form>
                </div>
         </section>


         <footer>
            <div class="ayuda">
                <h3>Ayuda</h3>
                <ul>
                    <li><a href="#">Preguntas frecuentes</a></li>
                    <li><a href="#">Contacto</a></li>
                    <li><a href="#">Envíos</a></li>
                    <li><a href="#">Devoluciones</a></li>
                </ul>
            </div>
            <div class="nosotros">
                <h3>Nosotros</h3>
                <ul>
                    <li><a href="#">Sobre nosotros</a></li>
                    <li><a href="#">Trabaja con nosotros</a></li>
                    <li><a href="#">Términos y condiciones</a></li>
                    <li><a href="#">Política de privacidad</a></li>
                </ul>
            </div>
            <div class="legal">
                <h3>Legal</h3>
                <ul>
                    <li><a href="#">Términos y condiciones</a></li>
                    <li><a href="#">Política de privacidad</a></li>
                </ul>
            </div>
            <div class="pagos">
                <h3>Formas de pago</h3>
                <ul>
                    <li><a href="#"><i class="fab fa-cc-visa"></i></a></li>
                    <li><a href="#"><i class="fab fa-cc-mastercard"></i></a></li>
                    <li><a href="#"><i class="fab fa-cc-paypal"></i></a></li>
                    <li><a href="#"><i class="fab fa-cc-amazon-pay"></i></a></li>
                </ul>
            </div>
            <div class="redes-footer">
                <h3>Siguenos</h3>
                <ul>
                    <li><a href="https://www.instagram.com/sclothes/" target="_blank"><i class="fab fa-instagram"></i></a></li>
                    <li><a href="https://twitter.com/sclothes" target="_blank"><i class="fab fa-twitter"></i></a></li>
                </ul>
            </div>
         </footer>
         </div>`);
    }

    header(){
        return `
        <header>
            <img src="img/logo.png" alt="Logo" id="logo">
            
            <nav>
                <div class="hamburger-lines">
                        <span class="line line1"></span>
                        <span class="line line2"></span>
                        <span class="line line3"></span>
                </div>
                <ul class="menu">
                    <li><a id="mujer">Mujer</a></li>
                    <li><a id="hombre">Hombre</a></li>
                    <li><a id="joyeria">Joyerias</a></li>
                    <li><a id="electronica">Electrónica</a></li>
                    <li><a id="productos">Productos</a></li>
                </ul>
            </nav>
    
            <div class="carrito-login">
                <i class="fa-solid fa-cart-shopping"></i>
                <i class="fa-solid fa-user"></i>
            </div>
        </header>
        `
    }

    products(products, type="Todos") {
        var originalType = type;
        if (type == "Todos") {
            type = "Todos los productos";
        }
        else if(type == "mujer"){
            type = "Mujer";
        }
        else if(type == "hombre"){
            type = "Hombre";
        }
        else if(type == "joyeria"){
            type = "Joyería";
        }
        else if(type == "electronica"){
            type = "Electrónica";
        }

        $("body").html(`
        <div class="shop-container">
        ${this.header()}
        <section id="products">
        <input id="typeForSort" type="hidden" value="${originalType}">
            <div class="products-text">
                <h1>${type}</h1>
            </div>
            <div class="sortProducts">
                <p>Ordenar por: </p>
                <select name="sort" id="sort">
                    <option value="">Selecciona una opción</option>
                    <option value="asc">Ascendente</option>
                    <option value="desc">Descendente</option>
                </select>
                <button class="sort-button">Ordenar</button>
            </div>
            <div class="products-container">
            </div>
        </section>
        </div>`);

        products.forEach(product => {
            $(".products-container").append(`
            <div class="product">
                <input type="hidden" value="${product.id}" id="input-producto">
                <img src="${product.image}" alt="" class="link-imagen">
                <div class="product-text">
                    <h3 class="link-titulo">${product.title}</h3>
                    <p class="price">$${product.price}</p>
                </div>
            </div>
            `)
        });
    }

    singleProduct(product) {
        console.log(product.category);
        if(product.category == "women's clothing" || product.category == "men's clothing"){
            $("body").html(`
            <div class="shop-container">
            ${this.header()}
            <section id="singleProduct">
                <div class="singleProduct-container">
                    <div class="singleProduct-img">
                        <img src="${product.image}" alt="">
                    </div>
                    <div class="singleProduct-text">
                        <input type="hidden" value="${product.id}" id="input-producto">
                        <h1>${product.title}</h1>
                        <p>${product.description}</p>
                        <p class="price">$${
                            product.price
                        }</p>
                        <div class="tallaje">
                        <label for="talla">Talla:</label>
                        <select name="talla" id="talla">
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                        </select>
                        </div>
                        <button class="add-button" data-id="${product.id}">Agregar al carrito</button>
                    </div>
                </div>
            </section>
            </div>
            `)
            
        } else {
            $("body").html(`
            <div class="shop-container">
            ${this.header()}
            <section id="singleProduct">
                <div class="singleProduct-container">
                <div class="singleProduct-img">
                        <img src="${product.image}" alt="">
                </div>
                    <div class="singleProduct-text">
                    <input type="hidden" value="${product.id}" id="input-producto">
                        <h1>${product.title}</h1>
                        <p>${product.description}</p>
                        <p class="price">$${
                            product.price
                        }</p>
                        <button class="add-button" data-id="${product.id}">Agregar al carrito</button>
                    </div>
                </div>
            </section>
            </div>
            `)
        }}


    cart(cart) {
        var total = 0;
        $("body").html(`
        <div class="shop-container">
        ${this.header()}
        <section id="cart">
            <div class="cart-text">
                <h1>Carrito</h1>
            </div>
            <div class="cart-container">
                <ul class="cart-list">
                </ul>
            </div>
            <div class="cart-total">
                <h3 id="precioTotal"></h3>
                <button class="buy-button">Comprar</button>
            </div>
        </section>
        </div>`);

        cart.forEach(item => {
            $(".cart-container").append(`
                <li>
                    <input type="hidden" value="${item.id}" id="input-producto">
                    <img src="${item.image}" alt="">
                    <div class="cart-item-text">
                    <h3>${item.title}</h3>
                    <p class="price">$${item.price}</p>
                    <input type="number" value="${item.quantity}" class="quantity" data-id="${item.id}">
                    <button class="update-button" data-id="${item.id}">Actualizar</button>
                    <button class="delete-button" data-id="${item.id}">Eliminar</button>
                </li>
            </div>
            `)
            total += item.price*item.quantity;
        });

        $("#precioTotal").html(`Total: $${total=total.toFixed(2)}`);
    }

    login() {
        $("body").html(`
        <div class="shop-container">
        ${this.header()}
        <section id="login">
            <div class="login-text">
                <h1>Iniciar sesión</h1>
            </div>
            <div class="login-container">
                <form action="" id="login-form">
                    <div class="form-group">
                        <label for="username">Usuario</label>
                        <input type="text" name="username" id="username">
                    </div>
                    <div class="form-group">
                        <label for="password">Contraseña</label>
                        <input type="password" name="password" id="password">
                    </div>
                    <p id="registro-link">¿No tienes una cuenta? <span>Registrate aqui</span></p>
                    <button class="login-button">Iniciar sesión</button>
                </form>
            </div>
        </section>
        </div>
        `)}

    register() {
        $("body").html(`
        <div class="shop-container">
        ${this.header()}
        <section id="register">
            <div class="register-text">
                <h1>Registrarse</h1>
            </div>
            <div class="register-container">
                <form action="" id="register-form">
                    <div class="form-group">
                        <label for="username">Usuario</label>
                        <input type="text" name="username" id="username">
                    </div>
                    <div class="form-group">
                        <label for="name">Nombre</label>
                        <input type="text" name="name" id="name">
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" name="email" id="email">
                    </div>
                    <div class="form-group">
                        <label for="password">Contraseña</label>
                        <input type="password" name="password" id="password">
                    </div>
                    <p id="login-link">¿Ya tienes cuenta? <span>Iniciar Sesión</span></p>
                    <button class="register-button">Registrarse</button>
                    <p id="signup-message">Te has registrado correctamente</p>
                </form>
            </div>
        </section>
        </div>
        `)}
            
}