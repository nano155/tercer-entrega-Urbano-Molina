const body = document.querySelector("#body");
const hamburguesa = document.querySelector("#burguer");
const cerrar = document.querySelector("#close");

hamburguesa.addEventListener("click", ()=>{
    body.classList.add('body');
})
cerrar.addEventListener("click", ()=>{
    body.classList.remove('body');
})