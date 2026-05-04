//Contenedores
const ministerioTrabajo = document.querySelector(".ministerioTrabajo");
const tribunalesTrabajo = document.querySelector(".tribunalesTrabajo");
const organizacionTrabajo = document.querySelector(".organizacionTrabajo");

//Enlaces a ventanas
const leerMinis = document.querySelector(".leer-minis");
const leerTribu = document.querySelector(".leer-tribu");
const leerOrga = document.querySelector(".leer-orga");

//Ventanas
const fondoMinisterio = document.querySelector(".fondo-ministerio");
const fondoTribunales = document.querySelector(".fondo-tribunales");
const fondoOrganizacion = document.querySelector(".fondo-organizacion");

//Botones de cerrar
const cerrarVentanaM = document.querySelector(".cerrarVentanaMinisterio");
const cerrarVentanaT = document.querySelector(".cerrarVentanaTribunal");
const cerrarVentanaO = document.querySelector(".cerrarVentanaOrganizacion");

//Ministerio Trabajo contenedor
ministerioTrabajo.addEventListener("mouseenter", () => {
    ministerioTrabajo.classList.add("institucionCambio");
});

ministerioTrabajo.addEventListener("mouseleave", () => {
    ministerioTrabajo.classList.remove("institucionCambio");
});

ministerioTrabajo.addEventListener("click", () => {
    ministerioTrabajo.classList.add("institucionCambio");
});

ministerioTrabajo.addEventListener("dblclick", () => {
    ministerioTrabajo.classList.remove("institucionCambio");
});

//Tribunales trabajo contenedor
tribunalesTrabajo.addEventListener("mouseenter", () => {
    tribunalesTrabajo.classList.add("institucionCambio");
});

tribunalesTrabajo.addEventListener("mouseleave", () => {
    tribunalesTrabajo.classList.remove("institucionCambio");
});

tribunalesTrabajo.addEventListener("click", () => {
    tribunalesTrabajo.classList.add("institucionCambio");
});

tribunalesTrabajo.addEventListener("dblclick", () => {
    tribunalesTrabajo.classList.remove("institucionCambio");
});

//Organizacion trabajo contenedor
organizacionTrabajo.addEventListener("mouseenter", () => {
    organizacionTrabajo.classList.add("institucionCambio");
});

organizacionTrabajo.addEventListener("mouseleave", () => {
    organizacionTrabajo.classList.remove("institucionCambio");
});

organizacionTrabajo.addEventListener("click", () => {
    organizacionTrabajo.classList.add("institucionCambio");
});

organizacionTrabajo.addEventListener("dblclick", () => {
    organizacionTrabajo.classList.remove("institucionCambio");
});

//Ministerio de Trabajo ventana
leerMinis.addEventListener("click", () => {
    fondoMinisterio.classList.add("fondo-ministerio-cambio");
});

cerrarVentanaM.addEventListener("click", () => {
    fondoMinisterio.classList.remove("fondo-ministerio-cambio")
});

//Tribunales de Trabajo ventana
leerTribu.addEventListener("click", () => {
    fondoTribunales.classList.add("fondo-tribunales-cambio");
});

cerrarVentanaT.addEventListener("click", () => {
    fondoTribunales.classList.remove("fondo-tribunales-cambio")
});

//Organización ventana
leerOrga.addEventListener("click", () => {
    fondoOrganizacion.classList.add("fondo-organizacion-cambio");
});

cerrarVentanaO.addEventListener("click", () => {
    fondoOrganizacion.classList.remove("fondo-organizacion-cambio")
});