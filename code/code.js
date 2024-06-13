const btnAbrir = document.getElementById("btn");
const divPuntos = document.getElementById("puntos")
let ventanasAbiertas = [];
let todasVentanasAbiertas

const abrirVentanas = (url, left, top) => {
    const opcionesVentana = `width=300,height=300,left=${left},top=${top}`;
    //Guarda las nuevas ventanas en una variable array
    const nuevaVentana = window.open(url, "_blank", opcionesVentana);
    if (nuevaVentana) {
        ventanasAbiertas.push(nuevaVentana);
    }
};

const abrirVentanasEnPantalla = () => {
    const ventanas = [
        { url: "index1.html", left: 30, top: 30 },
        { url: "index2.html", left: 1300, top: 30 },
        { url: "index3.html", left: 30, top: 1000 },
        { url: "index4.html", left: 1300, top: 1000 }
    ];

    ventanas.forEach((ventana) => {
        abrirVentanas(ventana.url, ventana.left, ventana.top);

    });
    // Comprueba si alguna ventana está abierta
    let algunaVentanaAbierta = ventanasAbiertas.some(ventana => !ventana.closed);
    if (algunaVentanaAbierta) {
        removeEventListenerBtn();
    }


};
const removeEventListenerBtn = ()=>{
    btnAbrir.removeEventListener("click", abrirVentanasEnPantalla);
}
try{
btnAbrir.addEventListener("click",abrirVentanasEnPantalla)
}
catch(e){
    console.log("")
}




