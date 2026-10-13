self.addEventListener('install',e=>self.skipWaiting()); /* v2.1 - force rebuild */
self.addEventListener('fetch',e=>{e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)))});
