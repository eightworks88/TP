// On récupère l'élément HTML qui sert d'écran
const display = document.getElementById('display');

// Fonction pour ajouter un chiffre ou un opérateur à l'écran
function appendToDisplay(input) {
    display.value += input;
}

// Fonction pour effacer l'écran
function clearDisplay() {
    display.value = '';
}

// Fonction pour calculer le résultat
function calculate() {
    try {
        // La fonction eval() évalue le code JavaScript (ici, l'opération mathématique)
        display.value = eval(display.value);
    } catch (error) {
        // S'il y a une erreur de syntaxe (ex: "5++5"), on affiche "Erreur"
        display.value = 'Erreur';
    }
}