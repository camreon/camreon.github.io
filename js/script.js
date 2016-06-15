function toggleBG() {
    document.getElementById('bg').classList.toggle('bgvid');
}

(function() {
    toggleBG();

    var bgToggle = document.getElementById('bgToggle');
    bgToggle.addEventListener('click', function() {
        toggleBG();
    });

    $('[data-toggle="tooltip"]').tooltip().tooltip('show');
})();
