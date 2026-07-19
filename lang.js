// ---------- Traductions ----------
const translations = {
  fr: {
    eyebrow: "mini jeu navigateur",
    desc: "Déplace le cube avec les flèches et remplis toutes les cases de la grille. Une seule erreur, et c'est terminé.",
    play: "Jouer",
    cases: "CASES",
    temps: "TEMPS",
    niveau: "NIVEAU",
    back: "← retour à l'accueil",
    restart: "Rejouer",
    next: "Niveau suivant",
    win: (t) => `Grille remplie en ${t}s ! Niveau suivant →`,
    lose: "Perdu — tu as touché une case remplie ou un obstacle.",
    best: (lvl, t) => `Meilleur temps niveau ${lvl} : ${t}s`,
    accountLink: "Mon compte",
    leaderboardLink: "Classement mondial",
    loginTab: "Connexion",
    registerTab: "Inscription",
    loginBtn: "Se connecter",
    registerBtn: "Créer mon compte",
    logoutBtn: "Se déconnecter",
    leaderboardTitle: "CLASSEMENT MONDIAL",
    loadingBoard: "Chargement du classement...",
    pseudoCol: "Joueur",
    noScores: "Personne n'a encore de score. Sois le premier !",
    settingsLink: "Paramètres",
    settingsTitle: "PARAMÈTRES",
    volumeLabel: "Volume des sons",
    languageLabel: "Langue",
    forgotPassword: "Mot de passe oublié ?",
    resetPrompt: "Entre ton email pour recevoir un lien de réinitialisation :",
    resetSent: "Email envoyé ! Vérifie ta boîte mail (et les spams).",
    resetError: "Impossible d'envoyer l'email. Vérifie l'adresse.",
    sendResetBtn: "Envoyer le lien",
    cancelBtn: "Annuler",
    resetTitle: "NOUVEAU MOT DE PASSE",
    checkingLink: "Vérification du lien...",
    minChars: "Minimum 6 caractères",
    saveBtn: "Enregistrer",
    invalidLink: "Ce lien est invalide ou a expiré. Redemande un email depuis la page de connexion.",
    resetSuccess: "Mot de passe changé ! Tu peux te connecter."
  },
  en: {
    eyebrow: "browser mini game",
    desc: "Move the cube with the arrow keys and fill every cell on the grid. One mistake and it's over.",
    play: "Play",
    cases: "CELLS",
    temps: "TIME",
    niveau: "LEVEL",
    back: "← back to home",
    restart: "Play again",
    next: "Next level",
    win: (t) => `Grid filled in ${t}s! Next level →`,
    lose: "Game over — you hit a filled cell or an obstacle.",
    best: (lvl, t) => `Best time level ${lvl}: ${t}s`,
    accountLink: "My account",
    leaderboardLink: "Global leaderboard",
    loginTab: "Log in",
    registerTab: "Sign up",
    loginBtn: "Log in",
    registerBtn: "Create my account",
    logoutBtn: "Log out",
    leaderboardTitle: "GLOBAL LEADERBOARD",
    loadingBoard: "Loading leaderboard...",
    pseudoCol: "Player",
    noScores: "No scores yet. Be the first!",
    settingsLink: "Settings",
    settingsTitle: "SETTINGS",
    volumeLabel: "Sound volume",
    languageLabel: "Language",
    forgotPassword: "Forgot password?",
    resetPrompt: "Enter your email to receive a reset link:",
    resetSent: "Email sent! Check your inbox (and spam folder).",
    resetError: "Couldn't send the email. Check the address.",
    sendResetBtn: "Send link",
    cancelBtn: "Cancel",
    resetTitle: "NEW PASSWORD",
    checkingLink: "Checking link...",
    minChars: "Minimum 6 characters",
    saveBtn: "Save",
    invalidLink: "This link is invalid or expired. Request a new email from the login page.",
    resetSuccess: "Password changed! You can now log in."
  }
};

function getLang() {
  return localStorage.getItem('cubefill-lang') || 'fr';
}

function getVolume() {
  const v = localStorage.getItem('cubefill-volume');
  return v === null ? 1 : parseFloat(v);
}

function setVolume(v) {
  localStorage.setItem('cubefill-volume', v);
}

function setLang(lang) {
  localStorage.setItem('cubefill-lang', lang);
  location.reload(); // relance la page proprement dans la nouvelle langue
}

function t(key, ...args) {
  const entry = translations[getLang()][key];
  return typeof entry === 'function' ? entry(...args) : entry;
}

// applique les traductions à tous les éléments marqués data-i18n
function applyStaticTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.getAttribute('data-i18n'));
  });
}

// injecte le sélecteur de langue (haut droit) et la signature (bas gauche)
function injectChrome() {
  const lang = getLang();

  const switcher = document.createElement('div');
  switcher.className = 'lang-switch';
  const flagFR = `<svg viewBox="0 0 3 2" width="22" height="15"><rect width="1" height="2" x="0" fill="#0055A4"/><rect width="1" height="2" x="1" fill="#fff"/><rect width="1" height="2" x="2" fill="#EF4135"/></svg>`;
  const flagGB = `<svg viewBox="0 0 60 30" width="22" height="15"><rect width="60" height="30" fill="#00247d"/><path d="M0,0 60,30 M60,0 0,30" stroke="#fff" stroke-width="6"/><path d="M0,0 60,30 M60,0 0,30" stroke="#cf142b" stroke-width="2"/><path d="M30,0 30,30 M0,15 60,15" stroke="#fff" stroke-width="10"/><path d="M30,0 30,30 M0,15 60,15" stroke="#cf142b" stroke-width="6"/></svg>`;
  switcher.innerHTML = `
    <button data-lang="fr" class="${lang === 'fr' ? 'active' : ''}" title="Français">${flagFR}</button>
    <button data-lang="en" class="${lang === 'en' ? 'active' : ''}" title="English">${flagGB}</button>
  `;
  document.body.appendChild(switcher);
  switcher.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.getAttribute('data-lang')));
  });

  const credit = document.createElement('div');
  credit.className = 'credit';
  credit.textContent = 'Created by Adnnoir';
  document.body.appendChild(credit);
}

document.addEventListener('DOMContentLoaded', () => {
  applyStaticTranslations();
  injectChrome();
});
