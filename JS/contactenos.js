const mostrar = document.getElementById("mostrar"),
    form = document.getElementById("form_contactenos"),
    nombre = document.getElementById("nombre"),
    cedula = document.getElementById("cedula"),
    correo = document.getElementById("correo"),
    telefono = document.getElementById("telefono"),
    fecha = document.getElementById("fecha"),
    edad = document.getElementById("edad"),
    mensaje = document.getElementById("mensaje");

const users = []

form.addEventListener("submit", (event) => {
    event.preventDefault();
   
    const newUser = {
        nombre: nombre.value,
        cedula: cedula.value,
        correo: correo.value,
        telefono: telefono.value,
        fecha: fecha.value,
        edad: edad.value,
    }
    
    users.push(newUser);
    localStorage.setItem('tabla', JSON.stringify(users))
    mostrar.disabled = false 
})

mostrar.addEventListener('click', () => {
    const listUser = JSON.parse(localStorage.getItem('tabla')),
        tbody = document.querySelector('#tabla_contactos tbody')
    
    if (listUser == null) {
        mensaje.innerHTML = "No hay usuarios para mostrar"
        setTimeout(() => {
            mensaje.style.display = "none"
        }, 5000);
    } else {
        listUser.map(element => {
            let fila = tbody.insertRow(0),
                nombre = fila.insertCell(0),
                cedula = fila.insertCell(1),
                correo = fila.insertCell(2),
                telefono = fila.insertCell(3),
                fecha = fila.insertCell(4),
                edad = fila.insertCell(5)

            nombre.innerHTML = element.nombre;
            cedula.innerHTML = element.cedula;
            correo.innerHTML = element.correo;
            telefono.innerHTML = element.telefono;
            fecha.innerHTML = element.fecha;
            edad.innerHTML = element.edad;
        })
            
        mostrar.disabled = true
    }
})