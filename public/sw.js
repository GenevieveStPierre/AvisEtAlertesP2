const STATIC_CACHE = 'static-v2';
const API_CACHE = 'api-cache-v1';
const API_URL = 'https://donnees.montreal.ca/api/3/action/datastore_search?resource_id=fc6e5f85-7eba-451c-8243-bdf35c2ab336';

const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/offline.html',
  '/App.css',
  '/icons/android-chrome-192x192.png',
  '/icons/android-chrome-512x512.png',
  '/icons/apple-touch-icon.png',
  '/icons/favicon-16x16.png',
  '/icons/favicon-32x32.png',
  '/assets/Logo_Montreal.png',
  '/assets/Icon_login.png',
  '/assets/down.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then(cache => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  const allowedCaches = [STATIC_CACHE, API_CACHE];
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (!allowedCaches.includes(key)) {
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  const requestURL = new URL(event.request.url);

  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then(response => response)
        .catch(() => caches.match('/offline.html'))
    );
    return;
  }

  if (event.request.url.startsWith(API_URL)) {
    event.respondWith(
      caches.open(API_CACHE).then(cache =>
        fetch(event.request)
          .then(networkResponse => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          })
          .catch(() =>
            caches.match(event.request).then(cached => {
              if (cached) return cached;
              return new Response(JSON.stringify({ result: { records: [] } }), {
                headers: { 'Content-Type': 'application/json' }
              });
            })
          )
      )
    );
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then(fetchResponse => {
        return caches.open(STATIC_CACHE).then(cache => {
          cache.put(event.request, fetchResponse.clone());
          return fetchResponse;
        });
      })
      .catch(() => {
        return caches.match(event.request).then(response => {
          if (response) return response;
          return caches.match('/offline.html');
        });
      })
  );
});