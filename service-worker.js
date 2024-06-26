self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        'https://rohitks77.github.io/ctevt-notes-manifest/main.js',
        'https://rohitks77.github.io/ctevt-notes-manifest/manifest.json',  // Adjusted for GitHub Pages
        'https://rohitks77.github.io/rohitks77-manifest/icons/icon-72x72.png',
        'https://rohitks77.github.io/rohitks77-manifest/icons/icon-96x96.png',
        'https://rohitks77.github.io/rohitks77-manifest/icons/icon-144x144.png',
        'https://rohitks77.github.io/rohitks77-manifest/icons/icon-192x192.png',
        'https://rohitks77.github.io/rohitks77-manifest/icons/icon-512x512.png',
      ]);
    })
  );
});
