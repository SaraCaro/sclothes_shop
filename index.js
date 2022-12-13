import { Vista } from "./vista.js";
const vista = new Vista();

if(localStorage.getItem("cart") == null){
    var cart = [];
} 
else{
    var cart = JSON.parse(localStorage.getItem("cart"));
}


$(document).ready(function() {
    vista.main();
    
    // El document .on es para que los eventos se creen en los elementos que se crean dinamicamente
    //  y no solo en los que estan en la vista que se carga al principio

    // Botones de la barra de navegacion
    $(document).on("click", "#mujer", function() {
        changeCategories("Mujer");
    });

    $(document).on("click", "#hombre", function() {
        changeCategories("Hombre");
    });

    $(document).on("click", "#joyeria", function() {
        changeCategories("Joyeria");
    });

    $(document).on("click", "#electronica", function() {
        changeCategories("Electronica");
    });

    $(document).on("click", "#productos", function() {
        changeToproduct("Productos");
    });

    $(document).on("click", "#logo", function() {
        vista.main();
    });

    // Botones de la vista de productos

    $(document).on("click", ".link-imagen", function() {
        var id = $(this).siblings("#input-producto").val();
        changeSingleProduct(id);
    });

    $(document).on("click", ".link-titulo", function() {
        var id = $(this).parent().siblings("#input-producto").val();
        changeSingleProduct(id);
    });

    // Botones de la vista carrito

    $(document).on("click", ".fa-cart-shopping", function() {
        vista.cart(cart);
    });

    $(document).on("click", ".add-button", function() {
        var id = $(this).siblings("#input-producto").val();
        var size = $(this).siblings("#talla").val();

        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=>addProductCart(json,size,cart))
    });

    $(document).on("click", ".delete-button", function() {
        var id = $(this).parent().siblings("#input-producto").val();
        eliminarCarrito(id);
    });

    // Botones de la vista de login y registro

    $(document).on("click", ".fa-user", function() {
        vista.login();
    });

    $(document).on("click", "#registro-link", function() {
        vista.register();
    });

    $(document).on("click", "#login-link", function() {
        vista.login();
    });

    $(document).on("click", ".login-button", function() {
        fetch('https://fakestoreapi.com/auth/login',{
            method:'POST',
            body:JSON.stringify({
                username: "mor_2314",
                password: "83r5^_"
            })
        })
            .then(res=>res.json())
            .then(json=>login(json))
    });
    
    $(document).on("click", ".register-button", function() {
        fetch('https://fakestoreapi.com/users',{
            method:"POST",
            body:JSON.stringify(
                {
                    email:'John@gmail.com',
                    username:'johnd',
                    password:'m38rmF$',
                    name:{
                        firstname:'John',
                        lastname:'Doe'
                    },
                    address:{
                        city:'kilcoole',
                        street:'7835 new road',
                        number:3,
                        zipcode:'12926-3874',
                        geolocation:{
                            lat:'-37.3159',
                            long:'81.1496'
                        }
                    },
                    phone:'1-570-236-7033'
                }
            )
        })
            .then(res=>res.json())
            .then(json=>register(json))

    });

    // Botones descender y ascender y actualizar cantidad

    $(document).on("click", ".sort-button", function() {
        var sort = $(this).siblings("#sort").val();
        var category = $(this).parent().siblings("#typeForSort").val();
        sortProducts(sort, category);
    });

    $(document).on("click", ".update-button", function() {
        var id = $(this).attr("data-id");
        var quantity = $(this).siblings(".quantity").val();
        changeQuantity(id, quantity, cart);
    });

});

function changeCategories(category, sort="asc") {
    if(category == "Mujer"){
        var catg = "women\'s%20clothing";
    }
    else if(category == "Hombre"){
        var catg = "men\'s%20clothing";
    }
    else if(category == "Joyeria"){
        var catg = "jewelery";
    }
    else if(category == "Electronica"){
        var catg = "electronics";
    }

    fetch(`https://fakestoreapi.com/products/category/${catg}?sort=${sort}`)
        .then(res=>res.json())
        .then(json=>vista.products(json, category))
}


function changeToproduct(sort="asc") {
    fetch(`https://fakestoreapi.com/products?sort=${sort}`)
        .then(res=>res.json())
        .then(json=>vista.products(json))
}

function changeSingleProduct(id) {
    fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res=>res.json())
        .then(json=>vista.singleProduct(json))
}


function addProductCart(product,size,cart){
    var productCart = {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        size: size,
        quantity: 1
    };
    
    var exist = false;
    for(var i = 0; i < cart.length; i++){
        if(cart[i].id == productCart.id){
            cart[i].quantity++;
            exist = true;
        }
    }

    if(!exist){
        cart.push(productCart);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
}


function eliminarCarrito(id){
    for(var i = 0; i < cart.length; i++){
        if(cart[i].id == id){
            cart.splice(i,1);
        }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    vista.cart(cart);
}


function login(json){
    if(json.token == "eyJhbGciOiJIUzI1NiIsInR"){
        $("#login--message").show(200);
    }
}


function register(json){
    if(json.id == 1 || json.id == 11){
        $("#signup--message").show(200);
    }
}

function sortProducts(sort, category){
    if(category == "Todos"){
        changeToproduct(sort);
    }
    else{
        changeCategories(category, sort);
    }
}

function changeQuantity(id, quantity, cart){
    for(var i = 0; i < cart.length; i++){
        if(cart[i].id == id){
            cart[i].quantity = quantity;
        }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    vista.cart(cart);
}
