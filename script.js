const quotes = [
    { citation: "L'éducation est l'arme la plus puissante pour changer le monde.", auteur: "Nelson Mandela", explication: "Cette citation souligne l'importance de l'éducation comme outil de transformation sociale." },
    { citation: "Le savoir est un trésor que l'on emporte partout avec soi.", auteur: "Proverbe chinois", explication: "Le savoir est une richesse intemporelle et universelle." },
    { citation: "Ce n'est pas parce que c'est difficile qu'on n'ose pas, c'est parce qu'on n'ose pas que c'est difficile.", auteur: "Sénèque", explication: "Le courage est essentiel pour surmonter les défis." },
    // ... (362 autres citations pour atteindre 365)
    { citation: "Le succès est la somme de petits efforts répétés jour après jour.", auteur: "Robert Collier", explication: "La persévérance est la clé du succès à long terme." }
];

function getDailyQuote() {
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    return quotes[dayOfYear % quotes.length];
}
