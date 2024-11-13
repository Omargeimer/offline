const CACHE_NAME = 'mi-pwa-cache-v1';
const urlsToCache = [
    '/',                   // Página de inicio
    '/index.html',         // Archivo HTML principal
    '/app.js',             // Archivo JavaScript principal
    'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css'
];

// Evento de instalación: ocurre la primera vez que el Service Worker se registra
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Abriendo caché')
                return cache.addAll(urlsToCache);
            })
            .catch(err => console.log('Falló registro de cache', err))
    );
});

// Evento de activación: se ejecuta después de que el SW se instala y toma el control de la aplicación
self.addEventListener('activate', event => {
    console.log('Service Worker activado')
});

// Intercepta las solicitudes de red y responde con los recursos en caché si están disponibles
self.addEventListener('fetch', event => {
    event.respondWith(  // Usa e.respondWith
        caches.match(event.request)
        .then(response => {
            return response || fetch(event.request);
        })
    );
});
