// Funciones para cambiar entre el formulario de inicio de sesión y registro
function showRegister() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("registerForm").style.display = "block";
}

function showLogin() {
    document.getElementById("registerForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
}

// Funciones para manejar los formularios
document.getElementById("login").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Obtener datos del formulario
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    
    // Lógica para validar (esto se puede mejorar dependiendo del backend)
    if (email && password) {
        alert("Inicio de sesión exitoso");
        // Aquí podrías redirigir a otra página o mostrar un mensaje
    } else {
        alert("Por favor, ingresa un correo y contraseña válidos");
    }
});

document.getElementById("register").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obtener datos del formulario
    const name = document.getElementById("registerName").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;

    // Lógica de validación (esto también debe ser más complejo en producción)
    if (name && email && password) {
        alert("Registro exitoso");
        // Aquí podrías hacer una llamada al servidor para guardar los datos
    } else {
        alert("Por favor, llena todos los campos");
    }
});
