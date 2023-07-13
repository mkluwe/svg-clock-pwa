document.body.addEventListener('pointerdown', (event) => {
    alert('pointer down!')
});

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sample-pwa/sw.js', { scope: '/sample-pwa/' });
}
