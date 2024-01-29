document.addEventListener('DOMContentLoaded',()=>{
    //primero habilitamos intersection observer
    const observer = new IntersectionObserver( entries =>{
        if(entries[0].isIntersecting){
            console.log('ya esta visible');
        }
    }); //ej para aplicar scrolling finito
    //le decimos que elementos vamos a observar y cuando el elemento este visible 
    //o no nos va a estar notificando en el intersectionobserver
    observer.observe(document.querySelector('.premium'));
})