const precio = document.getElementById('precio-inicial').textContent;
let cantidad = document.getElementById("cantidad").textContent;
let t_value = document.getElementById('valor-total').textContent;
let btn_add = document.querySelector('#add');
let btn_less = document.querySelector('#less');
let valor_total = (precio * cantidad);

function display() {
    alert("Clickeado");
}

btn_add.addEventListener('click', display);
btn_less.addEventListener('click', display);

t_value.innerHTML = valor_total;

console.log(valor_total);
alert(valor_total);