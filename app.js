// Configuration Firebase
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Citations motivantes
const quotes = [
  "Chaque effort te rapproche de ton objectif ! Continue !",
  "Le bac, c’est juste une étape. Tu vas briller !",
  "Apprends aujourd’hui, réussis demain !"
];

// Afficher une citation aléatoire
function displayQuote() {
  const quoteElement = document.getElementById("quote");
  quoteElement.textContent = quotes[Math.floor(Math.random() * quotes.length)];
}

// Authentification avec Google
document.getElementById("google-login-btn").addEventListener("click", () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
    .then((result) => {
      document.getElementById("login-screen").classList.add("hidden");
      document.getElementById("main-screen").classList.remove("hidden");
      document.getElementById("motivation").classList.remove("hidden");
      displayQuote();
    })
    .catch((error) => {
      console.error("Erreur de connexion:", error);
      alert("Erreur de connexion: " + error.message);
    });
});

// Authentification avec Email/Mot de passe
document.getElementById("email-login-btn").addEventListener("click", () => {
  document.getElementById("email-login-form").classList.toggle("hidden");
});

document.getElementById("submit-email-login").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  auth.signInWithEmailAndPassword(email, password)
    .then((result) => {
      document.getElementById("login-screen").classList.add("hidden");
      document.getElementById("main-screen").classList.remove("hidden");
      document.getElementById("motivation").classList.remove("hidden");
      displayQuote();
    })
    .catch((error) => {
      console.error("Erreur de connexion:", error);
      alert("Erreur de connexion: " + error.message);
    });
});

document.getElementById("submit-email-signup").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  auth.createUserWithEmailAndPassword(email, password)
    .then((result) => {
      document.getElementById("login-screen").classList.add("hidden");
      document.getElementById("main-screen").classList.remove("hidden");
      document.getElementById("motivation").classList.remove("hidden");
      displayQuote();
    })
    .catch((error) => {
      console.error("Erreur d’inscription:", error);
      alert("Erreur d’inscription: " + error.message);
    });
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
      btn.className = "bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600";
      btn.addEventListener("click", () => displayContent(subject));
      subjectList.appendChild(btn);
    });
    document.getElementById("subjects").classList.remove("hidden");
  });
});

// Afficher le contenu (Leçons, Exercices, etc.)
function displayContent(subject) {
  const contentList = document.getElementById("content-list");
  contentList.innerHTML = "";
  const options = ["Leçons", "Exercices", "Devoirs", "Sujets du Bac"];
  options.forEach((option) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.className = "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600";
    btn.addEventListener("click", () => {
      if (option === "Leçons") {
        displayLessons(subject);
      }
    });
    contentList.appendChild(btn);
  });
  document.getElementById("content").classList.remove("hidden");
}

// Afficher les leçons
function displayLessons(subject) {
  const lessons = window[subject.toLowerCase().replace(" ", "") + "Lessons"] || [];
  const contentList = document.getElementById("content-list");
  contentList.innerHTML = "";
  lessons.forEach((lesson, index) => {
    const isFree = index < lessons.length / 2; // 50% gratuit
    const btn = document.createElement("button");
    btn.textContent = lesson.title + (isFree ? "" : " (Payant)");
    btn.className = "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600";
    btn.addEventListener("click", () => {
      if (!isFree) {
        alert("Veuillez souscrire à l’offre premium (1000 FCFA tous les 6 mois).");
        return;
      }
      displayLessonContent(lesson);
    });
    contentList.appendChild(btn);
  });
  document.getElementById("content").classList.remove("hidden");
}

// Afficher le contenu d’une leçon
function displayLessonContent(lesson) {
  const lessonContent = document.getElementById("lesson-content");
  lessonContent.innerHTML = `
    <h3 class="text-xl font-bold text-blue-600">${lesson.title}</h3>
    <h4>Leçon complète</h4>
    <p>${lesson.fullContent}</p>
    <h4>Résumé</h4>
    <p>${lesson.summary}</p>
    <h4>Exercices</h4>
    <ul>${lesson.exercises.map((ex) => `
      <li>
        ${ex.question}
        <div>
          <button class="show-correction bg-gray-500 text-white px-2 py-1 rounded text-sm">Correction</button>
          <button class="show-explanation bg-gray-500 text-white px-2 py-1 rounded text-sm">Explication</button>
          <div class="correction hidden">${ex.correction}</div>
          <div class="explanation hidden">${ex.explanation}</div>
        </div>
      </li>`).join("")}</ul>
    <p class="mt-4 italic text-blue-600">${lesson.quote}</p>
    <div class="mt-4">
      <h4>Niveau de compréhension</h4>
      <select id="understanding" class="p-2 border rounded">
        <option value="1">1 étoile</option>
        <option value="2">2 étoiles</option>
        <option value="3">3 étoiles</option>
        <option value="4">4 étoiles</option>
        <option value="5">5 étoiles</option>
      </select>
      <button id="submit-understanding" class="bg-green-500 text-white px-4 py-2 rounded ml-2">Envoyer</button>
    </div>
  `;
  document.getElementById("lesson").classList.remove("hidden");

  // Gestion des boutons Correction/Explication
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

// Afficher une citation quotidiennement
setInterval(displayQuote, 24 * 60 * 60 * 1000); // Toutes les 24h
