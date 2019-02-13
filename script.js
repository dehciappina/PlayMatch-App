if ('serviceWorker' in navigator) {
    console.log("SERVICEWORKER NO NAVEGADOR")
    navigator.serviceWorker.register('./sw.js');
}