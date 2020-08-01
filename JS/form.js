const users = [
    {
        email: "kevin@hotmail.com",
        password: "123",
        nombre: "kevin",
    },
    {
        email: "admin@admin.com",
        password: "admin",
        nombre: "admin",
    }
]

localStorage.setItem('usuarios', JSON.stringify(users))

// user
const email = document.getElementById("email"),
    password = document.getElementById("password"),
    form = document.getElementById("form"),
    danger = document.getElementById("danger");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const usuario = {
        email: email.value,
        password: password.value,
    }

    const usuarios = JSON.parse(localStorage.getItem('usuarios'))
    
    usuarios.map(e => {
        if (usuario.email == e.email &&  usuario.password == e.password) {
            localStorage.setItem('login', e.nombre)
            location.href = "html/inicio.html"
        }
    });
})