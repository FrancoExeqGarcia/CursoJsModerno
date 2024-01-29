const notifications = document.querySelector("#notificar");

notifications.addEventListener('click', function(){
    Notification
        .requestPermission()
        .then(resultado => {
            console.log('Permiso de notificación:', resultado);
            if(resultado=== 'granted'){
                verNotificacion.disabled = false;
            }
        })
        .catch(error => {
            console.error('Error al solicitar permiso de notificación:', error);
        });
});

const verNotificacion = document.querySelector("#verNotificacion");

verNotificacion.addEventListener('click', () =>{
    console.log('Comprobación de notificación');
    console.log(Notification.permission);
    if (Notification.permission === "granted"){
        try {
            new Notification('Esta es la notificación', {
                icon: 'img/ccj.png'
            });
        } catch (error) {
            console.error('Error al crear la notificación:', error);
        }
    } else {
        console.log('El permiso de notificación no ha sido otorgado.');
    }
});
