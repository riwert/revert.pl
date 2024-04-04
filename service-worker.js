importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js')

if (workbox) {
  workbox.routing.registerRoute(
    /\.(?:html|css|js)$/,
    new workbox.strategies.CacheFirst()
  )
}
