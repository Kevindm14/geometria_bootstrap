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
    
    users.splice(0, 0, newUser);
    localStorage.setItem('tabla', JSON.stringify(users))
    mostrar.disabled = false 
})

function delRow(current) {
    const row = current.parentNode.parentNode.rowIndex;
    document.getElementById("tabla_contactos").deleteRow(row);
    users.splice(row-1, 1);
    localStorage.setItem('tabla', JSON.stringify(users))
}

mostrar.addEventListener('click', () => {
    const listUser = JSON.parse(localStorage.getItem('tabla')),
        tbody = document.querySelector('#tabla_contactos tbody')
    
    const listUser2 = listUser.reverse()
    
    if (listUser == null) {
        mensaje.innerHTML = "No hay usuarios para mostrar"
    } else {
        listUser2.map(element => {
            let fila = tbody.insertRow(0),
                nombre = fila.insertCell(0),
                cedula = fila.insertCell(1),
                correo = fila.insertCell(2),
                telefono = fila.insertCell(3),
                fecha = fila.insertCell(4),
                edad = fila.insertCell(5),
                buton = fila.insertCell(6);

            nombre.innerHTML = element.nombre;
            cedula.innerHTML = element.cedula;
            correo.innerHTML = element.correo;
            telefono.innerHTML = element.telefono;
            fecha.innerHTML = element.fecha;
            edad.innerHTML = element.edad;
            buton.innerHTML = '<button id="btn" onclick="delRow(this)" class="btn btn-sm btn-danger"> Delete</button>'
        })
            
        mostrar.disabled = true
    }
})