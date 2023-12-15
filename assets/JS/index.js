const precio = document.getElementById('precio-inicial').textContent;
let cantidad = document.getElementById("cantidad").textContent;
let t_value = document.getElementById('valor-total').textContent;
let valor_total = (precio * cantidad);

t_value.innerHTML = valor_total;

console.log(valor_total);