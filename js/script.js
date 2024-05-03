document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("formulario-contacto");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const nombre = form.nombre.value.trim();
        const apellido = form.apellido.value.trim();
        const email = form.email.value.trim();
        const tipoNumero = form['tipo-numero'].value;
        const numero = form.numero.value.trim();
        const consulta = form.consulta.value.trim();
        const aceptaNotificaciones = form['acepta-notificaciones'].checked;

        // Validación del formato del número de celular
        const celularRegex = /^\d{10}$/;
        if (!celularRegex.test(numero)) {
            alert("El número de celular/telefono debe tener 10 dígitos (sin espacios ni guiones).");
            return;
        }

        // Validación del formato del email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Por favor, ingrese un correo electrónico válido.");
            return;
        }

        // Si todos los campos son válidos, se puede enviar el formulario
        alert("En breve nos comunicaremos con usted.");
        form.reset();
    });
});

