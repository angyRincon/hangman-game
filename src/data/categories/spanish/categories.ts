import movies from './movies.json'
import tvShows from './tvShows.json'
import countries from './countries.json'
import capitalCities from './capitalCities.json'
import animals from './animals.json'
import sports from './sports.json'

export const spanishCategories = [
    {
        id: 'movies',
        label: 'Películas',
        data: movies
    },
    {
        id: 'tv-shows',
        label: 'Series',
        data: tvShows
    },
    {
        id: 'countries',
        label: 'Países',
        data: countries
    },
    {
        id: 'capital-cities',
        label: 'Ciudades Capitales',
        data: capitalCities
    },
    {
        id: 'animals',
        label: 'Animales',
        data: animals
    },
    {
        id: 'sports',
        label: 'Deportes',
        data: sports
    }
]