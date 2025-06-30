if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(() => console.log('✅ Service Worker зарегистрирован'))
    .catch(error => console.error('❌ Ошибка при регистрации:', error));
}