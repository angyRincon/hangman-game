import CategoryItem from "@/components/molecules/CategoryItem"
import { categories } from "@/data/categories"
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
                <CategoriesBackground
                    width={0}
                    height={0}
                    sizes="100vw"
                    src="/images/leaves.png"
                    alt="mountains"
                    quality={100}
                />
            </PageContainer>
        </>
    )
}

export default CategoriesPage