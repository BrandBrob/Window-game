const btnPuntos = document.getElementById("btn-puntos")
const btnLose = document.getElementById("btn-lose")
const body = document.getElementById("body")
const sectionPoints = document.querySelector(".section-points__div")
const textLabel = document.createElement("p")
//audio
const audio = new Audio("assets/audio.mp3")
//Contador
let leftTime = 0
const contador = document.querySelector(".contador")

let puntos = 0
btnLose.style.display ="none"
btnPuntos.style.display = "none"

const perdiste = ()=>{
    btnPuntos.remove()
    textLabel.innerHTML = "Perdiste en esta ventana por tocar en lo blanco"
    body.style.background = "red"
    sectionPoints.appendChild(textLabel)
    body.removeEventListener("click",perdiste)
    clearInterval(setIntervalContador)
    const cerrar = document.createElement("button")
    cerrar.classList.add("btn-cerrar")
    cerrar.innerHTML = "¿Volver a intentar?"
    cerrar.addEventListener("click",()=>{
        window.open("index.html")
    })
    sectionPoints.appendChild(cerrar)
}
const handleLoseClick = () => {
    perdiste()
    btnLose.removeEventListener("click", handleLoseClick) // Usa la misma referencia para remover el event listener
}

body.addEventListener("click",perdiste)
btnLose.addEventListener("click",handleLoseClick)


const aumentarPuntos = (e)=>{
    e.stopPropagation()
    puntos++
    leftTime = 0
    contador.innerHTML =`Segundos: ${leftTime}`
    audio.play()
    divPuntos.innerHTML = `Puntos: ${puntos}`
    btnPuntos.style.display = "none"
    setTimeout(() => {
        btnPuntos.style.display = "flex"
    }, Math.round(Math.random()*5000 + 1000));
    console.log(puntos)

}

btnPuntos.addEventListener("click",aumentarPuntos,true)

setTimeout(() => {
    btnPuntos.style.display = "flex"
}, Math.round(Math.random()*5000 + 1000));

//Contador de tiempo si el boton puntos aparece
const contadorTiempo= ()=>{
        if(btnPuntos.style.display ==="flex"){
                leftTime = leftTime + 1000
                contador.innerHTML = `Segundos: ${leftTime}`
        }
        if(leftTime >=3000){
            perdiste()
            textLabel.innerHTML =`Perdiste en esta ventana por tiempo`
            clearInterval(setIntervalContador)

            

        }
    }
// Función para verificar continuamente el estado de btnPuntos y mostrar btnLose si está oculto
const checkBtnPuntos = () => {
    if (btnPuntos.style.display === "none") {
        btnLose.style.display = "block"
    }else{
        btnLose.style.display ="none"
    }
    
}
const checkContador = ()=>{
    contadorTiempo()
}

// Verificar continuamente cada 50ms
setInterval(checkBtnPuntos, 50)
let setIntervalContador = setInterval(checkContador,1000)
