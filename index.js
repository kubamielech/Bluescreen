function startBSOD() {
    // Ukryj kontener startowy
    document.getElementById('start-container').style.display = 'none';
    
    // Wyświetl BSOD
    const bsod = document.getElementById('bsod');
    bsod.style.display = 'flex';
    
    // Wejdź w tryb pełnoekranowy
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
    }
    
    // Pobierz czas ładowania z inputa (w sekundach) i zamień na milisekundy
    let time = parseInt(document.getElementById('loadingTime').value);
    if(isNaN(time) || time < 1) { time = 5; }
    
    const timeUnit = document.getElementById('timeUnit').value;

    // Zamiana na milisekundy (sekundy = 1000 ms, minuty = 60 * 1000 ms, godziny = 3600 * 1000 ms)
    let totalTime;
    switch(timeUnit) {
        case 'seconds':
            totalTime = time * 1000; // Sekundy na milisekundy
            break;
        case 'minutes':
            totalTime = time * 60 * 1000; // Minuty na milisekundy
            break;
        case 'hours':
            totalTime = time * 60 * 60 * 1000; // Godziny na milisekundy
            break;
        default:
            totalTime = time * 1000; // Domyślnie w sekundach
    }
    
    let progress = 0;
    const progressText = document.getElementById('progress-text');
    
    // Oblicz interwał dla każdego procenta
    let intervalTime = totalTime / 100;
    
    let loading = setInterval(() => {
        progress++;
        progressText.innerText = progress;
        
        if(progress >= 100) {
            clearInterval(loading);
        }
    }, intervalTime);
}
