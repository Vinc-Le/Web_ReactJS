import React from "react";

const Pokemon_and_Weather = () => {

    document.addEventListener('DOMContentLoaded', () => {
        // PokeAPI
        const fetchPokemon = async (pokemonIdentifier) => {
            const pokeNameEl = document.getElementById('poke-name');
            const pokeImgEl = document.getElementById('poke-img');
            const pokeAbilitiesEl = document.getElementById('poke-abilities');

            pokeNameEl.textContent = 'Loading...';
            pokeImgEl.style.display = 'none';
            pokeAbilitiesEl.textContent = 'Abilities: ...';

            try {
                // Gọi API
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonIdentifier}`);
                if (!response.ok) throw new Error('Network response was not ok');
        
                const data = await response.json();
        
                // Cập nhật HTML với dữ liệu
                pokeNameEl.textContent = data.name.charAt(0).toUpperCase() + data.name.slice(1);
        
                const imageUrl = data.sprites.other.dream_world.front_default || data.sprites.other['official-artwork'].front_default || data.sprites.front_default;
                pokeImgEl.src = imageUrl;
                pokeImgEl.style.display = 'block';
        
                const abilities = data.abilities.map(ability => {
                    return ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.slice(1);
                }).join(', ');
                pokeAbilitiesEl.textContent = `Abilities: ${abilities}`;

            } catch (error)
            {
                console.error('Error when getting pokemon:', error);
            pokeNameEl.textContent = 'Loading error';
            pokeAbilitiesEl.textContent = `Pokémon "${pokemonIdentifier}" not found.`;
            }
        };

        // Open-Meteo
        const weatherIconEl = document.getElementById('weather-icon');
        const weatherTempEl = document.getElementById('weather-temp');
        const weatherDescEl = document.getElementById('weather-desc');

        // Hàm gọi API Open-Meteo
        const fetchWeather = (lat, lon) => {
            const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
        
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    const temp = data.current_weather.temperature;
                    const code = data.current_weather.weathercode;
                    const { desc, icon } = getWeatherInfo(code);

                    weatherTempEl.textContent = `${temp}°C`;
                    weatherDescEl.textContent = desc;
                    weatherIconEl.className = `bx ${icon}`; 
                })
                .catch(error => {
                    console.error('Error getting weather:', error);
                    weatherTempEl.textContent = 'Error';
                    weatherDescEl.textContent = 'Unable to get data.';
                    weatherIconEl.className = 'bx bx-x-circle';
                });
        };

        // Hàm thông dịch weather code
        const getWeatherInfo = (code) => {
            // Mã từ tài liệu của Open-Meteo
            if (code === 0) return { desc: 'Clear sky', icon: 'bx-sun' };
            if (code === 1) return { desc: 'Mainly clear', icon: 'bx-sun' };
            if (code === 2) return { desc: 'Partly cloudy', icon: 'bx-cloud' };
            if (code === 3) return { desc: 'Overcast', icon: 'bx-cloud' };
            if ([45, 48].includes(code)) return { desc: 'Fog', icon: 'bx-wind' };
            if ([51, 53, 55].includes(code)) return { desc: 'Drizzle', icon: 'bx-cloud-drizzle' };
            if ([56, 57].includes(code)) return { desc: 'Freezing Drizzle', icon: 'bx-cloud-drizzle' };
            if ([61, 63, 65].includes(code)) return { desc: 'Rain', icon: 'bx-cloud-rain' };
            if ([66, 67].includes(code)) return { desc: 'Freezing Rain', icon: 'bx-cloud-rain' };
            if ([71, 73, 75].includes(code)) return { desc: 'Snow fall', icon: 'bx-cloud-snow' };
            if (code === 77) return { desc: 'Snow grains', icon: 'bx-cloud-snow' };
            if ([80, 81, 82].includes(code)) return { desc: 'Rain showers', icon: 'bx-showers' };
            if ([85, 86].includes(code)) return { desc: 'Snow showers', icon: 'bx-cloud-snow' };
            if ([95, 96, 99].includes(code)) return { desc: 'Thunderstorm', icon: 'bx-cloud-lightning' };
            return { desc: 'Unknown', icon: 'bx-question-mark' };
        };

        // Hàm lấy vị trí của người dùng
        const getLocation = () => {
            if (navigator.geolocation) {
                // Nếu trình duyệt hỗ trợ
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        // Gọi fetchWeather
                        fetchWeather(position.coords.latitude, position.coords.longitude);
                    },
                    (error) => {
                        // Thất bại: dùng vị trí mặc định
                        console.error('Positioning error:', error);
                        weatherDescEl.textContent = 'Unable to get location.';
                        fetchWeather(10.762622, 106.660172); 
                    }
                );
            } else {
                // Trình duyệt không hỗ trợ định vị
                weatherDescEl.textContent = 'Browser does not support location.';
                fetchWeather(10.762622, 106.660172);
            }
        };

        const randomPokemonId = Math.floor(Math.random() * 1025) + 1;
        fetchPokemon(randomPokemonId);
        getLocation();

    });

    return (
        <section class="services" id="api-projects">
            <h2 class="heading"> <span>Pokemon and weather</span></h2>

            <div class="services-container">
            
                <div class="services-box" id="pokemon-box">
                    <i class='bx bxs-component'></i>
                    <h3>Pokemon</h3>
                    <img id="poke-img" src="" alt="Pokemon" style="display: none;"/>
                    <h4 id="poke-name">Đang tải...</h4>
                    <p id="poke-abilities">Abilities: ...</p>
                </div>

                <div class="services-box" id="weather-box">
                    <i class='bx bx-cloud'></i>
                    <h3>Weather</h3>
                    <i id="weather-icon" class='bx bx-time-five'></i>
                    <h4 id="weather-temp">Đang tải...</h4>
                    <p id="weather-desc">Đang lấy vị trí...</p>
                </div>

            </div>
        </section>
    );
};

export default Pokemon_and_Weather;