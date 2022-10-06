const aplicarDescuento=new Promise((resolve,reject)=>{
    const descuento=false;
    if(descuento){
        resolve('Descuento se ha aplicado')
    }else{
        reject('No se pudo aplicar el descuento')
    }
})

aplicarDescuento.then(resultado=>{
    console.log(resultado)
}).catch(error=>{
    console.log(error)
})

console.log(aplicarDescuento)

//callback to promise
const paises=[]
const nuevoPais=pais=>new Promise(resolve =>{
    setTimeout(()=>{
        paises.push(pais)
        resolve(`Se agrego el pais: ${pais}`)
    },3000)
})

nuevoPais('México')
  .then(resultado=>{
    console.log(resultado)
    console.log(paises)
    return nuevoPais('EUA')
})
.then(resultado=>{
    console.log(resultado)
    console.log(paises)
    return nuevoPais('Francia')
})
.then(resultado=>{
    console.log(resultado)
    console.log(paises)
})