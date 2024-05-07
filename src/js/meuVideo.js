document.addEventListener('DOMContentLoaded', function() {
    var videos = document.querySelectorAll('video'); // Seleciona todos os elementos <video>

    videos.forEach(function(video) { // Itera sobre cada vídeo
        video.addEventListener('ended', function() { // Adiciona um evento de escuta para quando o vídeo terminar
            this.currentTime = 0; // Reinicia o vídeo
            this.play(); // Reproduz o vídeo novamente
        }, false);
    });
});
