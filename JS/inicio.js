const nombre = localStorage.getItem('login'),
    encabezado = document.getElementById("msj");


if (nombre == null) {
    encabezado.innerHTML = "Bienvenido, invitado";
} else { 
    encabezado.innerHTML = `Bienvenido, ${nombre}`;
}