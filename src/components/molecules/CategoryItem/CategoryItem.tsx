import { FC } from "react"
import { CategoryItemContainer } from "./CategoryItemStyled"

interface CategoriesListItemProps {
    label: string;
    href: string;
}

const CategoryItem: FC<CategoriesListItemProps> = ({ label, href }) => {
    return (
        <CategoryItemContainer href={href}>
            {label}
        </CategoryItemContainer>
    )
}
export default CategoryItem