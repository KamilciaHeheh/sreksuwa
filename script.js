document.addEventListener("DOMContentLoaded", function() {
    const loaderContainer = document.querySelector('.loader-container');
    const content = document.querySelector('.content');

    // Pokazujemy loader na początku
    loaderContainer.style.display = 'block';

    // Po 5 sekundach ukrywamy loader i pokazujemy resztę treści strony
    setTimeout(function() {
        loaderContainer.style.display = 'none';
        content.style.display = 'block';
    }, 5000);
});
