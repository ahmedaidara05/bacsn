// Notifications quotidiennes (365 messages)
const notifications = [
  "Aujourd’hui, tu vas conquérir une nouvelle leçon !",
  "Chaque pas compte vers ton succès au bac !",
  "Révise avec passion, et le bac sera à toi !",
  // Ajoute 362 autres messages ici
];

// Citations motivantes
const quotes = [
  "Chaque effort te rapproche de ton objectif !",
  "Le bac, c’est juste une étape. Tu vas briller !",
  "Apprends aujourd’hui, réussis demain !",
  // Ajoute d’autres citations
];

// Afficher une notification quotidienne à 8h00
function showDailyNotification() {
  const now = new Date();
  if (now.getHours() === 8 && now.getMinutes() === 0) {
    const notification = document.getElementById("notification");
    const notificationText = document.getElementById("notification-text");
    const dayOfYear = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    notificationText.textContent = notifications[dayOfYear % notifications.length];
    notification.classList.remove("hidden");
  }
}
document.getElementById("close-notification").addEventListener("click", () => {
  document.getElementById("notification").classList.add("hidden");
});
setInterval(showDailyNotification, 60 * 1000); // Vérifie toutes les minutes

// Page d'accueil
document.getElementById("start-btn").addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const surname = document.getElementById("surname").value;
  const classe = document.getElementById("class").value;
  const age = document.getElementById("age").value;
  if (name && surname && classe && age) {
    localStorage.setItem("userInfo", JSON.stringify({ name, surname, classe, age }));
    showMainScreen();
  } else {
    alert("Veuillez remplir tous les champs.");
  }
});

document.getElementById("login-btn").addEventListener("click", () => {
  alert("Connexion facultative. Continuez sans compte ou contactez l’admin pour activer Firebase.");
});

// Gestion des séries
const series = ["L1", "L2", "STEG"];
const subjectsBySeries = {
  L1: ["Français", "Anglais", "Espagnol", "Philosophie", "Histoire", "Géographie", "Sport", "Dessin"],
  L2: ["Français", "Anglais", "Espagnol", "Philosophie", "Histoire", "Géographie", "Sport", "Dessin"],
  STEG: ["Français", "Anglais", "Espagnol", "Histoire", "Géographie", "Mathématiques", "Physique-Chimie", "Économie", "Mathématiques Financières", "Sport", "Dessin"]
};

document.querySelectorAll(".series-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const serie = btn.textContent;
    const subjects = subjectsBySeries[serie];
    const subjectList = document.getElementById("subject-list");
    subjectList.innerHTML = "";
    subjects.forEach((subject) => {
      const btn = document.createElement("button");
      btn.textContent = subject;
      btn.className = "subject-btn bg-green-500 text-white p-4 rounded-xl hover:bg-green-600 transform hover:scale-105 transition duration-300 shadow-md";
      btn.addEventListener("click", () => displayContent(subject));
      subjectList.appendChild(btn);
    });
    document.getElementById("subjects").classList.remove("hidden");
    document.getElementById("content").classList.add("hidden");
    document.getElementById("lesson").classList.add("hidden");
    document.getElementById("notes").classList.add("hidden");
  });
});

// Afficher le contenu
function displayContent(subject) {
  const contentList = document.getElementById("content-list");
  contentList.innerHTML = "";
  const options = ["Leçons", "Exercices", "Devoirs", "Sujets du Bac", "Notes"];
  options.forEach((option) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.className = "content-btn bg-blue-500 text-white p-4 rounded-xl hover:bg-blue-600 transform hover:scale-105 transition duration-300 shadow-md";
    btn.addEventListener("click", () => {
      if (option === "Leçons") {
        displayLessons(subject);
      } else if (option === "Notes") {
        displayNotes();
      }
    });
    contentList.appendChild(btn);
  });
  document.getElementById("content").classList.remove("hidden");
  document.getElementById("lesson").classList.add("hidden");
  document.getElementById("notes").classList.add("hidden");
}

// Afficher les leçons
function displayLessons(subject) {
  const lessons = window[subject.toLowerCase().replace(/[^a-zA-Z0-9]/g, "") + "Lessons"] || [];
  const contentList = document.getElementById("content-list");
  contentList.innerHTML = "";
  lessons.forEach((lesson, index) => {
    const isFree = index < lessons.length / 2;
    const btn = document.createElement("button");
    btn.innerHTML = `
      <div class="flex items-center justify-between">
        <span>${lesson.title}</span>
        ${isFree ? '' : '<span class="text-yellow-400">★ Payant</span>'}
      </div>
    `;
    btn.className = "bg-white text-left p-4 rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300";
    btn.addEventListener("click", () => {
      if (!isFree) {
        window.open("https://www.bac.sn", "_blank");
        return;
      }
      displayLessonContent(lesson);
    });
    contentList.appendChild(btn);
  });
  document.getElementById("content").classList.remove("hidden");
  document.getElementById("lesson").classList.add("hidden");
}

