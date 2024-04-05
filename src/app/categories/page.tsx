import CategoryItem from "@/components/molecules/CategoryItem"
import { categories } from "@/data/categories/categories"
import { CategoriesBackground, CategoriesPageContainer, CategoriesPageContent } from "./CategoriesPageStyled"
import CategoriesHeader from "@/components/organisms/CategoriesHeader"
import { PageContainer } from "../PageStyled"

const CategoriesPage = () => {
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