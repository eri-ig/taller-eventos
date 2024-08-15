const div = document.getElementById('div1');

div.addEventListener("click", function () {
    alert("Hola! Soy el div")
});

const boton = document.getElementById('boton1');

boton.addEventListener('click', function (event) {
    event.stopPropagation();
});