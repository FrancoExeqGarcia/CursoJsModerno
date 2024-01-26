const aplicarDescuento = new Promise( (resolve, reject) =>{
    const descuento = true;

    if(descuento) {
        resolve('desccuento apliccado')
    }else{
        reject('no se pudo descontar')
    }
})

aplicarDescuento
    .then( resultado =>{
    console.log(resultado);
    })
    .catch( error=>{
        console.log(error);
    })