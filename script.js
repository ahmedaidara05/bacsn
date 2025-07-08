document.addEventListener('DOMContentLoaded', () => {
    // Gestion de l'affichage des pages
    function showPage(pageId) {
        document.querySelectorAll('.page').forEach(page => {
            page.style.display = 'none';
        });
        document.getElementById(pageId).style.display = 'flex';
    }

    // Sauvegarde du nom
    function saveName() {
        const firstName = document.getElementById('firstname').value.trim();
        const lastName = document.getElementById('lastname').value.trim();
        if (firstName && lastName) {
            localStorage.setItem('userFullName', `${firstName} ${lastName}`);
            showPage('age');
        } else {
            alert('Veuillez remplir tous les champs');
        }
    }

    // Gestion du bouton Continuer pour l'âge
    const ageInput = document.getElementById('age');
    const ageContinueBtn = document.getElementById('age-continue');
    if (ageInput && ageContinueBtn) {
        ageInput.addEventListener('input', () => {
            ageContinueBtn.disabled = !ageInput.value;
        });
        ageContinueBtn.addEventListener('click', () => {
            const age = ageInput.value;
            if (age) {
                localStorage.setItem('userAge', age);
                showPage('level');
            }
        });
    }

    // Gestion du bouton Continuer pour le niveau
    const radioButtons = document.querySelectorAll('input[name="math-level"]');
    const levelContinueBtn = document.getElementById('level-continue');
    if (radioButtons && levelContinueBtn) {
        radioButtons.forEach(radio => {
            radio.addEventListener('change', () => {
                levelContinueBtn.disabled = false;
            });
        });
        levelContinueBtn.addEventListener('click', () => {
            const selectedLevel = document.querySelector('input[name="math-level"]:checked').value;
            localStorage.setItem('userLevel', selectedLevel);
            showPage('loading');
            // Lancer le chargement automatique
            setTimeout(() => {
                showPage('welcome');
                // Afficher le nom de l'utilisateur
                const userName = localStorage.getItem('userFullName') || 'Utilisateur';
                document.getElementById('user-name').textContent = userName;
            }, 10000); // 10 secondes
        });
    }

    // Initialisation : afficher la page d'accueil
    showPage('home');
});
