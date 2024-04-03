import ArrowBackIcon from "@/components/Icons/ArrowBackIcon"
import IconButton from "@/components/atoms/IconButton"
import HeaderTemplate from "@/components/templates/HeaderTemplate"
import { HeaderLeftItems, HeaderRightItems, HeaderTitle } from "@/components/templates/HeaderTemplate/HeaderTemplateStyled"
import Link from "next/link"

const CategoriesHeader = () => {
    return (
        <HeaderTemplate>
            <HeaderLeftItems>
                <Link href='/'>
                    <IconButton>
                        <ArrowBackIcon />
                    </IconButton>
                </Link>
            </HeaderLeftItems>

            <HeaderRightItems>
                <HeaderTitle>Pick a Category</HeaderTitle>
            </HeaderRightItems>
        </HeaderTemplate>
    )
}
export default CategoriesHeader