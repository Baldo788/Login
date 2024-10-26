const usuarios = [
    {nombre: '1001290011', email: 'juan1234@gmail.com', password: 'Password2' },
    {nombre: '2001390012', email: 'miguelrtx@hotmail.com', password: 'Password2'},
    {nombre: 'Dinorex123', email: 'osvaldo@gmail.com', password: 'Password2'}
];

function validarUsuario() {
    const nombre = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Expresión regular para la validación de contraseña
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

    // Validar si el usuario existe
    const usuarioExiste = usuarios.some(usuario => usuario.nombre === nombre);

    if (!usuarioExiste) {
        alert('Usuario no registrado.');
        return;
    }

    // Validar contraseña usando la expresión regular
    if (!regexPassword.test(password)) {
        alert('La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula y un número.');
        return;
    }

    alert('Inicio de sesión exitoso.');
}