const CACHE = "ia-tech-v100";

const FILES = [
  "/ia-tech/",
  "/ia-tech/index.html",
  "/ia-tech/manifest.json",
  "/ia-tech/icon-192.png",
  "/ia-tech/icon-512.png"
];

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(FILES))
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request).catch(() =>
      caches.match("/ia-tech/index.html")
    )
  );
});
