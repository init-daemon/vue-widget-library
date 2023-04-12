
// Importation des fichiers CSS de Bootstrap 4
import 'bootstrap/dist/css/bootstrap.min.css';

// Importation des fichiers JS de Bootstrap 4 (facultatif, en fonction de vos besoins)
import 'bootstrap/dist/js/bootstrap.min.js';



// Importation de vos composants Vue.js
import PaginationBootstrap from './src/components/widgets/PaginationBootstrap.vue';


// // Exportation des composants pour les rendre disponibles en tant que package npm
export {
    PaginationBootstrap,
    // ... autres composants à exporter
};

// // Vous pouvez également exporter d'autres éléments, tels que des utilitaires ou des fonctions
// // Exemple :
// export const util = {
//     // Fonctions utilitaires
// };

// // Vous pouvez également exporter des constantes, des configurations, etc.
// // Exemple :
// export const config = {
//     // Configuration de la bibliothèque
// };
