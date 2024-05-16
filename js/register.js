let formRegistro = document.querySelector("#formRegistro");

let validarDatosFormulario = (event) => {
    event.preventDefault(); /* detener el envio de datos */

    let nombre = document.querySelector("#nombreUsuario");
    let apellido = document.querySelector("#apellidoUsuario");
    let correo = document.querySelector("#correoUsuario");
    let contrasenia = document.querySelector("#contraseniaUsuario");

    let validacion = true;

    if (nombre.value === "") {
        let divErrorNombre = document.querySelector("#errorNombre");
        divErrorNombre.textContent = "*El campo NOMBRE no puede quedar vacio";
        divErrorNombre.classList.add("error");
        validacion = false;
    }
    if (apellido.value === "") {
        let divErrorApellido = document.querySelector("#errorApellido");
        divErrorApellido.textContent = "*El campo APELLIDO no puede quedar vacio";
        divErrorApellido.classList.add("error");
        validacion = false;
    }
    if (correo.value === "") {
        let divErrorCorreo = document.querySelector("#errorCorreo");
        divErrorCorreo.textContent = "*El campo CORREO no puede quedar vacio";
        divErrorCorreo.classList.add("error");
        validacion = false;
    }
    if (contrasenia.value.length < 6) {
        let divErrorContrasenia = document.querySelector("#errorContrasenia");
        divErrorContrasenia.textContent = "*El campo CONTRASEÑA no puede contener menos de 6 caracteres";
        divErrorContrasenia.classList.add("error");
        validacion = false
    }

    if (validacion) {
        formRegistro.submit();
    }
}

formRegistro.addEventListener("submit",validarDatosFormulario);