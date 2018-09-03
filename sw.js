//Based on tutorial in https://developers.google.com/web/ilt/pwa/caching-files-with-service-worker
//https://developers.google.com/web/fundamentals/primers/service-workers/
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

// if('caches' in window){
//   caches.open(cacheName);
// }

//Updating service worker
