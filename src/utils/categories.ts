import movies from '../data/movies.json';

export const getRandomCategory = (category: string | string[]) => {
  console.log(category)
  const convertedCategories = movies.map(c => c.name.toUpperCase())
  const randomIndex = Math.floor(Math.random() * convertedCategories.length)
  const randomCategory = convertedCategories[randomIndex]

  const randomCategoryArray = randomCategory.split('').map(rc => {
    if (rc === ' ') {
      return '_'
    } else {
      return ''
    }
  })

  return { randomCategory, randomCategoryArray }
}
