//Based on tutorial in https://developers.google.com/web/ilt/pwa/caching-files-with-service-worker
// const request = new request();

var cacheName = "Restaurants";
self.addEventListener('install',function(){
  event.waitUntil(
    caches.open(cacheName).then(function(cache){
      return cache.addAll(
        [
          '/css/styles.css',
          '/js/dbhelper.js',
          '/js/main.js',
          '/js/restaurant_info.js',
          '/data/restaurants.json',
          '/index.html',
          '/restaurant.html'
        ]
      );
    })
    );
  });

  if('caches' in window){
    caches.open(cacheName);
  }
