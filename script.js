const API_KEY = 'e87e0ac7fc497ae20f3594d217e58d97'; 

// Variables globales pour mémoriser l'état de la recherche
let currentPage = 1;
let currentFilters = {
    dateRange: '',
    genreId: '',
    providerId: ''
};

document.addEventListener('DOMContentLoaded', () => {
    initSeasonSelector();
    
    const seasonSelect = document.getElementById('season-select');
    const platformSelect = document.getElementById('platform-select');
    const genreSelect = document.getElementById('genre-select');
    const loadMoreBtn = document.getElementById('load-more-btn');
    
    // Nouvelle recherche (on remet la page à 1)
    const triggerNewSearch = () => {
        currentPage = 1;
        currentFilters = {
            dateRange: seasonSelect.value,
            genreId: genreSelect.value,
            providerId: platformSelect.value
        };
        fetchAnimes(true); // true indique que c'est une NOUVELLE recherche (on efface l'écran)
    };

    // Lancement au démarrage
    triggerNewSearch();

    // Écoute des changements sur les filtres
    seasonSelect.addEventListener('change', triggerNewSearch);
    platformSelect.addEventListener('change', triggerNewSearch);
    genreSelect.addEventListener('change', triggerNewSearch);

    // Écoute du clic sur le bouton "Charger plus"
    loadMoreBtn.addEventListener('click', () => {
        currentPage++; // On passe à la page suivante
        fetchAnimes(false); // false indique qu'on AJOUTE à la suite (on n'efface pas l'écran)
    });
});

// Génération du menu des saisons
function initSeasonSelector() {
    const selector = document.getElementById('season-select');
    const currentYear = 2026; 
    const startYear = currentYear - 2; 

    const seasonConfig = [
        { id: 'winter', label: 'Hiver', start: '01-01', end: '03-31' },
        { id: 'spring', label: 'Printemps', start: '04-01', end: '06-30' },
        { id: 'summer', label: 'Été', start: '07-01', end: '09-30' },
        { id: 'fall', label: 'Automne', start: '10-01', end: '12-31' }
    ];

    for (let year = currentYear; year >= startYear; year--) {
        for (let i = seasonConfig.length - 1; i >= 0; i--) {
            const season = seasonConfig[i];
            const option = document.createElement('option');
            
            option.value = `${year}-${season.start}|${year}-${season.end}`;
            option.textContent = `${season.label} ${year}`;
            
            if (year === currentYear && season.id === 'spring') {
                option.selected = true;
            }
            selector.appendChild(option);
        }
    }
}

// Fonction principale mise à jour pour gérer la pagination
async function fetchAnimes(isNewSearch) {
    const container = document.getElementById('anime-container');
    const loadMoreBtn = document.getElementById('load-more-btn');

    // Si c'est une nouvelle recherche, on affiche le texte de chargement et on cache le bouton
    if (isNewSearch) {
        container.innerHTML = '<p class="loading">Récupération des animes en cours...</p>';
        loadMoreBtn.classList.add('hidden');
    } else {
        // Si c'est la page 2, 3..., on change le texte du bouton pendant le chargement
        loadMoreBtn.textContent = 'Chargement...';
        loadMoreBtn.disabled = true;
    }

    const [startDate, endDate] = currentFilters.dateRange.split('|');

    // Ajout du paramètre &page=${currentPage}
    let url = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=fr-FR&watch_region=FR&with_original_language=ja&air_date.gte=${startDate}&air_date.lte=${endDate}&sort_by=popularity.desc&page=${currentPage}`;

    let genresQuery = '16'; // 16 = Animation
    if (currentFilters.genreId !== "") {
        genresQuery += `,${currentFilters.genreId}`;
    }
    url += `&with_genres=${genresQuery}`;

    if (currentFilters.providerId !== "") {
        url += `&with_watch_providers=${currentFilters.providerId}`;
    }

    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }
        
        const data = await response.json();
        const animes = data.results;

        // On appelle la fonction d'affichage en précisant s'il faut effacer l'écran ou ajouter à la suite
        displayAnimes(animes, container, isNewSearch);

        // GESTION DU BOUTON "CHARGER PLUS"
        // Si la page actuelle est strictement inférieure au nombre total de pages disponibles sur TMDB
        if (currentPage < data.total_pages) {
            loadMoreBtn.classList.remove('hidden');
        } else {
            loadMoreBtn.classList.add('hidden');
        }

    } catch (error) {
        console.error("Erreur technique :", error);
        if (isNewSearch) {
            container.innerHTML = `<p class="error">${error.message}</p>`;
        }
    } finally {
        // On remet le bouton à son état normal à la fin du chargement
        loadMoreBtn.textContent = "Charger plus d'animes";
        loadMoreBtn.disabled = false;
    }
}

// Fonction d'affichage modifiée pour accepter l'ajout (append)
function displayAnimes(animes, container, isNewSearch) {
    // On vide le conteneur UNIQUEMENT si c'est une nouvelle recherche
    if (isNewSearch) {
        container.innerHTML = '';
    }

    if (animes.length === 0 && isNewSearch) {
        container.innerHTML = '<p>Aucun anime trouvé pour ces critères.</p>';
        return;
    }

    animes.forEach(anime => {
        const card = document.createElement('div');
        card.className = 'anime-card';

        const title = anime.name;
        const imageUrl = anime.poster_path 
            ? `https://image.tmdb.org/t/p/w500${anime.poster_path}` 
            : 'https://via.placeholder.com/500x750?text=Pas+d+image';
            
        const overview = anime.overview ? anime.overview : "Aucun synopsis disponible en français pour le moment.";
        const tmdbUrl = `https://www.themoviedb.org/tv/${anime.id}?language=fr-FR`;

        card.innerHTML = `
            <img src="${imageUrl}" alt="Affiche de ${title}" loading="lazy">
            <div class="card-content">
                <div>
                    <h3>${title}</h3>
                    <p class="overview">${overview}</p>
                </div>
                <a href="${tmdbUrl}" target="_blank" rel="noopener noreferrer">Fiche Détaillée</a>
            </div>
        `;

        // Utilisation de appendChild permet d'ajouter les cartes à la suite sans effacer les précédentes
        container.appendChild(card);
    });
}
