//flechas
const arrow1 = document.querySelector(".arrow1");
const arrow2 = document.querySelector(".arrow2");
const arrow3 = document.querySelector(".arrow3");
const arrow4 = document.querySelector(".arrow4");

//Contenedores
const genero = document.querySelector(".genero");
const etnia = document.querySelector(".etnia");
const estrato = document.querySelector(".estrato");
const nacionalidad = document.querySelector(".nacionalidad");

//Eventos para abrir los contenedores
arrow1.addEventListener("click", () => {
    genero.classList.toggle("discriminacion-cambio");
});

arrow2.addEventListener("click", () => {
    etnia.classList.toggle("discriminacion-cambio");
});

arrow3.addEventListener("click", () => {
    estrato.classList.toggle("discriminacion-cambio");
});

arrow4.addEventListener("click", () => {
    nacionalidad.classList.toggle("discriminacion-cambio");
});