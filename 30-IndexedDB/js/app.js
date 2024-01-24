document.addEventListener('DOMContentLoaded', () =>
{
    crmDB();
})

function crmDB(){
    //crear bd version 1.0
    let crmDB = window.indexedDB.open('crm', 1);

    //si hay error
    crmDB.onerror = function(){
        console.log('Hubo un error al crear la base de datos');

    }
    //si se creo bien
    crmDB.onsuccess = function(){
        console.log('base de datos creada');
    }
    //configuracion de la base de datos

    crmDB.onupgradeneeded = function(e){
        const db = e.target.result;

        const objectStore = db.createObjectStore('crm', {
            keyPath: 'crm',
            autoIncrement: true
        });

        objectStore.createIndex('nombre','nombre',{unique: false});
        objectStore.createIndex('email','email',{unique: true});
        objectStore.createIndex('telefono','telefono',{unique: false});

        console.log('columnas creadas');
    }
}

function crearCliente(){
    
}