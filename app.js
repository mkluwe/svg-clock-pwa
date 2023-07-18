if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/svg-clock-pwa/sw.js', { scope: '/svg-clock-pwa/' });
}
