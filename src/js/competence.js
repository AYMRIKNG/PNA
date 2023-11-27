document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.link a');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // Retirer la classe "active" de tous les liens
            links.forEach(link => {
                link.classList.remove('active');
            });

            // Ajouter la classe "active" au lien cliqué
            this.classList.add('active');
        });
    });
});
