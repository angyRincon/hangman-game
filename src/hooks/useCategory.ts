import { useEffect, useState } from "react"
import { categoriesMap } from "@/data/categories"
import { CategoryItem } from "@/data/types"

export const useCategory = (categoryId: string) => {
    const [category, setCategory] = useState<string>('')
    const [categoryArray, setCategoryArray] = useState<string[]>([])

    const getRandomCategory = () => {
        const categoryItem = categoriesMap.get(categoryId) as CategoryItem
        const convertedCategories = categoryItem?.data?.map(c => c.name.toUpperCase())
        const randomIndex = Math.floor(Math.random() * convertedCategories?.length) ?? 0
        const randomCategory = convertedCategories?.[randomIndex]

        const randomCategoryArray = randomCategory?.split('').map(rc => {
            if (rc === ' ') {
                return '_'
            } else {
                return ''
            }
        })

        setCategory(randomCategory)
        setCategoryArray(randomCategoryArray)
    }

    useEffect(() => {
        getRandomCategory()
    }, [categoriesMap, categoryId])

    return { category, categoryArray, getRandomCategory }
}
