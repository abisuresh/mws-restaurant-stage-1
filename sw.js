//Based on tutorial in https://developers.google.com/web/ilt/pwa/caching-files-with-service-worker
//https://developers.google.com/web/fundamentals/primers/service-workers/ and
// https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#cache-falling-back-to-network
// const request = new request();

var cacheName = "Restaurants";
var pagesToCache = [
    '/css/styles.css',
    '/js/dbhelper.js',
    '/js/main.js',
    '/js/restaurant_info.js',
    '/data/restaurants.json',
    '/index.html',
    '/restaurant.html'
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

self.addEventListener('fetch', function(event){
    event.respondWith(
        caches.match(event.request)
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

// When offline

// self.addEventListener('fetch', function(event){
//     event.respondWith(
//         caches.match(event.request).then(function(response)
//         {
//             return response || fetch(event.request);
//         })
//     );
// });

//Updating service worker
