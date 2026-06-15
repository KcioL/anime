const API_KEY = 'e87e0ac7fc497ae20f3594d217e58d97'; // N'oublie pas ta clé API

document.addEventListener('DOMContentLoaded', () => {
    initSeasonSelector();
    
    const seasonSelect = document.getElementById('season-select');
    const platformSelect = document.getElementById('platform-select');
    const genreSelect = document.getElementById('genre-select');
    
    // Fonction qui lance la recherche avec les TROIS filtres
    const triggerSearch = () => {
        fetchAnimes(seasonSelect.value, genreSelect.value, platformSelect.value);
    };

    // Lancement au démarrage
    triggerSearch();

    // Écoute des changements sur tous les menus
    seasonSelect.addEventListener('change', triggerSearch);
    platformSelect.addEventListener('change', triggerSearch);
    genreSelect.addEventListener('change', triggerSearch);
});

// Génération du menu des saisons (inchangé)
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

// Nouvelle fonction principale
async function fetchAnimes(dateRange, genreId, providerId) {
    const container = document.getElementById('anime-container');
    container.innerHTML = '<p class="loading">Récupération des animes en cours...</p>';

    const [startDate, endDate] = dateRange.split('|');

    // Base de la requête (Animation japonaise en France pour 
let url = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=fr-FR&watch_region=FR&with_original_language=ja&air_date.gte=${startDate}&air_date.lte=${endDate}&sort_by=popularity.desc`;


    // Filtre Genre : ID 16 (Animation) obligatoire + Genre sélectionné
    let genresQuery = '16';
    if (genreId !== "") {
        genresQuery += `,${genreId}`;
    }
    url += `&with_genres=${genresQuery}`;

    // Filtre Plateforme : On l'ajoute uniquement si une plateforme spécifique est choisie
    if (providerId !== "") {
        url += `&with_watch_providers=${providerId}`;
    }

    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            if (response.status === 401) throw new Error("Clé API invalide.");
            throw new Error(`Erreur HTTP: ${response.status}`);
        }
        
        const data = await response.json();
        const animes = data.results;

        displayAnimes(animes, container);

    } catch (error) {
        console.error("Erreur technique :", error);
        container.innerHTML = `<p class="error">${error.message}</p>`;
    }
}

function displayAnimes(animes, container) {
    container.innerHTML = '';

    if (animes.length === 0) {
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

        container.appendChild(card);
    });
}