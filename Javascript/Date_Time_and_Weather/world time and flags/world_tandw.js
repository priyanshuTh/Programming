class WeatherDashboard {
    constructor() {
        this.apiKey = 'b07b35f2f6d90022405686bf331d890e';
        this.timeZones = [
            // ASIA
            {
                zone: 'Asia/Kabul',
                name: 'Kabul',
                country: 'Afghanistan',
                lat: 34.5553,
                lon: 69.2075,
                icon: 'fa-mosque',
                flag: 'https://flagcdn.com/af.svg',
                landmark: 'images/landmarks/darul-aman-palace.jpg',
                landmarkName: 'Darul Aman Palace',
                capitalCity: true,
                description: 'Capital and largest city of Afghanistan, situated in a valley between the Hindu Kush mountains',
                attractions: [
                    'Darul Aman Palace',
                    'Gardens of Babur',
                    'Kabul Museum',
                    'Shah-Do Shamshira Mosque'
                ],
                weatherInfo: {
                    climate: 'Semi-arid continental',
                    bestTimeToVisit: 'April to October',
                    averageTemp: {
                        summer: '32°C',
                        winter: '5°C'
                    }
                }
            },
            {
                zone: 'Asia/Kathmandu',
                name: 'Kathmandu',
                country: 'Nepal',
                lat: 27.7172,
                lon: 85.3240,
                icon: 'fa-mountain',
                flag: 'https://flagcdn.com/np.svg',
                landmark: 'images/landmarks/mount-everest.jpg',
                landmarkName: 'Mount Everest',
                capitalCity: true,
                description: 'Capital of Nepal, known for ancient temples, Himalayan views, and rich cultural heritage',
                attractions: [
                    'Swayambhunath Stupa',
                    'Boudhanath Temple',
                    'Durbar Square',
                    'Thamel District'
                ],
                weatherInfo: {
                    climate: 'Subtropical highland',
                    bestTimeToVisit: 'October to December',
                    averageTemp: {
                        summer: '28°C',
                        winter: '12°C'
                    }
                }
            },
            {
                zone: 'Asia/Taipei',
                name: 'Taipei',
                country: 'Taiwan',
                lat: 25.0330,
                lon: 121.5654,
                icon: 'fa-building',
                flag: 'https://flagcdn.com/tw.svg',
                landmark: 'images/landmarks/taipei-101.jpg',
                landmarkName: 'Taipei 101',
                capitalCity: true,
                description: 'Capital of Taiwan, known for modern architecture, bustling night markets, and street food culture',
                attractions: [
                    'Taipei 101',
                    'National Palace Museum',
                    'Longshan Temple',
                    'Shilin Night Market',
                    'Chiang Kai-shek Memorial Hall',
                    'Elephant Mountain'
                ],
                weatherInfo: {
                    climate: 'Humid subtropical',
                    bestTimeToVisit: 'October to December',
                    averageTemp: {
                        summer: '34°C',
                        winter: '16°C'
                    }
                }
            },
            {
                zone: 'Asia/Dubai',
                name: 'Dubai',
                country: 'United Arab Emirates',
                lat: 25.2048,
                lon: 55.2708,
                icon: 'fa-building',
                flag: 'https://flagcdn.com/ae.svg',
                landmark: 'images/landmarks/burj-khalifa.jpg',
                landmarkName: 'Burj Khalifa',
                capitalCity: false,
                description: 'A global city known for luxury shopping, ultramodern architecture, and vibrant nightlife',
                attractions: [
                    'Burj Khalifa',
                    'Dubai Mall',
                    'Palm Jumeirah',
                    'Dubai Marina'
                ],
                weatherInfo: {
                    climate: 'Desert climate',
                    bestTimeToVisit: 'November to March',
                    averageTemp: {
                        summer: '45°C',
                        winter: '25°C'
                    }
                }
            },
            {
                zone: 'Asia/Seoul',
                name: 'Seoul',
                country: 'South Korea',
                lat: 37.5665,
                lon: 126.9780,
                icon: 'fa-temple',
                flag: 'https://flagcdn.com/kr.svg',
                landmark: 'images/landmarks/gyeongbokgung.jpg',
                landmarkName: 'Gyeongbokgung Palace',
                capitalCity: true,
                description: 'Capital of South Korea, blending modern technology with traditional culture',
                attractions: [
                    'Gyeongbokgung Palace',
                    'Namsan Seoul Tower',
                    'Bukchon Hanok Village',
                    'Myeongdong Shopping Street'
                ],
                weatherInfo: {
                    climate: 'Humid continental',
                    bestTimeToVisit: 'March to May or September to November',
                    averageTemp: {
                        summer: '30°C',
                        winter: '0°C'
                    }
                }
            },
            {
                zone: 'Asia/Beijing',
                name: 'Beijing',
                country: 'China',
                lat: 39.9042,
                lon: 116.4074,
                icon: 'fa-landmark',
                flag: 'https://flagcdn.com/cn.svg',
                landmark: 'images/landmarks/great-wall.jpg',
                landmarkName: 'Great Wall of China',
                capitalCity: true,
                description: 'Capital of China, home to ancient wonders and modern achievements',
                attractions: [
                    'Great Wall of China',
                    'Forbidden City',
                    'Temple of Heaven',
                    'Summer Palace'
                ],
                weatherInfo: {
                    climate: 'Humid continental',
                    bestTimeToVisit: 'September to October',
                    averageTemp: {
                        summer: '31°C',
                        winter: '-3°C'
                    }
                }
            },
            {
                zone: 'Asia/Singapore',
                name: 'Singapore',
                country: 'Singapore',
                lat: 1.3521,
                lon: 103.8198,
                icon: 'fa-water',
                flag: 'https://flagcdn.com/sg.svg',
                landmark: 'images/landmarks/marina-bay-sands.jpg',
                landmarkName: 'Marina Bay Sands',
                capitalCity: true,
                description: 'A global financial center with tropical climate and multicultural heritage',
                attractions: [
                    'Marina Bay Sands',
                    'Gardens by the Bay',
                    'Sentosa Island',
                    'Singapore Zoo'
                ],
                weatherInfo: {
                    climate: 'Tropical rainforest',
                    bestTimeToVisit: 'February to April',
                    averageTemp: {
                        summer: '32°C',
                        winter: '27°C'
                    }
                }
            },
            {
                zone: 'Asia/Bangkok',
                name: 'Bangkok',
                country: 'Thailand',
                lat: 13.7563,
                lon: 100.5018,
                icon: 'fa-temple',
                flag: 'https://flagcdn.com/th.svg',
                landmark: 'images/landmarks/grand-palace.jpg',
                landmarkName: 'Grand Palace',
                capitalCity: true,
                description: 'Capital of Thailand, famous for ornate temples and vibrant street life',
                attractions: [
                    'Grand Palace',
                    'Wat Phra Kaew',
                    'Chatuchak Weekend Market',
                    'Wat Arun'
                ],
                weatherInfo: {
                    climate: 'Humid subtropical',
                    bestTimeToVisit: 'October to March',
                    averageTemp: {
                        summer: '35°C',
                        winter: '26°C'
                    }
                }
            },
            {
                zone: 'Asia/Karachi',
                name: 'Islamabad',
                country: 'Pakistan',
                lat: 33.6844,
                lon: 73.0479,
                icon: 'fa-mosque',
                flag: 'https://flagcdn.com/pk.svg',
                landmark: 'images/landmarks/faisal-mosque.jpg',
                landmarkName: 'Faisal Mosque',
                capitalCity: true,
                description: 'Capital city of Pakistan, known for its modern architecture and beautiful mosques',
                attractions: [
                    'Faisal Mosque',
                    'Pakistan Monument',
                    'Daman-e-Koh',
                    'Margalla Hills',
                    'Lake View Park',
                    'Lok Virsa Museum'
                ],
                weatherInfo: {
                    climate: 'Humid subtropical',
                    bestTimeToVisit: 'October to March',
                    averageTemp: {
                        summer: '38°C',
                        winter: '15°C'
                    }
                }
            },
            {
                zone: 'Asia/Kolkata',
                name: 'New Delhi',
                country: 'India',
                lat: 28.6139,
                lon: 77.2090,
                icon: 'fa-fort',
                flag: 'https://flagcdn.com/in.svg',
                landmark: 'images/landmarks/india-gate.jpg',
                landmarkName: 'India Gate',
                capitalCity: true,
                description: 'Capital of India, blend of ancient and modern architecture',
                attractions: [
                    'India Gate',
                    'Red Fort',
                    'Qutub Minar',
                    'Humayun\'s Tomb',
                    'Lotus Temple',
                    'Akshardham Temple'
                ],
                weatherInfo: {
                    climate: 'Humid subtropical',
                    bestTimeToVisit: 'October to March',
                    averageTemp: {
                        summer: '45°C',
                        winter: '20°C'
                    }
                }
            },
            // Continue with more Asian countries...
            // EUROPE
            {
                zone: 'Europe/London',
                name: 'London',
                country: 'United Kingdom',
                lat: 51.5074,
                lon: -0.1278,
                icon: 'fa-landmark',
                flag: 'https://flagcdn.com/gb.svg',
                landmark: 'images/landmarks/big-ben.jpg',
                landmarkName: 'Big Ben',
                capitalCity: true,
                description: 'Capital of England, a modern city with history stretching back to Roman times',
                attractions: [
                    'Big Ben',
                    'Tower Bridge',
                    'Buckingham Palace',
                    'London Eye'
                ],
                weatherInfo: {
                    climate: 'Temperate maritime',
                    bestTimeToVisit: 'March to May',
                    averageTemp: {
                        summer: '23°C',
                        winter: '7°C'
                    }
                }
            },
            {
                zone: 'Europe/Rome',
                name: 'Rome',
                country: 'Italy',
                lat: 41.9028,
                lon: 12.4964,
                icon: 'fa-monument',
                flag: 'https://flagcdn.com/it.svg',
                landmark: 'images/landmarks/colosseum.jpg',
                landmarkName: 'Colosseum',
                capitalCity: true,
                description: 'Capital of Italy, known as the "Eternal City", home to ancient ruins and artistic masterpieces',
                attractions: [
                    'Colosseum',
                    'Vatican Museums',
                    'Pantheon',
                    'Trevi Fountain',
                    'Roman Forum',
                    'St. Peter\'s Basilica'
                ],
                weatherInfo: {
                    climate: 'Mediterranean',
                    bestTimeToVisit: 'April to mid-June or September to October',
                    averageTemp: {
                        summer: '31°C',
                        winter: '12°C'
                    }
                }
            },
            {
                zone: 'Europe/Paris',
                name: 'Paris',
                country: 'France',
                lat: 48.8566,
                lon: 2.3522,
                icon: 'fa-tower-eiffel',
                flag: 'https://flagcdn.com/fr.svg',
                landmark: 'images/landmarks/eiffel-tower.jpg',
                landmarkName: 'Eiffel Tower',
                capitalCity: true,
                description: 'Capital of France, global center for art, fashion, culture, and gastronomy',
                attractions: [
                    'Eiffel Tower',
                    'Louvre Museum',
                    'Notre-Dame Cathedral',
                    'Arc de Triomphe',
                    'Champs-Élysées',
                    'Palace of Versailles'
                ],
                weatherInfo: {
                    climate: 'Oceanic',
                    bestTimeToVisit: 'June to September or October to April',
                    averageTemp: {
                        summer: '25°C',
                        winter: '8°C'
                    }
                }
            },
            {
                zone: 'Europe/Tirane',
                name: 'Tirana',
                country: 'Albania',
                lat: 41.3275,
                lon: 19.8187,
                icon: 'fa-landmark',
                flag: 'https://flagcdn.com/al.svg',
                landmark: 'images/landmarks/skanderbeg-square.jpg',
                landmarkName: 'Skanderbeg Square',
                capitalCity: true,
                description: 'Capital of Albania, known for its colorful Ottoman, Fascist and Soviet-era architecture',
                attractions: [
                    'Skanderbeg Square',
                    'Et\'hem Bey Mosque',
                    'National History Museum',
                    'Bunk\'Art',
                    'Grand Park of Tirana',
                    'Dajti Mountain'
                ],
                weatherInfo: {
                    climate: 'Mediterranean',
                    bestTimeToVisit: 'April to June or September to October',
                    averageTemp: {
                        summer: '28°C',
                        winter: '12°C'
                    }
                }
            },
            {
                zone: 'Europe/Madrid',
                name: 'Madrid',
                country: 'Spain',
                lat: 40.4168,
                lon: -3.7038,
                icon: 'fa-palace',
                flag: 'https://flagcdn.com/es.svg',
                landmark: 'images/landmarks/royal-palace.jpg',
                landmarkName: 'Royal Palace of Madrid',
                capitalCity: true,
                description: 'Capital of Spain, known for its elegant boulevards, manicured parks, and rich repositories of European art',
                attractions: [
                    'Royal Palace',
                    'Prado Museum',
                    'Plaza Mayor',
                    'Retiro Park',
                    'Gran Via',
                    'Temple of Debod'
                ],
                weatherInfo: {
                    climate: 'Mediterranean-Continental',
                    bestTimeToVisit: 'March to May or September to November',
                    averageTemp: {
                        summer: '32°C',
                        winter: '10°C'
                    }
                }
            },
            {
                zone: 'Europe/Berlin',
                name: 'Berlin',
                country: 'Germany',
                lat: 52.5200,
                lon: 13.4050,
                icon: 'fa-monument',
                flag: 'https://flagcdn.com/de.svg',
                landmark: 'images/landmarks/brandenburg-gate.jpg',
                landmarkName: 'Brandenburg Gate',
                capitalCity: true,
                description: 'Capital of Germany, known for its art scene, modern architecture, and historical significance',
                attractions: [
                    'Brandenburg Gate',
                    'East Side Gallery',
                    'Reichstag Building',
                    'Museum Island',
                    'Checkpoint Charlie',
                    'Berlin Wall Memorial'
                ],
                weatherInfo: {
                    climate: 'Continental',
                    bestTimeToVisit: 'May to September',
                    averageTemp: {
                        summer: '24°C',
                        winter: '3°C'
                    }
                }
            },
            {
                zone: 'Europe/Amsterdam',
                name: 'Amsterdam',
                country: 'Netherlands',
                lat: 52.3676,
                lon: 4.9041,
                icon: 'fa-bicycle',
                flag: 'https://flagcdn.com/nl.svg',
                landmark: 'images/landmarks/canal-houses.jpg',
                landmarkName: 'Canal Ring',
                capitalCity: true,
                description: 'Capital of Netherlands, famous for its artistic heritage, elaborate canal system, and narrow houses',
                attractions: [
                    'Anne Frank House',
                    'Rijksmuseum',
                    'Van Gogh Museum',
                    'Royal Palace',
                    'Vondelpark',
                    'Canal Ring'
                ],
                weatherInfo: {
                    climate: 'Oceanic',
                    bestTimeToVisit: 'April to May or September to November',
                    averageTemp: {
                        summer: '22°C',
                        winter: '5°C'
                    }
                }
            },
            // Continue with more European countries...
            // AMERICAS
            {
                zone: 'America/New_York',
                name: 'New York',
                country: 'United States',
                lat: 40.7128,
                lon: -74.0060,
                icon: 'fa-statue-liberty',
                flag: 'https://flagcdn.com/us.svg',
                landmark: 'images/landmarks/statue-liberty.jpg',
                landmarkName: 'Statue of Liberty',
                capitalCity: false,
                description: 'The most populous city in the United States, known for its iconic skyline',
                attractions: [
                    'Statue of Liberty',
                    'Central Park',
                    'Empire State Building',
                    'Times Square'
                ],
                weatherInfo: {
                    climate: 'Humid subtropical',
                    bestTimeToVisit: 'April to June or September to November',
                    averageTemp: {
                        summer: '29°C',
                        winter: '2°C'
                    }
                }
            },
            // Continue with more American countries...
            // AFRICA
            {
                zone: 'Africa/Cairo',
                name: 'Cairo',
                country: 'Egypt',
                lat: 30.0444,
                lon: 31.2357,
                icon: 'fa-pyramid',
                flag: 'https://flagcdn.com/eg.svg',
                landmark: 'images/landmarks/pyramids.jpg',
                landmarkName: 'Pyramids of Giza',
                capitalCity: true,
                description: 'Capital of Egypt, home to ancient pyramids and rich cultural heritage',
                attractions: [
                    'Pyramids of Giza',
                    'Egyptian Museum',
                    'Khan el-Khalili',
                    'Al-Azhar Mosque'
                ],
                weatherInfo: {
                    climate: 'Hot desert climate',
                    bestTimeToVisit: 'October to April',
                    averageTemp: {
                        summer: '35°C',
                        winter: '19°C'
                    }
                }
            },
            {
                zone: 'Africa/Algiers',
                name: 'Algiers',
                country: 'Algeria',
                lat: 36.7538,
                lon: 3.0588,
                icon: 'fa-mosque',
                flag: 'https://flagcdn.com/dz.svg',
                landmark: 'images/landmarks/notre-dame-dafrique.jpg',
                landmarkName: 'Notre Dame d\'Afrique',
                capitalCity: true,
                description: 'Capital and largest city of Algeria, known for its Ottoman and French-colonial architecture',
                attractions: [
                    'Notre Dame d\'Afrique',
                    'Kasbah of Algiers',
                    'Martyrs Memorial',
                    'Great Mosque of Algiers',
                    'Bardo National Museum',
                    'Test Garden'
                ],
                weatherInfo: {
                    climate: 'Mediterranean',
                    bestTimeToVisit: 'March to May or September to November',
                    averageTemp: {
                        summer: '30°C',
                        winter: '15°C'
                    }
                }
            },
            {
                zone: 'Africa/Lagos',
                name: 'Abuja',
                country: 'Nigeria',
                lat: 9.0765,
                lon: 7.3986,
                icon: 'fa-monument',
                flag: 'https://flagcdn.com/ng.svg',
                landmark: 'images/landmarks/national-mosque.jpg',
                landmarkName: 'Abuja National Mosque',
                capitalCity: true,
                description: 'Capital city of Nigeria, a planned modern city known for its architecture and central location',
                attractions: [
                    'Abuja National Mosque',
                    'Nigerian National Christian Center',
                    'Aso Rock',
                    'Millennium Park',
                    'Zuma Rock',
                    'Arts & Crafts Village'
                ],
                weatherInfo: {
                    climate: 'Tropical savanna',
                    bestTimeToVisit: 'November to February',
                    averageTemp: {
                        summer: '33°C',
                        winter: '25°C'
                    }
                }
            },
            // Continue with more African countries...
            // OCEANIA
            {
                zone: 'Australia/Sydney',
                name: 'Sydney',
                country: 'Australia',
                lat: -33.8688,
                lon: 151.2093,
                icon: 'fa-opera-house',
                flag: 'https://flagcdn.com/au.svg',
                landmark: 'images/landmarks/opera-house.jpg',
                landmarkName: 'Sydney Opera House',
                capitalCity: false,
                description: 'Largest city in Australia, famous for its iconic harbor and opera house',
                attractions: [
                    'Sydney Opera House',
                    'Harbour Bridge',
                    'Bondi Beach',
                    'Royal Botanic Garden'
                ],
                weatherInfo: {
                    climate: 'Temperate',
                    bestTimeToVisit: 'September to November or March to May',
                    averageTemp: {
                        summer: '26°C',
                        winter: '17°C'
                    }
                }
            }
        ];
        this.weatherCache = new Map();
        this.cacheDuration = 300000; // 5 minutes
        this.flagBaseUrl = 'https://flagcdn.com/w80/';
        this.intervals = [];
        this.pollutionCache = new Map();
        this.loadingElement = document.querySelector('.loading-message');
        this.weatherGrid = document.getElementById('weatherGrid');
        this.initialize();
    }
    async initialize() {
        try {
            console.log("Initializing Weather Dashboard...");
            
            // Check if API key is valid
            if (!this.apiKey || this.apiKey === 'b07b35f2f6d90022405686bf331d890e') {
                throw new Error('Invalid or missing API key. Please provide a valid OpenWeather API key.');
            }

            // Check if required DOM elements exist
            if (!this.weatherGrid || !this.loadingElement) {
                throw new Error('Required DOM elements not found. Check your HTML structure.');
            }

            this.setLoadingState(true);
            this.setupEventListeners();
            
            // Test API connection with first location
            const testLocation = this.timeZones[0];
            const testWeather = await this.getWeatherData(testLocation);
            
            if (!testWeather) {
                throw new Error('Failed to fetch weather data. Check your API key and network connection.');
            }

            await this.displayWeatherCards(this.timeZones);
            this.setLoadingState(false);
            this.startUpdateCycles();

        } catch (error) {
            console.error("Initialization failed:", error);
            this.setLoadingState(false);
            alert(error.message || "Failed to initialize the Weather Dashboard. Please try again later.");
        }
    }
    setupEventListeners() {
        const searchInput = document.querySelector('.search-input');
        searchInput.addEventListener('input', this.handleSearch.bind(this));
    }
    async displayWeatherCards(locations) {
        const grid = document.getElementById('weatherGrid');
        grid.innerHTML = '';

        for (const location of locations) {
            try {
                const weatherData = await this.getWeatherData(location);
                const card = this.createWeatherCard(location, weatherData);
                grid.appendChild(card);
            } catch (error) {
                console.error(`Error generating card for ${location.name}:`, error);
                const errorCard = this.generateErrorCardHTML(location);
                grid.appendChild(errorCard);
            }
        }
    }
    startUpdateCycles() {
        this.intervals.push(
            setInterval(() => this.updateAllTimes(), 1000),
            setInterval(() => this.updateAllWeather(), 300000),
            setInterval(() => this.cleanCache(), 300000)
        );
    }
    async getWeatherData(location, timeout = 5000) {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${this.apiKey}&units=metric`;
        console.log(`Attempting to fetch weather data for ${location.name}`);
        
        try {
            const response = await fetch(url);
            
            if (!response.ok) {
                const errorData = await response.json();
                console.error('API Error:', errorData);
                throw new Error(`Weather API error: ${errorData.message}`);
            }
            
            const data = await response.json();
            console.log(`Successfully fetched weather data for ${location.name}:`, data);
            return data;
        } catch (error) {
            console.error(`Failed to fetch weather data for ${location.name}:`, error);
            throw error;
        }
    }
    validateWeatherData(data) {
        return data 
            && data.main 
            && typeof data.main.temp === 'number'
            && Array.isArray(data.weather)
            && data.weather.length > 0
            && data.weather[0].description
            && data.weather[0].icon;
    }
    async createWeatherCard(location, weatherData) {
        const card = document.createElement('div');
        card.className = 'weather-card animate-in';
        card.id = `card-${location.zone}`;
        card.innerHTML = await this.generateCardHTML(location, weatherData);
        return card;
    }
    async generateCardHTML(location, weatherData) {
        const temp = Math.round(weatherData.main.temp);
        const weather = weatherData.weather[0];
        
        // Fetch pollution data
        let pollutionData;
        try {
            pollutionData = await this.getPollutionData(location);
        } catch (error) {
            console.error('Failed to fetch pollution data:', error);
        }
        const aqi = pollutionData?.list[0]?.main?.aqi || null;
        const aqiText = this.getAQIText(aqi);
        const aqiClass = this.getAQIClass(aqi);
        return `
        <div class="card-content ${location.capitalCity ? 'capital-city' : ''}">
            <div class="location-header">
                <img src="${location.flag}" 
                     alt="${location.country} flag" 
                     class="country-flag"
                     onerror="this.onerror=null; this.src='images/placeholder-flag.png'">
                <div class="location-info">
                    <h2>${location.name}</h2>
                    <span class="country-name">${location.country}</span>
                    ${location.capitalCity ? '<span class="capital-badge">Capital City</span>' : ''}
                </div>
            </div>
            
            <!-- Add landmark image section -->
            <div class="landmark-container">
                <img src="${location.landmark}" 
                     alt="${location.landmarkName}"
                     class="landmark-image"
                     onerror="this.onerror=null; this.src='images/placeholder-landmark.png'">
                <div class="landmark-caption">
                    <span>${location.landmarkName}</span>
                </div>
            </div>

            <div class="weather-main">
                <div class="temperature">
                    ${temp}°C
                    <img class="weather-icon" 
                         src="https://openweathermap.org/img/wn/${weather.icon}@2x.png" 
                         alt="${weather.description}"
                         style="${weather.icon.includes('01') ? 'filter: sepia(100%) saturate(300%) brightness(95%) hue-rotate(15deg)' : ''}"
                         >
                </div>
                <div class="weather-description">
                    ${weather.description}
                </div>
            </div>
            ${aqi !== null ? `
            <div class="pollution-info">
                <div class="aqi-indicator ${aqiClass}">
                    <span class="aqi-label">Air Quality:</span>
                    <span class="aqi-value">${aqiText}</span>
                </div>
            </div>
            ` : ''}
            <!-- Rest of your card content -->
        </div>
        `;
    }
    generateErrorCardHTML(location) {
        return `
            <div class="card-content error">
                <div class="location-header">
                    <img src="${location.flag}" alt="${location.country} flag" class="country-flag">
                    <div class="location-info">
                        <h2>${location.name}</h2>
                        <span class="country-name">${location.country}</span>
                    </div>
                </div>
                <div class="error-message">
                    <p>Weather data unavailable</p>
                </div>
            </div>
        `;
    }
    async getPollutionData(location) {
        const cacheKey = `${location.lat},${location.lon}`;
        const cached = this.pollutionCache.get(cacheKey);
        if (cached && Date.now() - cached.timestamp < this.cacheDuration) {
            return cached.data;
        }
        try { // Added try block here
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/air_pollution?lat=${location.lat}&lon=${location.lon}&appid=${this.apiKey}`
            );
            const data = await response.json();
            this.pollutionCache.set(cacheKey, {
                data,
                timestamp: Date.now()
            });
            return data;
        } catch (error) {
            console.error('Error fetching pollution data:', error);
            return null;
        }
    }
    getAQIText(aqi) {
        const aqiTexts = {
            1: 'Good',
            2: 'Fair',
            3: 'Moderate',
            4: 'Poor',
            5: 'Very Poor'
        };
        return aqiTexts[aqi] || 'Unknown';
    }
    getAQIClass(aqi) {
        const aqiClasses = {
            1: 'aqi-good',
            2: 'aqi-fair',
            3: 'aqi-moderate',
            4: 'aqi-poor',
            5: 'aqi-very-poor'
        };
        return aqiClasses[aqi] || 'aqi-unknown';
    }
    handleSearch(event) {
        const searchTerm = event.target.value.toLowerCase();
        const filteredLocations = this.timeZones.filter(location => 
            location.name.toLowerCase().includes(searchTerm) ||
            location.country.toLowerCase().includes(searchTerm)
        );
        this.displayWeatherCards(filteredLocations);
    }
    cleanCache() {
        const now = Date.now();
        for (const [key, value] of this.weatherCache) {
            if (now - value.timestamp > this.cacheDuration) {
                this.weatherCache.delete(key);
            }
        }
        for (const [key, value] of this.pollutionCache) {
            if (now - value.timestamp > this.cacheDuration) {
                this.pollutionCache.delete(key);
            }
        }
    }
    destroy() {
        this.weatherCache.clear();
    }
    setLoadingState(isLoading) {
        if (isLoading) {
            this.loadingElement.style.display = 'block';
            this.weatherGrid.style.display = 'none';
        } else {
            this.loadingElement.style.display = 'none';
            this.weatherGrid.style.display = 'grid';
        }
    }
    showError(message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        this.weatherGrid.innerHTML = '';
        this.weatherGrid.appendChild(errorDiv);
    }
    createErrorCard(location) {
        const card = document.createElement('div');
        card.className = 'weather-card error-state';
        card.innerHTML = `
            <div class="card-content">
                <div class="location-header">
                    <img src="${location.flag}" alt="${location.country} flag" class="country-flag">
                    <div class="location-info">
                        <h2>${location.name}</h2>
                        <span class="country-name">${location.country}</span>
                    </div>
                </div>
                <div class="error-message">
                    <p>Weather data unavailable</p>
                </div>
            </div>
        `;
        return card;
    }
    async updateAllTimes() {
        try {
            const cards = document.querySelectorAll('.weather-card');
            cards.forEach(card => {
                // Update time logic here if needed
                console.log("Updating times...");
            });
        } catch (error) {
            console.error("Error updating times:", error);
        }
    }
    async updateAllWeather() {
        try {
            console.log("Updating all weather data...");
            await this.displayWeatherCards(this.timeZones);
        } catch (error) {
            console.error("Error updating weather:", error);
        }
    }
}

// Create instance when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const dashboard = new WeatherDashboard();
});
