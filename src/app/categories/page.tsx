'use client'
import CategoryItem from "@/components/molecules/CategoryItem"
import { CategoriesPageContent } from "./CategoriesPageStyled"
import CategoriesHeader from "@/components/organisms/CategoriesHeader"
import { PageContainer } from "../PageStyled"
import { useSettingsContext } from "@/context/settingsContext"

const CategoriesPage = () => {

    const { categories } = useSettingsContext()

    return (
        <>
            <CategoriesHeader />
            <PageContainer>
                <CategoriesPageContent>
                    {categories.map(category => (
                        <CategoryItem
                            href={`/categories/${category.id}`}
                            label={category.label}
                        />
                    ))}
                </CategoriesPageContent>
            </PageContainer>
        </>
    )
}

export default CategoriesPage