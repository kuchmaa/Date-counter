
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("my-cache").then((cache) => {
      return cache.addAll(["/"]);
    })
  );
});

window.location.href = "/";
