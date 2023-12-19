const precio = 40000
let cantidad = 0
const precioSpan = document.getElementById("precio-inicial").innerHTML = precio
const cantidadSpan = document.getElementById("cantidad")
let t_value = document.getElementById("valor-total")
let btn_add = document.querySelector("#add");
let btn_less = document.querySelector("#less");

btn_add.addEventListener('click', (event) => {
    cantidad++;
    cantidadSpan.innerHTML = cantidad;
    t_value.innerHTML = (precio * cantidad);
});

btn_less.addEventListener('click', (event) => {
    if (cantidad > 0){
        cantidad--;
        cantidadSpan.innerHTML = cantidad;
        t_value.innerHTML = (precio * cantidad);
    }
});