// Afficher le contenu d’une leçon
function displayLessonContent(lesson) {
  const lessonContent = document.getElementById("lesson-content");
  lessonContent.innerHTML = `
    <h3 class="text-xl font-bold text-blue-600 mb-4">${lesson.title}</h3>
    <div class="definition"><h4>Définition</h4><p>${lesson.definition}</p></div>
    <div class="formula"><h4>Formule</h4><p>${lesson.formula}</p></div>
    <div class="example"><h4>Exemple</h4><p>${lesson.example}</p></div>
    <h4 class="text-lg font-bold text-blue-600 mt-4">Exercices</h4>
    <ul class="space-y-4">${lesson.exercises.map((ex) => `
      <li class="bg-gray-100 p-4 rounded-xl">
        <p>${ex.question}</p>
        <div class="mt-2">
          <button class="show-correction bg-gray-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-gray-600">Correction</button>
          <button class="show-explanation bg-gray-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-gray-600">Explication</button>
          <div class="correction hidden mt-2 text-green-600">${ex.correction}</div>
          <div class="explanation hidden mt-2 text-blue-600">${ex.explanation}</div>
        </div>
      </li>`).join("")}</ul>
    <div class="quote mt-6">${lesson.quote}</div>
    <div class="mt-6">
      <h4 class="text-lg font-bold text-blue-600">Niveau de compréhension</h4>
      <select id="understanding" class="p-3 border border-gray-300 rounded-lg w-full mt-2">
        <option value="1">1 étoile</option>
        <option value="2">2 étoiles</option>
        <option value="3">3 étoiles</option>
        <option value="4">4 étoiles</option>
        <option value="5">5 étoiles</option>
      </select>
      <button id="submit-understanding" class="bg-green-500 text-white p-3 rounded-lg mt-3 hover:bg-green-600 transform hover:scale-105 transition duration-300">Envoyer</button>
    </div>
  `;
  document.getElementById("lesson").classList.remove("hidden");
  document.getElementById("content").classList.add("hidden");
  document.getElementById("submit-understanding").addEventListener("click", () => {
    const rating = document.getElementById("understanding").value;
    localStorage.setItem(`rating_${lesson.title}`, rating);
    updateProgress();
  });
  document.querySelectorAll(".show-correction").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.nextElementSibling.classList.toggle("hidden");
    });
  });
  document.querySelectorAll(".show-explanation").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.nextElementSibling.classList.toggle("hidden");
    });
  });
}

// Gestion des notes
let notes = JSON.parse(localStorage.getItem("notes")) || [];
document.getElementById("save-note").addEventListener("click", () => {
  const title = document.getElementById("note-title").value;
  const content = document.getElementById("note-content").value;
  if (title && content) {
    notes.push({ title, content });
    localStorage.setItem("notes", JSON.stringify(notes));
    displayNotes();
  } else {
    alert("Veuillez remplir le titre et le contenu.");
  }
});

function displayNotes() {
  document.getElementById("subjects").classList.add("hidden");
  document.getElementById("content").classList.add("hidden");
  document.getElementById("lesson").classList.add("hidden");
  document.getElementById("notes").classList.remove("hidden");
  const noteList = document.getElementById("note-list");
  noteList.innerHTML = "";
  notes.forEach((note) => {
    const div = document.createElement("div");
    div.className = "bg-white p-4 rounded-xl shadow-md mb-4";
    div.innerHTML = `<h3 class="font-bold text-blue-600">${note.title}</h3><p class="text-gray-600">${note.content}</p>`;
    noteList.appendChild(div);
  });
}

// Calculer la progression
function updateProgress() {
  const ratings = Object.keys(localStorage).filter(key => key.startsWith("rating_")).map(key => parseInt(localStorage.getItem(key)));
  const totalLessons = 5 + 5 + 19 + 4 + 4 + 4; // Maths (5), Français (5), Histoire (19), Physique (4), Sport (4), Dessin (4)
  const progress = ratings.length ? (ratings.length / totalLessons) * 100 : 0;
  document.getElementById("progress").textContent = `${Math.round(progress)}%`;
}

// Bloquer les captures d’écran et le copier-coller
document.addEventListener("contextmenu", (e) => e.preventDefault());
document.addEventListener("keydown", (e) => {
  if (e.key === "PrintScreen" || (e.ctrlKey && e.key === "c")) {
    e.preventDefault();
  }
});
