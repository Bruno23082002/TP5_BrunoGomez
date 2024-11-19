// Agregar un evento al formulario para manejar el envío
document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que se envíe el formulario de manera tradicional

    const nombre = document.getElementById("nombre").value; // Obtener el valor del campo nombre
    const pais = document.getElementById("pais").value; // Obtener el valor del campo país
    const genero = document.querySelector('input[name="genero"]:checked')?.value; // Obtener el valor del campo género seleccionado
    const intereses = Array.from(document.querySelectorAll('input[name="intereses"]:checked')).map(el => el.value); // Obtener los valores de los campos de interés seleccionados

    // Crear un resultado en formato HTML
    const resultado = `
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>País:</strong> ${pais}</p>
        <p><strong>Género:</strong> ${genero}</p>
        <p><strong>Intereses:</strong> ${intereses.join(", ") || "Ninguno"}</p>
    `;

    document.getElementById("resultado").innerHTML = resultado; // Mostrar el resultado en el div con id "resultado"
});

// Agregar un evento al botón de reseteo para limpiar el formulario
document.getElementById("resetear").addEventListener("click", function () {
    document.getElementById("formulario").reset(); // Reiniciar el formulario
    document.getElementById("resultado").innerHTML = ""; // Limpiar el contenido del div de resultado
});
