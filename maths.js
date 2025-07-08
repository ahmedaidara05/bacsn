const mathsLessons = [
  {
    title: "Leçon 1 : Les fonctions",
    fullContent: "Une fonction est une relation entre un ensemble de valeurs d’entrée (domaine) et un ensemble de valeurs de sortie (image). Par exemple, f(x) = x² associe à chaque x son carré.",
    summary: "Une fonction associe chaque élément d’un ensemble à un unique élément d’un autre ensemble.",
    exercises: [
      {
        question: "Calculez f(2) pour f(x) = x² + 3.",
        correction: "f(2) = 2² + 3 = 4 + 3 = 7",
        explanation: "On remplace x par 2 dans l’expression de la fonction : f(2) = 2² + 3 = 4 + 3 = 7."
      },
      {
        question: "Quelle est la dérivée de f(x) = 2x³ ?",
        correction: "f'(x) = 6x²",
        explanation: "On applique la règle de dérivation : la dérivée de x^n est n*x^(n-1). Ici, f(x) = 2x³, donc f'(x) = 3*2x^(3-1) = 6x²."
      },
      // Ajoute 98 autres exercices ici
    ],
    quote: "Chaque fonction apprise est une étape vers la réussite !"
  },
  {
    title: "Leçon 2 : Les dérivées",
    fullContent: "La dérivée d’une fonction mesure son taux de variation. Par exemple, la dérivée de x² est 2x.",
    summary: "La dérivée donne la pente de la tangente à la courbe en un point donné.",
    exercises: [
      {
        question: "Calculez la dérivée de f(x) = sin(x).",
        correction: "f'(x) = cos(x)",
        explanation: "La dérivée de sin(x) est cos(x), selon les règles de dérivation des fonctions trigonométriques."
      },
      {
        question: "Trouvez l’équation de la tangente à f(x) = x² en x = 1.",
        correction: "y = 2x - 1",
        explanation: "La dérivée de f(x) = x² est f'(x) = 2x. À x = 1, f'(1) = 2 (pente). La valeur de f(1) = 1² = 1. L’équation de la tangente est y - f(1) = f'(1)(x - 1), soit y - 1 = 2(x - 1), donc y = 2x - 1."
      },
      // Ajoute 98 autres exercices ici
    ],
    quote: "Maîtrise les dérivées, et le bac sera à ta portée !"
  },
  // Ajoute 3 autres leçons ici (pour atteindre 5 leçons)
];
