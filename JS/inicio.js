const nombre = localStorage.getItem('login'),
    encabezado = document.getElementById("nombreusuario");


if (nombre == null) {
    encabezado.innerHTML = "Bienvenido, invitado";
} else { 
    encabezado.innerHTML = `Bienvenido, ${nombre}`;
}