let input = document.getElementById("inputText")
let boton = document.getElementById("buttonText")

boton.addEventListener('click', () =>{
    let valor = input.value;
    localStorage.setItem('valor', valor)
})
