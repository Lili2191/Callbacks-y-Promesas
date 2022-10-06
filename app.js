//---Aplicando Callback---
//const paises=['Francia','España','Portugal','México','Argentina']//arreglo
//async: asincrona

/*function nuevoPais(pais, callback){
    setTimeout(()=>{
        paises.push(pais)
        callback()
    },3000)
}*/

/*function mostrarPaises(){
    setTimeout(()=>{
        paises.forEach(pais=>{
            console.log(pais)
        })
    },2000)
}*/

//mostrarPaises()
//nuevoPais('Alemania',mostrarPaises)
//---CalbackHell: callback infernal o del infierno: donde se repite el callback un numero indefinido de veces, mala práctica.---
const paises=[]
function nuevoPais(pais, callback){
        paises.push(pais)
        console.log(`Agregando:${pais}`)
        callback()
}

function mostrarPaises(){
    console.log(paises)
}

function iniciarCallbackHell(){
    setTimeout(()=>{
        nuevoPais('Alemania',mostrarPaises)
        setTimeout(()=>{
            nuevoPais('México',mostrarPaises)
            setTimeout(()=>{
                nuevoPais('Francia',mostrarPaises)
            },3000)
        },3000)
    },3000)
}
iniciarCallbackHell()
