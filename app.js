let wakeLock = null;
const requestWakeLock = async () => {
  try {
    wakeLock = await navigator.wakeLock.request();
  } catch (err) {
    console.error(`${err.name}, ${err.message}`);
  }
};
await requestWakeLock();

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/svg-clock-pwa/sw.js', { scope: '/svg-clock-pwa/' });
}
