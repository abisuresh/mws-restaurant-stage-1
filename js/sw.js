//Based on tutorial in https://developers.google.com/web/ilt/pwa/caching-files-with-service-worker
// const request = new request();
self.addEventListener(){
  event.waitUntil(
    caches.open(cacheName).then(function(cache){
      return cache.addAll{
        [

        ]
      );
    })
  );
});
