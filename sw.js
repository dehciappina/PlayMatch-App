if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/sw.js').then(function(registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);

        self.addEventListener('install', function(event) {
            var CACHE_NAME = 'my-site-cache-v1';
            var urlsToCache = [
            '/',
            '/scripts/party_script.js',
            '/scripts/playmatch_script.js'
            ];

            self.addEventListener('install', function(event) {
            // Perform install steps
            event.waitUntil(
                caches.open(CACHE_NAME)
                .then(function(cache) {
                    console.log('Opened cache');
                    return cache.addAll(urlsToCache);
                })
            );
            });
        });
      }, function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      });
    });
  }