'use client'
import ArrowBackIcon from "@/components/Icons/ArrowBackIcon"
import IconButton from "@/components/atoms/IconButton"
import HeaderTemplate from "@/components/templates/HeaderTemplate"
import { HeaderLeftItems, HeaderRightItems, HeaderTitle } from "@/components/templates/HeaderTemplate/HeaderTemplateStyled"
import { useSettingsContext } from "@/context/settingsContext"
import Link from "next/link"

const CategoriesHeader = () => {
    const { text } = useSettingsContext()
    return (
        <HeaderTemplate>
            <HeaderLeftItems>
                <Link href='/'>
                    <IconButton variant="secondary">
                        <ArrowBackIcon />
                    </IconButton>
                </Link>
            </HeaderLeftItems>

            <HeaderRightItems>
                <HeaderTitle>{text.pickACategory}</HeaderTitle>
            </HeaderRightItems>
        </HeaderTemplate>
    )
}
export default CategoriesHeader