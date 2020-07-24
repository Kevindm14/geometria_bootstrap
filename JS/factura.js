const nombre = document.getElementById("nombre"),
    telefono = document.getElementById("telefono"),
    email = document.getElementById("email"),
    libro = document.getElementById("libro"),
    pago = document.getElementById("pago"),
    tarjeta = document.getElementById("tarjeta"),
    vencimiento = document.getElementById("vencimiento"),
    cvv = document.getElementById("ccv"),
    form = document.getElementById("form_factura"),
    precio = document.getElementById("precio");

libro.addEventListener("change", (e) => {
    const value = e.target.value

    libros.map(e => {
        if (e.id == value) {
            localStorage.setItem('libroselect', e.nombre)
            precio.innerHTML = `Libro ${e.nombre} y su precio es: $${e.precio}`
        }
    })
})

const res = document.getElementById("respuesta"),
    mLibro = document.getElementById("mLibro"),
    mTarjeta = document.getElementById("m_tarjeta");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const libro = localStorage.getItem('libroselect')

    const comprador = {
        nombre: nombre.value,
        telefono: telefono.value,
        email: email.value,
        libro: libro,
        pago: pago.value,
        tarjeta: tarjeta.value,
        vencimiento: vencimiento.value,
        cvv: cvv.value,
    } 

    res.innerHTML = "!Compra realizada correctamtente! su pedido llegara pronto"
    mLibro.innerHTML = `Su libro es ${comprador.libro}`
    mTarjeta.innerHTML = `Gracias por comprar ${comprador.nombre}`
    localStorage.removeItem('libroselect')
})