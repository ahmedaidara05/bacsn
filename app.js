function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.add('hidden');
    });
    document.getElementById(pageId).classList.remove('hidden');

    // Réinitialiser la barre de progression pour la page de chargement
    if (pageId === 'page-loading') {
        const progressBar = document.querySelector('#page-loading .progress-bar');
        progressBar.style.width = '0%';
        progressBar.style.animation = 'progress 10s linear forwards';
        setTimeout(() => {
            showPage('page-welcome');
            updateWelcomeMessage();
        }, 10000); // 10 secondes
    }
}

// Gestion du bouton "C'EST PARTI !" (page-home)
document.querySelector('#page-home .cta-button').addEventListener('click', () => {
    showPage('page-lion');
});

// Gestion du bouton "ENCHANTÉ" (page-lion)
document.querySelector('#page-lion .continue-button').addEventListener('click', () => {
    showPage('page-name');
});

// Gestion du bouton "CONTINUER" (page-name)
const nameContinueBtn = document.getElementById('name-continue-btn');
const firstnameInput = document.getElementById('firstname');
const lastnameInput = document.getElementById('lastname');

function checkNameInputs() {
    nameContinueBtn.disabled = !(firstnameInput.value.trim() && lastnameInput.value.trim());
}

firstnameInput.addEventListener('input', checkNameInputs);
lastnameInput.addEventListener('input', checkNameInputs);

nameContinueBtn.addEventListener('click', () => {
    const firstname = firstnameInput.value.trim();
    const lastname = lastnameInput.value.trim();
    if (firstname && lastname) {
        localStorage.setItem('userInfo', JSON.stringify({ firstname, lastname }));
        showPage('page-age');
    } else {
        alert('Veuillez remplir tous les champs.');
    }
});

// Gestion du bouton "CONTINUER" (page-age)
const ageContinueBtn = document.getElementById('age-continue-btn');
const ageInput = document.getElementById('age');

ageInput.addEventListener('input', () => {
    ageContinueBtn.disabled = !ageInput.value;
});

ageContinueBtn.addEventListener('click', () => {
    const age = ageInput.value;
    if (age) {
        const userInfo = JSON.parse(localStorage.getItem('userInfo')) || {};
        userInfo.age = age;
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
        showPage('page-level');
    } else {
        alert('Veuillez saisir votre âge.');
    }
});

// Gestion du bouton "CONTINUER" (page-level)
const levelContinueBtn = document.getElementById('level-continue-btn');
const radioButtons = document.querySelectorAll('input[name="level"]');

radioButtons.forEach(radio => {
    radio.addEventListener('change', () => {
        levelContinueBtn.disabled = false;
    });
});

levelContinueBtn.addEventListener('click', () => {
    const selectedLevel = document.querySelector('input[name="level"]:checked');
    if (selectedLevel) {
        const userInfo = JSON.parse(localStorage.getItem('userInfo')) || {};
        userInfo.level = selectedLevel.value;
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
        showPage('page-loading');
    } else {
        alert('Veuillez sélectionner un niveau.');
    }
});

// Mettre à jour le message de bienvenue
function updateWelcomeMessage() {
    const userInfo = JSON.parse(localStorage.getItem('userInfo')) || {};
    const fullName = `${userInfo.firstname || 'Utilisateur'} ${userInfo.lastname || ''}`.trim();
    document.getElementById('user-name').textContent = fullName || 'Utilisateur';
}

// Bloquer les captures d’écran et le copier-coller
document.addEventListener('contextmenu', (e) => e.preventDefault());
document.addEventListener('keydown', (e) => {
    if (e.key === 'PrintScreen' || (e.ctrlKey && e.key === 'c')) {
        e.preventDefault();
    }
});

// Initialiser la première page
showPage('page-home');
