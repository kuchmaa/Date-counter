import { host } from "../main.js";

export default function serviceWorker() {
    self.addEventListener("install", (event) => {
      event.waitUntil(
        caches.open("my-cache").then((cache) => {
          return cache.addAll([`${host}/`]);
        })
      );
    });

    window.location.href = host;
};

