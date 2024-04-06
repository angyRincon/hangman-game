import movies from './movies.json'
import tvShows from './tvShows.json'
import countries from './countries.json'
import capitalCities from './capitalCities.json'
import animals from './animals.json'
import sports from './sports.json'

export const englishCategories = [
    {
        id: 'movies',
        label: 'Movies',
        data: movies
    },
    {
        id: 'tv-shows',
        label: 'TV Shows',
        data: tvShows
    },
    {
        id: 'countries',
        label: 'Countries',
        data: countries
    },
    {
        id: 'capital-cities',
        label: 'Capital Cities',
        data: capitalCities
    },
    {
        id: 'animals',
        label: 'Animals',
        data: animals
    },
    {
        id: 'sports',
        label: 'Sports',
        data: sports
    }
]