const mathsLessons = [
  {
    title: "Leçon 1 : Les fonctions",
    definition: "Une fonction est une relation entre un ensemble de valeurs d’entrée (domaine) et un ensemble de valeurs de sortie (image).",
    formula: "f(x) = x² (exemple de fonction quadratique)",
    example: "Pour f(x) = x², si x = 2, alors f(2) = 4.",
    exercises: [
      {
        question: "Calculez f(3) pour f(x) = x² + 2.",
        correction: "f(3) = 3² + 2 = 11",
        explanation: "Remplacez x par 3 : f(3) = 3² + 2 = 9 + 2 = 11."
      },
      {
        question: "Quelle est la dérivée de f(x) = 3x² ?",
        correction: "f'(x) = 6x",
        explanation: "La dérivée de x^n est n*x^(n-1). Ici, f(x) = 3x², donc f'(x) = 2*3x^(2-1) = 6x."
      },
      // Ajoute 98 autres exercices variés ici
    ],
    quote: "Chaque fonction apprise est une étape vers la réussite !"
  },
  {
    title: "Leçon 2 : Les dérivées",
    definition: "La dérivée d’une fonction mesure son taux de variation.",
    formula: "f'(x) = nx^(n-1) pour f(x) = x^n",
    example: "Pour f(x) = x², f'(x) = 2x. À x = 1, f'(1) = 2.",
    exercises: [
      {
        question: "Calculez la dérivée de f(x) = sin(x).",
        correction: "f'(x) = cos(x)",
        explanation: "La dérivée de sin(x) est cos(x)."
      },
      {
        question: "Trouvez l’équation de la tangente à f(x) = x² en x = 1.",
        correction: "y = 2x - 1",
        explanation: "f'(x) = 2x, f'(1) = 2, f(1) = 1. Équation : y - 1 = 2(x - 1) => y = 2x - 1."
      },
      // Ajoute 98 autres exercices
    ],
    quote: "Maîtrise les dérivées, et le bac sera à ta portée !"
  },
  // Ajoute 3 autres leçons (total 5)
];

// Exemple pour Français
const françaisLessons = [
  {
    title: "Leçon 1 : La dissertation",
    definition: "La dissertation est un exercice d’argumentation structuré en introduction, développement et conclusion.",
    formula: "Structure : Intro (problématique), 2-3 parties, Conclusion",
    example: "Exemple de problématique : Comment l’auteur utilise-t-il le personnage principal pour critiquer la société ?",
    exercises: [
      {
        question: "Rédigez une introduction pour une dissertation sur le thème de la liberté.",
        correction: "Introduction : La liberté, valeur fondamentale, soulève des débats complexes... (exemple complet).",
        explanation: "L’introduction doit poser le sujet, la problématique et le plan."
      },
      // Ajoute 99 autres exercices
    ],
    quote: "Écris avec passion, et ta dissertation brillera !"
  },
  // Ajoute 4 autres leçons
];

// Exemple pour Sport
const sportLessons = [
  {
    title: "Leçon 1 : Lancer de poids",
    definition: "Le lancer de poids est une épreuve d’athlétisme où l’athlète projette un poids métallique le plus loin possible.",
    formula: "Technique : Position de départ, rotation, poussée.",
    example: "<video src='https://example.com/lancer-de-poids.mp4' controls></video>",
    exercises: [
      {
        question: "Décrivez la position de départ pour le lancer de poids.",
        correction: "Pieds écartés, poids tenu près du cou, corps incliné.",
        explanation: "La position initiale maximise la puissance de la poussée."
      },
      // Ajoute 99 autres exercices
    ],
    quote: "Lance fort, aime tendrement !"
  },
  // Ajoute 3 autres leçons
];

// Exemple pour Dessin
const dessinLessons = [
  {
    title: "Leçon 1 : Techniques de croquis",
    definition: "Le croquis est un dessin rapide pour capturer une idée ou une forme.",
    formula: "Matériel : Crayon HB, gomme, papier.",
    example: "Astuce : Commencez par des formes géométriques simples avant de détailler.",
    exercises: [
      {
        question: "Dessinez un croquis d’un visage humain en 10 minutes.",
        correction: "Utilisez des cercles pour la tête et des lignes pour les traits.",
        explanation: "Un croquis efficace repose sur des proportions correctes."
      },
      // Ajoute 99 autres exercices
    ],
    quote: "Chaque trait est une étape vers la perfection !"
  },
  // Ajoute 3 autres leçons
];
