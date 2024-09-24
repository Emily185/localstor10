// Recuperar el valor del localStorage
let valorGuardado = localStorage.getItem('valor');

// Mostrar el valor en el elemento <span> con id 'data'
let spanData = document.getElementById("data");

if (valorGuardado) {
    spanData.textContent = valorGuardado; // Mostrar el valor guardado
} else {
    spanData.textContent = "No hay datos guardados"; // Mensaje si no hay nada guardado
}
