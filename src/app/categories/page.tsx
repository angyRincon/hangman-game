'use client'
import CategoryItem from "@/components/molecules/CategoryItem"
import { CategoriesPageContainer, CategoriesPageContent } from "./CategoriesPageStyled"
import CategoriesHeader from "@/components/organisms/CategoriesHeader"
import { PageContainer } from "../PageStyled"
import { useSettingsContext } from "@/context/settingsContext"

const CategoriesPage = () => {

    const { categories } = useSettingsContext()

    return (
        <>
            <CategoriesHeader />
            <CategoriesPageContainer>
                <CategoriesPageContent>
                    {categories.map(category => (
                        <CategoryItem
                            key={category.id}
                            href={`/categories/${category.id}`}
                            label={category.label}
                        />
                    ))}
                </CategoriesPageContent>
            </CategoriesPageContainer>
        </>
    )
}

export default CategoriesPage