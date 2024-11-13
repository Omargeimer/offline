if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js')
    .then(function(registration){
        console.log('Service Worker registrado con exito: ', registration)
    })
    .catch(function(error){
        console.log('Error al registrar el Service Worker', error)
    });
}