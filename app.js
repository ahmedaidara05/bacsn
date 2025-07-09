function showPage(pageId, subject = null) {
    document.querySelectorAll('.page').forEach(page => page.classList.add('hidden'));
    document.getElementById(pageId).classList.remove('hidden');

    if (pageId === 'page-loading') {
        const progressBar = document.querySelector('#page-loading .progress-bar');
        progressBar.style.width = '0%';
        progressBar.style.animation = 'progress 10s linear forwards';
        setTimeout(() => {
            showPage('page-welcome');
            updateWelcomeMessage();
        }, 10000);
    }

    if (pageId === 'page-lessons' && subject) {
        loadSubjectContent(subject);
    }

    if (pageId === 'page-main') {
        updateQuote();
        updateUserName();
    }
}

// Gestion du nom utilisateur
function updateUserName() {
    const userInfo = JSON.parse(localStorage.getItem('userInfo')) || {};
    const fullName = `${userInfo.firstname || 'Utilisateur'} ${userInfo.lastname || ''}`.trim();
    document.getElementById('user-fullname').textContent = fullName;
}

// Gestion des citations
function updateQuote() {
    const { citation, auteur, explication } = getDailyQuote();
    document.getElementById('quote-text').textContent = citation;
    document.getElementById('quote-author').textContent = `- ${auteur}`;
    document.getElementById('quote-explanation').textContent = explication;
}

// Gestion des pages
document.querySelector('#page-home .cta-button').addEventListener('click', () => showPage('page-lion'));
document.querySelector('#page-lion .continue-button').addEventListener('click', () => showPage('page-name'));

// Page nom et prénom
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

// Page âge
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

// Page niveau
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

// Page bienvenue
function updateWelcomeMessage() {
    const userInfo = JSON.parse(localStorage.getItem('userInfo')) || {};
    const fullName = `${userInfo.firstname || 'Utilisateur'} ${userInfo.lastname || ''}`.trim();
    document.getElementById('user-name').textContent = fullName;
}

// Page Série L
const subjects = [
    { name: "Histoire-Géo", icon: "🌍", courseCount: "4 cours" },
    { name: "Philosophie", icon: "🤔", courseCount: "5 cours" },
    { name: "Mathématiques", icon: "🧮", courseCount: "6 cours" },
    { name: "Physique-Chimie", icon: "⚛️", courseCount: "5 cours" },
    { name: "Français", icon: "📖", courseCount: "4 cours" },
    { name: "Bibliothèque", icon: "📚", courseCount: "10 livres" },
    { name: "Anglais", icon: "🇬🇧", courseCount: "3 cours" },
    { name: "Espagnol", icon: "🇪🇸", courseCount: "3 cours" },
    { name: "EPS", icon: "🏃", courseCount: "2 cours" },
    { name: "Dessin", icon: "🎨", courseCount: "3 cours" }
];

function loadSubjects() {
    const subjectsGrid = document.getElementById('subjectsGrid');
    subjectsGrid.innerHTML = '';
    subjects.forEach(subject => {
        const card = document.createElement('div');
        card.className = 'subject-card';
        card.innerHTML = `
            <div class="subject-icon">${subject.icon}</div>
            <div class="subject-name">${subject.name}</div>
            <div class="course-count">${subject.courseCount}</div>
        `;
        card.addEventListener('click', () => {
            showPage('page-lessons', subject.name.toLowerCase().replace(' ', '-'));
        });
        subjectsGrid.appendChild(card);
    });
}

// Page leçons
function createCard(item, containerId, isNote = false) {
    const container = document.getElementById(containerId);
    const card = document.createElement('div');
    card.className = `lesson-card ${isNote ? 'fade-in' : ''}`;
    card.innerHTML = `
        <div class="lesson-info">
            <div class="lesson-title">
                ${item.title}
                ${item.starred ? '<span class="star-icon">★</span>' : ''}
            </div>
            <div class="lesson-meta">
                <span class="lesson-status">${item.status} · ${item.time}</span>
                ${item.emoji ? '<span class="lesson-emoji">${item.emoji}</span>' : ''}
            </div>
        </div>
        <div class="lesson-number">${item.number}</div>
    `;
    container.appendChild(card);
    return card;
}

function loadSubjectContent(subject) {
    const subjectData = {
        'mathématiques': mathsContent,
        'français': francaisContent,
        'histoire-géo': histoireGeoContent,
        'philosophie': philosophieContent,
        'physique-chimie': physiqueChimieContent,
        'anglais': anglaisContent,
        'espagnol': espagnolContent,
        'eps': epsContent,
        'dessin': dessinContent,
        'bibliothèque': bibliothequeContent
    }[subject] || { lessons: [], bacSubjects: [], summaries: [], notes: [] };

    document.getElementById('subject-title').textContent = subject.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
    const lessonList = document.getElementById('lessonList');
    const bacList = document.getElementById('bacList');
    const summaryList = document.getElementById('summaryList');
    const noteList = document.getElementById('noteList');
    lessonList.innerHTML = '';
    bacList.innerHTML = '';
    summaryList.innerHTML = '';
    noteList.innerHTML = '';

    subjectData.lessons.forEach(lesson => createCard(lesson, 'lessonList'));
    subjectData.bacSubjects.forEach(bac => createCard(bac, 'bacList'));
    subjectData.summaries.forEach(summary => createCard(summary, 'summaryList'));
    subjectData.notes.forEach(note => createCard(note, 'noteList', true));

    const addNoteBtn = document.getElementById('addNoteBtn');
    addNoteBtn.onclick = () => {
        const noteCount = subjectData.notes.length + 1;
        const newNote = { title: `Note personnelle ${noteCount}`, status: "Nouveau", time: "Maintenant", number: noteCount };
        subjectData.notes.push(newNote);
        createCard(newNote, 'noteList', true).addEventListener('click', () => {
            const newTitle = prompt("Modifier le titre de la note:", newNote.title);
            if (newTitle) {
                newNote.title = newTitle;
                loadSubjectContent(subject);
            }
        });
    };

    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.onclick = () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            tabContents.forEach(content => content.classList.add('hidden'));
            document.getElementById(tab.getAttribute('data-tab') + 'Tab').classList.remove('hidden');
        };
    });
}

// Bloquer captures et copier-coller
document.addEventListener('contextmenu', e => e.preventDefault());
document.addEventListener('keydown', e => {
    if (e.key === 'PrintScreen' || (e.ctrlKey && e.key === 'c')) {
        e.preventDefault();
    }
});

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    loadSubjects();
    showPage('page-home');
});
