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
      // Ajoute 98 autres exercices variés (QCM, problèmes, etc.)
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
  {
    title: "Leçon 3 : Les intégrales",
    definition: "L’intégrale représente l’aire sous la courbe d’une fonction.",
    formula: "∫x^n dx = (x^(n+1))/(n+1) + C, pour n ≠ -1",
    example: "∫x² dx = (x³)/3 + C",
    exercises: [
      {
        question: "Calculez ∫2x dx.",
        correction: "x² + C",
        explanation: "La primitive de 2x est x², plus une constante C."
      },
      // Ajoute 99 autres exercices
    ],
    quote: "Intègre avec confiance, et tu réussiras !"
  },
  {
    title: "Leçon 4 : Les équations différentielles",
    definition: "Une équation différentielle relie une fonction à ses dérivées.",
    formula: "y' = ky (exemple d’équation linéaire)",
    example: "La solution de y' = 2y est y = Ce^(2x).",
    exercises: [
      {
        question: "Résolvez y' = 3y.",
        correction: "y = Ce^(3x)",
        explanation: "C’est une équation différentielle à variables séparables."
      },
      // Ajoute 99 autres exercices
    ],
    quote: "Les équations sont des défis à relever !"
  },
  {
    title: "Leçon 5 : Les probabilités",
    definition: "Les probabilités mesurent la chance qu’un événement se produise.",
    formula: "P(A) = nombre de cas favorables / nombre de cas possibles",
    example: "Lancer un dé : P(6) = 1/6.",
    exercises: [
      {
        question: "Quelle est la probabilité de tirer un as dans un jeu de 52 cartes ?",
        correction: "P(as) = 4/52 = 1/13",
        explanation: "Il y a 4 as dans un jeu de 52 cartes."
      },
      // Ajoute 99 autres exercices
    ],
    quote: "Les probabilités, c’est jouer avec le futur !"
  }
];

// Exemple pour Français (5 leçons)
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

// Exemple pour Sport (4 leçons)
const sportLessons = [
  {
    title: "Leçon 1 : Lancer de poids",
    definition: "Le lancer de poids est une épreuve d’athlétisme où l’athlète projette un poids métallique le plus loin possible.",
    formula: "Technique : Position de départ, rotation, poussée.",
    example: "<video src='https://example.com/lancer-de-poids.mp4' controls class='w-full'></video><img src='https://example.com/lancer-de-poids.jpg' alt='Lancer de poids' class='w-full mt-2'>",
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

// Exemple pour Dessin (4 leçons)
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

// Exemple pour Histoire (19 leçons, 1 exemple)
const histoireLessons = [
  {
    title: "Leçon 1 : La colonisation en Afrique",
    definition: "La colonisation est l’occupation et l’exploitation d’un territoire par une puissance étrangère.",
    formula: "Périodes clés : Conférence de Berlin (1884-1885), indépendances (1960s).",
    example: "Exemple : La France a colonisé le Sénégal à partir du 19e siècle.",
    exercises: [
      {
        question: "Quels sont les impacts de la colonisation française au Sénégal ?",
        correction: "Impacts : Administration coloniale, économie d’exploitation, changements culturels.",
        explanation: "La colonisation a restructuré les sociétés locales."
      },
      // Ajoute 99 autres exercices
    ],
    quote: "Comprendre l’histoire, c’est préparer l’avenir !"
  },
  // Ajoute 18 autres leçons
];

// Exemple pour Physique-Chimie (4 leçons, 1 exemple)
const physiquechimieLessons = [
  {
    title: "Leçon 1 : Les lois de Newton",
    definition: "Les lois de Newton décrivent les relations entre les forces et le mouvement.",
    formula: "F = ma (2e loi de Newton)",
    example: "Un objet de 2 kg accéléré à 3 m/s² subit une force de 6 N.",
    exercises: [
      {
        question: "Calculez la force exercée sur un objet de 5 kg accéléré à 2 m/s².",
        correction: "F = 5 * 2 = 10 N",
        explanation: "Utilisez la formule F = ma."
      },
      // Ajoute 99 autres exercices
    ],
    quote: "Les lois de Newton sont la clé du mouvement !"
  },
  // Ajoute 3 autres leçons
];
