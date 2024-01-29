window.addEventListener('online', actualizarEstado);
window.addEventListener('offline', actualizarEstado);

function actualizarEstado(){
    if(navigator.onLine){
        console.log('si estas conectado')
    }
    else{
        console.log('no estas conectado')
    }
}


//esta es la base de progressive web application