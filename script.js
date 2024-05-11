document.addEventListener("DOMContentLoaded", function() {
    const loaderContainer = document.querySelector('.loader-container');

    // Pokazujemy loader po 5 sekundach
    setTimeout(function() {
        loaderContainer.style.display = 'block';
    }, 5000);
});
