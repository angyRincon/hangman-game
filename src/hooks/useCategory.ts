import { useEffect, useState } from "react"
import { CategoryItem } from "@/types/categories"
import { useSettingsContext } from "@/context/settingsContext"
import { useParams } from "next/navigation"

export const useCategory = () => {
    const [category, setCategory] = useState<string>('')
    const [categoriesMap, setCategoriesMap] = useState<Map<string, CategoryItem>>(new Map())
    const [categoryArray, setCategoryArray] = useState<string[]>([])
    const { categories } = useSettingsContext()

    const { category: categoryId } = useParams()

    const getRandomCategory = () => {
        const ctgMap = new Map(categories.map(c => [c.id, c]))
        setCategoriesMap(ctgMap)

        if (categoryId) {
            const categoryItem = ctgMap.get(categoryId as string) as CategoryItem
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
        } else {
            setCategory('')
            setCategoryArray([])
        }
    }

    useEffect(() => {
        getRandomCategory()
    }, [categoryId])

    return { categoriesMap, category, categoryArray, getRandomCategory }
}
