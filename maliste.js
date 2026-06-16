const API_KEY = 'e87e0ac7fc497ae20f3594d217e58d97'; 

const myAnimes = [
    { title: "My Hero Academia", rating: "20/20" },
    { title: "Danmachi", rating: "20/20" },
    { title: "Darling in the FranXX", rating: "20/20" },
    { title: "Oreshura", rating: "16/20" },
    { title: "Girly Air Force", rating: "16/20" },
    { title: "Renai Boukun", rating: "17/20" },
    { title: "Yamada-kun and the Seven Witches", rating: "18/20" },
    { title: "Just Because!", rating: "19/20" },
    { title: "Domestic na Kanojo", rating: "20/20" },
    { title: "Sword Art Online", rating: "20/20" },
    { title: "Witchcraft Works", rating: "17/20" },
    { title: "Toradora", rating: "18/20" },
    { title: "Fairy Tail", rating: "20/20" },
    { title: "The Seven Deadly Sins", rating: "20/20" },
    { title: "All Out!", rating: "14/20" },
    { title: "Your Lie in April", rating: "20/20" },
    { title: "Tokyo Ghoul", rating: "20/20" },
    { title: "Naruto", rating: "20/20" },
    { title: "Eyeshield 21", rating: "20/20" },
    { title: "Kuroko no Basket", rating: "19/20" },
    { title: "Holmes of Kyoto", rating: "17/20" },
    { title: "DBZ / DBS", rating: "19/20" },
    { title: "Sakurasou no Pet na Kanojo", rating: "19/20" },
    { title: "Angel Beats", rating: "20/20" },
    { title: "Charlotte", rating: "18/20" },
    { title: "No Game No Life", rating: "18/20" },
    { title: "Prison School", rating: "18/20" },
    { title: "Your Name", rating: "20/20" },
    { title: "Bunny Girl Senpai", rating: "20/20" },
    { title: "Erased", rating: "19/20" },
    { title: "Hyouka", rating: "19/20" },
    { title: "Assassination Classroom", rating: "20/20" },
    { title: "Netoge no Yome wa Onnanoko ja Nai to Omotta?", rating: "17/20" },
    { title: "Gotobun no Hanayome", rating: "20/20" },
    { title: "Hundred", rating: "19.5/20" },
    { title: "Hajimete no Gal", rating: "19/20" },
    { title: "Saiki Kusuo no Psy Nan", rating: "19/20" },
    { title: "Gamers!", rating: "19/20" },
    { title: "Food Wars", rating: "20/20" },
    { title: "Ao Chan Can't Study", rating: "17/20" },
    { title: "Rakudai Kishi no Cavalry", rating: "20/20" },
    { title: "Classroom of the Elite", rating: "20/20" },
    { title: "Gambling School", rating: "19/20" },
    { title: "A Certain Scientific Railgun", rating: "20/20" },
    { title: "Kono Yo no Hate de Koi wo Utau Shoujo YU-NO", rating: "19/20" },
    { title: "A Certain Magical Index", rating: "20/20" },
    { title: "Strike the Blood", rating: "21/20" },
    { title: "To Love Ru", rating: "20/20" },
    { title: "A Silent Voice (Koe no Katachi)", rating: "20/20" },
    { title: "Nisekoi", rating: "20/20" },
    { title: "Oniai", rating: "17/20" },
    { title: "Akame ga Kill", rating: "20/20" },
    { title: "Infinite Stratos", rating: "18/20" },
    { title: "Noragami", rating: "20/20" },
    { title: "Trinity Seven", rating: "18/20" },
    { title: "Tonari no Kaibutsu-kun", rating: "18/20" },
    { title: "Kaichou wa Maid Sama", rating: "19/20" },
    { title: "Grisaia", rating: "19/20" },
    { title: "Anthem of the Heart", rating: "20/20" },
    { title: "Amagi Brilliant Park", rating: "17/20" },
    { title: "High School DxD", rating: "20/20" },
    { title: "Mahou Sensou", rating: "17/20" },
    { title: "Haikyuu", rating: "20/20" },
    { title: "Guilty Crown", rating: "18/20" },
    { title: "Oregairu", rating: "20/20" },
    { title: "Shomin Sample", rating: "17/20" },
    { title: "Masamune-kun's Revenge", rating: "18/20" },
    { title: "Tsurezure Children", rating: "16/20" },
    { title: "We Never Learn", rating: "20/20" },
    { title: "Outbreak Company", rating: "20/20" },
    { title: "Kiznaiver", rating: "19/20" },
    { title: "Cupid's Chocolate", rating: "15/20" },
    { title: "Musaigen no Phantom World", rating: "20/20" },
    { title: "High School Prodigies Have It Easy Even In Another World", rating: "20/20" },
    { title: "Rascal Does Not Dream of a Dreaming Girl", rating: "20/20" },
    { title: "Shinmai Mahou no Testament", rating: "18/20" },
    { title: "Aho Girl", rating: "18/20" },
    { title: "Nande Koko ni Sensei ga", rating: "19/20" },
    { title: "Nourin", rating: "17/20" },
    { title: "Fate Zero", rating: "19/20" },
    { title: "Yuragi-sou no Yuuna San", rating: "19/20" },
    { title: "Kaguya Sama", rating: "20/20" },
    { title: "Cautious Hero", rating: "20/20" },
    { title: "Fire Force", rating: "20/20" },
    { title: "Oresuki", rating: "19/20" },
    { title: "Fruit Basket", rating: "18/20" },
    { title: "Weathering With You", rating: "20/20" },
    { title: "Master of Ragnarok", rating: "19/20" },
    { title: "Val x Love", rating: "Non noté" },
    { title: "Mangaka-San to Assistant-San to", rating: "18/20" },
    { title: "When Supernatural Battles Became Commonplace", rating: "18/20" },
    { title: "Romio vs Juliet", rating: "19/20" },
    { title: "Maoyuu Maou Yuusha", rating: "18/20" },
    { title: "One Punch Man", rating: "20/20" },
    { title: "Shimoneta", rating: "18/20" },
    { title: "Mayo Chiki", rating: "19/20" },
    { title: "Golden Time", rating: "20/20" },
    { title: "Demon Slayer", rating: "20/20" },
    { title: "Kill la Kill", rating: "14/20" },
    { title: "GTO", rating: "20/20" },
    { title: "Dr Stone", rating: "20/20" },
    { title: "Hunter x Hunter", rating: "20/20" },
    { title: "Mob Psycho 100", rating: "20/20" },
    { title: "Death March to the Parallel World Rhapsody", rating: "20/20" },
    { title: "Eromanga Sensei", rating: "19/20" },
    { title: "Blue Exorcist", rating: "20/20" },
    { title: "Run with the Wind", rating: "20/20" },
    { title: "Log Horizon", rating: "19/20" },
    { title: "Number 24", rating: "18/20" },
    { title: "Konosuba", rating: "20/20" },
    { title: "Plunderer", rating: "20/20" },
    { title: "Clean Freak Aoyama Kun", rating: "19/20" },
    { title: "Hello World", rating: "20/20" },
    { title: "Hinomaru Sumo", rating: "20/20" },
    { title: "Loin de toi près de moi", rating: "19/20" },
    { title: "Zutto Mae Kara Suki Deshita", rating: "18/20" },
    { title: "Akatsuki no Yona", rating: "20/20" },
    { title: "Grand Blue", rating: "20/20" },
    { title: "Saekano", rating: "20/20" },
    { title: "High School of the Dead", rating: "20/20" },
    { title: "Sket Dance", rating: "20/20" },
    { title: "The God of High School", rating: "20/20" },
    { title: "Tower of God", rating: "20/20" },
    { title: "Rent a Girlfriend", rating: "20/20" },
    { title: "Burn the Witch", rating: "18/20" },
    { title: "Mirai Nikki", rating: "20/20" },
    { title: "Taimadou Gakuen", rating: "19/20" },
    { title: "Keijo", rating: "19/20" },
    { title: "Blend.S", rating: "20/20" },
    { title: "Our Last Crusade", rating: "20/20" },
    { title: "Nichijou", rating: "17/20" },
    { title: "The Irregular at Magical Highschool", rating: "19/20" },
    { title: "The Day I Became a God", rating: "20/20" },
    { title: "Vinland Saga", rating: "20/20" },
    { title: "Fullmetal Alchemist", rating: "19/20" },
    { title: "Fullmetal Alchemist: Brotherhood", rating: "20/20" },
    { title: "Goblin Slayer", rating: "20/20" },
    { title: "Wotakoi", rating: "20/20" },
    { title: "Akudama Drive", rating: "20/20" },
    { title: "New Game", rating: "18/20" },
    { title: "Arifureta", rating: "20/20" },
    { title: "Yuusha ni Narenakatta", rating: "18/20" },
    { title: "Ikebukuro West Gate Park", rating: "19/20" },
    { title: "Boogiepop", rating: "17/20" },
    { title: "Kekkai Sensen", rating: "19/20" },
    { title: "Maken Ki", rating: "18/20" },
    { title: "Black Bullet", rating: "19/20" },
    { title: "B: The Beginning", rating: "20/20" },
    { title: "Ahiru no Sora", rating: "20/20" },
    { title: "Jujutsu Kaisen", rating: "20/20" },
    { title: "Seiren", rating: "19/20" },
    { title: "Mushoku Tensei", rating: "20/20" },
    { title: "The Hidden Dungeon Only I Can Enter", rating: "20/20" },
    { title: "How Not to Summon a Demon Lord", rating: "19/20" },
    { title: "Horimiya", rating: "20/20" },
    { title: "Orange", rating: "20/20" },
    { title: "Do You Love Your Mom...", rating: "18/20" },
    { title: "Gleipnir", rating: "20/20" },
    { title: "Iruma-kun at the Demon King Academy", rating: "19/20" },
    { title: "Kemono Jihen", rating: "20/20" },
    { title: "Les Combattants Seront Déployés", rating: "20/20" },
    { title: "Bofuri", rating: "20/20" },
    { title: "Wonder Egg Priority", rating: "20/20" },
    { title: "Assassins Pride", rating: "20/20" },
    { title: "Tsuki ga Kirei", rating: "19/20" },
    { title: "Isekai Cheat Magician", rating: "20/20" },
    { title: "UQ Holder", rating: "19/20" },
    { title: "Arrête de me chauffer, Nagatoro", rating: "20/20" },
    { title: "Higehiro", rating: "20/20" },
    { title: "Science Fell in Love", rating: "18/20" },
    { title: "Didn’t I Say to Make My Abilities Average", rating: "18/20" },
    { title: "Bleach", rating: "20/20" },
    { title: "Tokyo Revengers", rating: "20/20" },
    { title: "The World's Finest Assassin", rating: "20/20" },
    { title: "L'Attaque des Titans", rating: "20/20" },
    { title: "No Game No Life Zero", rating: "20/20" },
    { title: "My Dress-Up Darling", rating: "20/20" },
    { title: "The King's Avatar", rating: "20/20" },
    { title: "Baki", rating: "20/20" },
    { title: "Stars Align", rating: "19/20" },
    { title: "Eighty Six 86", rating: "20/20" },
    { title: "Initial D", rating: "20/20" },
    { title: "I'm Quitting Hero", rating: "19/20" },
    { title: "Trapped in a Dating Sim", rating: "19/20" },
    { title: "Skeleton Knight", rating: "19/20" },
    { title: "Ao Ashi", rating: "20/20" },
    { title: "Spy x Family", rating: "20/20" },
    { title: "Shikimori's Not Just a Cutie", rating: "19/20" },
    { title: "The Greatest Demon Lord Is Reborn", rating: "19/20" },
    { title: "Takt Op. Destiny", rating: "20/20" },
    { title: "Akebi's Sailor Uniform", rating: "20/20" },
    { title: "Love of Kill", rating: "20/20" },
    { title: "Cyberpunk Edgerunners", rating: "20/20" },
    { title: "JoJo's Bizarre Adventure", rating: "18/20" },
    { title: "Summer Time Rendering", rating: "20/20" },
    { title: "Shinobi no Ittoki", rating: "20/20" },
    { title: "Blue Lock", rating: "20/20" },
    { title: "Chainsaw Man", rating: "20/20" },
    { title: "Black Summoner", rating: "20/20" },
    { title: "The Fruit of Evolution", rating: "19/20" },
    { title: "The Strongest Sage with the Weakest Crest", rating: "18/20" },
    { title: "Lycoris Recoil", rating: "20/20" },
    { title: "La Sorcière Invincible Tueuse de Slime", rating: "15/20" },
    { title: "Tsukimichi", rating: "20/20" },
    { title: "Seirei Gensouki", rating: "20/20" },
    { title: "The Daily Life of the Immortal King", rating: "18/20" },
    { title: "Pas en couple, déjà mariés", rating: "20/20" },
    { title: "I'm Standing on a Million Lives", rating: "19/20" },
    { title: "My Stepmom's Daughter is My Ex", rating: "19/20" },
    { title: "In the Land of Leadale", rating: "17/20" },
    { title: "Shenmue the Animation", rating: "19/20" },
    { title: "Iwa Kakeru!", rating: "18/20" },
    { title: "Jun, la voix du cœur", rating: "20/20" },
    { title: "The 8th Son? Are You Kidding Me?", rating: "19/20" },
    { title: "My Next Life as a Villainess", rating: "16/20" },
    { title: "The Iceblade Sorcerer", rating: "20/20" },
    { title: "Farming Life in Another World", rating: "19/20" },
    { title: "Buddy Daddies", rating: "19/20" },
    { title: "The Reincarnation of the Strongest Exorcist", rating: "19/20" },
    { title: "Reborn to Master the Blade", rating: "19/20" },
    { title: "Vivy Fluorite", rating: "19/20" },
    { title: "Chillin' in My 30s", rating: "19/20" },
    { title: "ReLIFE", rating: "17/20" },
    { title: "Bungo Stray Dogs", rating: "20/20" },
    { title: "How Heavy Are the Dumbbells You Lift", rating: "19/20" },
    { title: "Ningen Fushin", rating: "16/20" },
    { title: "Harem in the Labyrinth", rating: "14/20" },
    { title: "Rokka Braves of the 6 Flowers", rating: "19/20" },
    { title: "Giant Beasts of Ars", rating: "18/20" },
    { title: "The Ancient Magus' Bride", rating: "18/20" },
    { title: "How a Realist Hero Rebuilt the Kingdom", rating: "18/20" },
    { title: "I Got a Cheat Skill in Another World", rating: "20/20" },
    { title: "Hell's Paradise", rating: "20/20" },
    { title: "Mashle", rating: "20/20" },
    { title: "Mon Histoire d'Amour avec Yamada", rating: "20/20" },
    { title: "Je me fais isekai pour la deuxième fois", rating: "17/20" },
    { title: "Oshi no Ko", rating: "20/20" },
    { title: "The Aristocrat's Otherworldly Adventure", rating: "19/20" },
    { title: "Seraph of the End", rating: "20/20" },
    { title: "Parasyte", rating: "20/20" },
    { title: "The Most Heretical Last Boss Queen", rating: "18/20" },
    { title: "Chouchouté par l'ange d'à côté", rating: "20/20" },
    { title: "Kamisama : Opération Divine", rating: "17/20" },
    { title: "Zom 100", rating: "20/20" },
    { title: "Am I Actually the Strongest?", rating: "19/20" },
    { title: "The Legendary Hero is Dead", rating: "20/20" },
    { title: "Tomodachi Game", rating: "20/20" },
    { title: "Nana", rating: "18/20" },
    { title: "The Kingdoms of Ruin", rating: "19/20" },
    { title: "A Returner's Magic Should Be Special", rating: "18/20" },
    { title: "Berserk of Gluttony", rating: "20/20" },
    { title: "The Great Cleric", rating: "19/20" },
    { title: "I'm Giving the Disgraced Noble Lady", rating: "16/20" },
    { title: "Malevolent Spirits: Monogatari", rating: "18/20" },
    { title: "My Unique Skill Makes Me OP at Level 1", rating: "19/20" },
    { title: "Les Mémoires de Vanitas", rating: "18/20" },
    { title: "Banished from the Hero's Party", rating: "17/20" },
    { title: "Ron Kamonohashi: Deranged Detective", rating: "19/20" },
    { title: "Moriarty the Patriot", rating: "19/20" },
    { title: "Les 100 petites amies", rating: "17/20" },
    { title: "Shangri-La Frontier", rating: "20/20" },
    { title: "Solo Leveling", rating: "20/20" },
    { title: "Campfire Cooking in Another World", rating: "15/20" },
    { title: "The Unwanted Undead Adventurer", rating: "20/20" },
    { title: "Full Dive: L'ultime RPG", rating: "20/20" },
    { title: "Re:Monster", rating: "20/20" },
    { title: "Dragon Raja", rating: "18/20" },
    { title: "Chillin' in Another World with Level 2", rating: "17/20" },
    { title: "Kaiju No. 8", rating: "20/20" },
    { title: "Wind Breaker", rating: "20/20" },
    { title: "Nanbaka", rating: "16/20" },
    { title: "Villainess Level 99", rating: "18/20" },
    { title: "The Wrong Way to Use Healing Magic", rating: "20/20" },
    { title: "A Condition Called Love", rating: "17/20" },
    { title: "Failure Frame", rating: "20/20" },
    { title: "The Strongest Magician in the Demon Lord's Army", rating: "19/20" },
    { title: "Why Does Nobody Remember Me in This World?", rating: "18/20" },
    { title: "The Ossan Newbie Adventurer", rating: "20/20" },
    { title: "Ragna Crimson", rating: "20/20" },
    { title: "Wistoria: Wand and Sword", rating: "20/20" },
    { title: "Tales of Wedding Rings", rating: "16/20" },
    { title: "Let This Grieving Soul Retire", rating: "16/20" },
    { title: "Good Bye, Dragon Life", rating: "17/20" },
    { title: "Dandadan", rating: "20/20" },
    { title: "The Healer Who Was Banished", rating: "17/20" },
    { title: "The Most Notorious Talker", rating: "20/20" },
    { title: "As a Reincarnated Aristocrat, I'll Use My Appraisal Skill", rating: "19/20" },
    { title: "The Promised Neverland", rating: "20/20" },
    { title: "Loner Life in Another World", rating: "20/20" },
    { title: "Sabikui Bisco", rating: "20/20" },
    { title: "Saving 80,000 Gold in Another World", rating: "19/20" },
    { title: "King's Raid", rating: "17/20" },
    { title: "La Valkyrie aux cheveux de jais", rating: "17/20" },
    { title: "Fena: Pirate Princess", rating: "19/20" },
    { title: "Engage Kiss", rating: "20/20" },
    { title: "Miss Kobayashi's Dragon Maid", rating: "20/20" },
    { title: "Headhunted to Another World", rating: "19/20" },
    { title: "My One-Hit Kill Sister", rating: "16/20" },
    { title: "The Daily Life of a Middle-Aged Online Shopper", rating: "18/20" },
    { title: "Possibly the Greatest Alchemist of All Time", rating: "19/20" },
    { title: "Even Given the Worthless Appraiser Class", rating: "19/20" },
    { title: "I Left My A-Rank Party", rating: "19/20" },
    { title: "Unnamed Memory", rating: "20/20" },
    { title: "Black Clover", rating: "20/20" },
    { title: "I Am a Noble on the Brink of Ruin", rating: "18/20" },
    { title: "The Water Magician", rating: "19/20" },
    { title: "Bogus Skill Fruit Master", rating: "18/20" },
    { title: "Apocalypse Bringer Mynoghra", rating: "17/20" },
    { title: "The Beginning After The End", rating: "19/20" },
    { title: "My Gift Lvl 9999 Unlimited Gacha", rating: "20/20" },
    { title: "My Instant Death Ability", rating: "17/20" },
    { title: "Reign of the Seven Spellblades", rating: "18/20" },
    { title: "Frieren", rating: "20/20" },
    { title: "Gachiakuta", rating: "20/20" },
    { title: "RE-MAIN", rating: "20/20" },
    { title: "Viral Hit", rating: "20/20" },
    { title: "Tougen Anki", rating: "20/20" },
    { title: "Hero Without a Class", rating: "18/20" },
    { title: "A Gatherer's Adventure in Isekai", rating: "19/20" },
    { title: "My Status as an Assassin", rating: "20/20" },
    { title: "A Nobody's Way Up to an Exploration Hero", rating: "19/20" },
    { title: "A Wild Last Boss Appeared", rating: "20/20" },
    { title: "Jack of All Trades", rating: "20/20" },
    { title: "There Was a Cute Girl in the Hero's Party", rating: "18/20" },
    { title: "The Do-Over Damsel Conquers the Dragon Emperor", rating: "19/20" },
    { title: "Noble Reincarnation", rating: "19/20" },
    { title: "Dead Mount Death Play", rating: "18/20" },
    { title: "Sentenced to Be a Hero", rating: "20/20" },
    { title: "Clevatess", rating: "20/20" },
    { title: "No Longer Allowed In Another World", rating: "18/20" },
    { title: "Silent Witch", rating: "19/20" },
    { title: "Dead Account", rating: "20/20" }
];

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('mylist-container');
    const sortSelect = document.getElementById('sort-mylist');

    // On prépare le Lazy Loader (Observateur d'intersection)
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const card = entry.target;
                const title = card.dataset.title;
                const index = card.dataset.index;
                const imgElement = document.getElementById(`img-${index}`);

                searchAnimePoster(title, imgElement);
                obs.unobserve(card);
            }
        });
    }, { rootMargin: "150px" });

    // Fonction qui affiche une liste donnée à l'écran
    function afficherListe(listeAnimes) {
        // On efface l'écran avant de réafficher
        container.innerHTML = '';

        listeAnimes.forEach((anime, index) => {
            const card = document.createElement('div');
            card.className = 'anime-card';
            card.dataset.title = anime.title;
            card.dataset.index = index;

            card.innerHTML = `
                <div class="rating-badge">${anime.rating}</div>
                <img src="https://via.placeholder.com/500x750/1e1e1e/888888?text=Recherche..." alt="Affiche de ${anime.title}" class="poster-img" id="img-${index}">
                <div class="card-content">
                    <h3 style="font-size: 1rem; margin-top: 5px;">${anime.title}</h3>
                </div>
            `;
            
            container.appendChild(card);
            
            // On dit à l'observateur de surveiller cette nouvelle carte
            observer.observe(card);
        });
    }

    // Petite fonction utilitaire pour transformer "19.5/20" en nombre (19.5)
    function obtenirNoteNumerique(noteTexte) {
        if (noteTexte === "Non noté" || !noteTexte) return -1;
        // On coupe le texte au niveau du "/" et on convertit en chiffre
        return parseFloat(noteTexte.split('/')[0]);
    }

    // 1. Affichage par défaut au chargement de la page
    afficherListe(myAnimes);

    // 2. Écouteur pour le menu de tri
    sortSelect.addEventListener('change', (event) => {
        const typeTri = event.target.value;
        
        // On crée une copie de la liste originale pour la trier sans la détruire
        let animesTries = [...myAnimes];

        if (typeTri === 'desc') {
            // Du plus grand au plus petit
            animesTries.sort((a, b) => obtenirNoteNumerique(b.rating) - obtenirNoteNumerique(a.rating));
        } 
        else if (typeTri === 'asc') {
            // Du plus petit au plus grand (en gardant les "Non noté" à la fin)
            animesTries.sort((a, b) => {
                const noteA = obtenirNoteNumerique(a.rating);
                const noteB = obtenirNoteNumerique(b.rating);
                if (noteA === -1) return 1;
                if (noteB === -1) return -1;
                return noteA - noteB;
            });
        }
        
        // On affiche la nouvelle liste triée !
        afficherListe(animesTries);
    });
});

// 4. Fonction de recherche sur TMDB
async function searchAnimePoster(title, imgElement) {
    const searchQuery = encodeURIComponent(title.trim());
    const url = `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&language=fr-FR&query=${searchQuery}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.results && data.results.length > 0 && data.results[0].poster_path) {
            const imgUrl = `https://image.tmdb.org/t/p/w500${data.results[0].poster_path}`;
            imgElement.src = imgUrl; 
        } else {
            // Si introuvable (nom trop différent ou non existant sur TMDB)
            imgElement.src = 'https://via.placeholder.com/500x750/1e1e1e/ff4444?text=Introuvable';
        }
    } catch (error) {
        console.error(`Erreur pour ${title}:`, error);
        imgElement.src = 'https://via.placeholder.com/500x750/1e1e1e/ff4444?text=Erreur';
    }
}
