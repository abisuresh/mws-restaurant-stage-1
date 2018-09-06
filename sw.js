//Based on tutorials in https://developers.google.com/web/ilt/pwa/caching-files-with-service-worker
//https://developers.google.com/web/fundamentals/primers/service-workers/
// https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers and
// https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#cache-falling-back-to-network

//Cache-ing images and pages
var cacheName = "Restaurants";
var pagesToCache = [
    '/',
    '/css/styles.css',
    '/js/dbhelper.js',
    '/js/main.js',
    '/js/restaurant_info.js',
    '/data/restaurants.json',
    '/index.html',
    '/restaurant.html',
    '/img/1.jpg',
    '/img/2.jpg',
    '/img/3.jpg',
    '/img/4.jpg',
    '/img/5.jpg',
    '/img/6.jpg',
    '/img/7.jpg',
    '/img/8.jpg',
    '/img/9.jpg',
    '/img/10.jpg'
];

//Installing service worker
self.addEventListener('install',function(event){
    event.waitUntil(
        caches.open(cacheName).then(function(cache){
            return cache.addAll(pagesToCache)
        })
    );
});

//Opening cached files
//When offline

self.addEventListener('fetch', function(event){
    event.respondWith(
        caches.match(event.request, {ignoreSearch: true})
            .then(function(response){
                    if(response) {
                        return response;
                    }

                    return fetch(event.request);
                }
            )
    );
});

// this.addEventListener('fetch', function(event){
//     var response;
//     event.respondWith(caches.match(event.request).catch(function() {
//         return fetch(event.request);
//     }).then(function(r){
//         response = r;
//         caches.open(cacheName).then(function(cache){
//             cache.put(event.request, response);
//         });
//         return response;
//
//     }));
// });

// When offline- alternate version

// self.addEventListener('fetch', function(event){
//     event.respondWith(
//         caches.match(event.request).then(function(response)
//         {
//             return response || fetch(event.request);
//         })
//     );
// });

//Updating service worker
