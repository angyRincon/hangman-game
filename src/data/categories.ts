import movies from '../data/movies.json'
import tvShows from '../data/tvShows.json'
import countries from '../data/countries.json'
import capitalCities from '../data/capitalCities.json'
import animals from '../data/animals.json'
import sports from '../data/sports.json'

export const categories = [
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

export const categoriesMap = new Map(categories.map(c => [c.id, c]))