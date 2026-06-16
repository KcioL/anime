const API_KEY = 'e87e0ac7fc497ae20f3594d217e58d97'; 

let currentPage = 1;
let currentFilters = {
    dateRange: '',
    genreId: '',
    providerId: '',
    sortBy: 'popularity.desc',
    searchQuery: '' // Nouvelle mémoire pour la recherche texte
};

// Variable pour le délai de sécurité anti-spam (Debounce)
let searchTimeout = null;

document.addEventListener('DOMContentLoaded', () => {
    initSeasonSelector();
    
    const seasonSelect = document.getElementById('season-select');
    const platformSelect = document.getElementById('platform-select');
    const genreSelect = document.getElementById('genre-select');
    const sortSelect = document.getElementById('sort-select');
    const searchApiInput = document.getElementById('search-api'); // Nouveau
    const loadMoreBtn = document.getElementById('load-more-btn');
    
    // Fonction qui lance une nouvelle recherche
    const triggerNewSearch = () => {
        currentPage = 1;
        currentFilters = {
            dateRange: seasonSelect.value,
            genreId: genreSelect.value,
            providerId: platformSelect.value,
            sortBy: sortSelect.value,
            searchQuery: searchApiInput.value.trim() // On lit la barre de recherche
        };
        fetchAnimes(true); 
    };

    // Lancement par défaut au démarrage
    triggerNewSearch();

    // Écouteurs pour les menus déroulants
    seasonSelect.addEventListener('change', triggerNewSearch);
    platformSelect.addEventListener('change', triggerNewSearch);
    genreSelect.addEventListener('change', triggerNewSearch);
    sortSelect.addEventListener('change', triggerNewSearch);

    // Écouteur SPÉCIAL pour la barre de recherche (avec délai d'attente)
    searchApiInput.addEventListener('input', () => {
        // On annule le compte à rebours précédent si l'utilisateur tape encore
        clearTimeout(searchTimeout);
        
        // On lance un nouveau compte à rebours de 500 millisecondes (0.5s)
        searchTimeout = setTimeout(() => {
            triggerNewSearch();
        }, 500);
    });

    // Bouton Charger plus
    loadMoreBtn.addEventListener('click', () => {
        currentPage++; 
        fetchAnimes(false); 
    });
});

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

async function fetchAnimes(isNewSearch) {
    const container = document.getElementById('anime-container');
    const loadMoreBtn = document.getElementById('load-more-btn');

    if (isNewSearch) {
        container.innerHTML = '<p class="loading">Recherche en cours...</p>';
        loadMoreBtn.classList.add('hidden');
    } else {
        loadMoreBtn.textContent = 'Chargement...';
        loadMoreBtn.disabled = true;
    }

    let url = '';

    // ==========================================
    // LE BASCULEMENT DE MODE SE FAIT ICI
    // ==========================================
    if (currentFilters.searchQuery !== '') {
        // MODE 1 : RECHERCHE TEXTUELLE (Ignore la saison et les plateformes)
        const queryClean = encodeURIComponent(currentFilters.searchQuery);
        url = `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&language=fr-FR&query=${queryClean}&page=${currentPage}`;
    } 
    else {
        // MODE 2 : CALENDRIER CLASSIQUE (Discover)
        const [startDate, endDate] = currentFilters.dateRange.split('|');
        url = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=fr-FR&watch_region=FR&with_original_language=ja&air_date.gte=${startDate}&air_date.lte=${endDate}&sort_by=${currentFilters.sortBy}&vote_count.gte=10&page=${currentPage}`;

        let genresQuery = '16'; 
        if (currentFilters.genreId !== "") {
            genresQuery += `,${currentFilters.genreId}`;
        }
        url += `&with_genres=${genresQuery}`;

        if (currentFilters.providerId !== "") {
            url += `&with_watch_providers=${currentFilters.providerId}`;
        }
    }

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Erreur HTTP: ${response.status}`);
        
        const data = await response.json();
        const animes = data.results;

        displayAnimes(animes, container, isNewSearch);

        // Affiche ou cache le bouton "Charger plus" selon les pages restantes
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
        loadMoreBtn.textContent = "Charger plus d'animes";
        loadMoreBtn.disabled = false;
    }
}

function displayAnimes(animes, container, isNewSearch) {
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
            : 'https://via.placeholder.com/500x750/1e1e1e/888888?text=Pas+d+image';
            
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
