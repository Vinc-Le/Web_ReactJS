import React, { useState, useEffect } from 'react';

const getWeatherInfo = (code) => {
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

const Pokemon_and_Weather = () => {
    // State cho Pokemon
    const [pokemon, setPokemon] = useState(null);
    const [pokeLoading, setPokeLoading] = useState(true);
    const [pokeError, setPokeError] = useState(null);

    // State cho Weather
    const [weather, setWeather] = useState(null);
    const [weatherLoading, setWeatherLoading] = useState(true);
    const [weatherError, setWeatherError] = useState(null);

    useEffect(() => {
    
        const fetchPokemon = async () => {
            setPokeLoading(true);
            setPokeError(null);
            const randomPokemonId = Math.floor(Math.random() * 1025) + 1;
      
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`);
                if (!response.ok) throw new Error(`Pokémon "${randomPokemonId}" not found.`);
                const data = await response.json();
        
                setPokemon({
                    name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
                    imageUrl: data.sprites.other.dream_world.front_default || data.sprites.other['official-artwork'].front_default || data.sprites.front_default,
                    abilities: data.abilities.map(a => a.ability.name.charAt(0).toUpperCase() + a.ability.name.slice(1)).join(', ')
                });
            } catch (error) {
                setPokeError(error.message);
            }
            setPokeLoading(false);
        };

        const fetchWeather = async (lat, lon) => {
            setWeatherLoading(true);
            setWeatherError(null);
            const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
      
            try {
                const response = await fetch(url);
                const data = await response.json();
        
                const temp = data.current_weather.temperature;
                const code = data.current_weather.weathercode;
                const { desc, icon } = getWeatherInfo(code);

                setWeather({ temp, desc, icon });
            } catch (error) {
                console.error('Error getting weather:', error);
                setWeatherError('Unable to get weather data.');
            }
            setWeatherLoading(false);
        };

        const getLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        fetchWeather(position.coords.latitude, position.coords.longitude);
                    },
                    (error) => {
                        console.error('Positioning error:', error);
                        setWeatherError('Unable to get location. Using default.');
                        fetchWeather(10.762622, 106.660172); // Vị trí mặc định
                    }
                );
            } else {
                setWeatherError('Location not supported. Using default.');
                fetchWeather(10.762622, 106.660172); // Vị trí mặc định
            }
        };

        fetchPokemon();
        getLocation();

    }, []);

  return (
        <section className="services" id="api-projects">
            <h2 className="heading"> <span>Pokemon and Weather</span></h2>

            <div className="services-container">
        
                <div className="services-box" id="pokemon-box">
                    <i className='bx bxs-component'></i>
                    <h3>Pokemon</h3>
                
                    {pokeLoading && (
                        <>
                            <h4 id="poke-name">Loading...</h4>
                            <p id="poke-abilities">Abilities: ...</p>
                        </>
                    )}
                    {pokeError && (
                        <>
                            <h4 id="poke-name">Loading error</h4>
                            <p id="poke-abilities">{pokeError}</p>
                        </>
                    )}
                    {pokemon && (
                        <>
                            <img id="poke-img" src={pokemon.imageUrl} alt="Pokemon" style={{ display: 'block' }} />
                            <h4 id="poke-name">{pokemon.name}</h4>
                            <p id="poke-abilities">Abilities: {pokemon.abilities}</p>
                        </>
                    )}
                </div>

                <div className="services-box" id="weather-box">
                    <i className='bx bx-cloud'></i>
                    <h3>Weather</h3>

                    {weatherLoading && (
                        <>
                            <i id="weather-icon" className='bx bx-time-five'></i>
                            <h4 id="weather-temp">Loading...</h4>
                            <p id="weather-desc">Getting location...</p>
                        </>
                    )}
                    {weatherError && (
                        <>
                            <i id="weather-icon" className='bx bx-x-circle'></i>
                            <h4 id="weather-temp">Error</h4>
                            <p id="weather-desc">{weatherError}</p>
                        </>
                    )}
                    {weather && (
                        <>
                            <i id="weather-icon" className={`bx ${weather.icon}`}></i>
                            <h4 id="weather-temp">{weather.temp}°C</h4>
                            <p id="weather-desc">{weather.desc}</p>
                        </>
                    )}
                </div>

            </div>
        </section>
    );
};

export default Pokemon_and_Weather;