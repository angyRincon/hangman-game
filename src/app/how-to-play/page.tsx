'use client'
import ArrowBackIcon from "@/components/Icons/ArrowBackIcon"
import IconButton from "@/components/atoms/IconButton"
import HowToPlayContent from "@/components/organisms/HowToPlayContent"
import HeaderTemplate from "@/components/templates/HeaderTemplate"
import { HeaderLeftItems, HeaderRightItems, HeaderTitle } from "@/components/templates/HeaderTemplate/HeaderTemplateStyled"
import { useSettingsContext } from "@/context/settingsContext"
import Link from "next/link"

const HoToPlayPage = () => {
    const { text, howToPlayItems } = useSettingsContext()

    return (
        <>
            <HeaderTemplate>
                <HeaderLeftItems>
                    <Link href='/'>
                        <IconButton variant="secondary">
                            <ArrowBackIcon />
                        </IconButton>
                    </Link>
                </HeaderLeftItems>

                <HeaderRightItems>
                    <HeaderTitle>{text.howToPlay}</HeaderTitle>
                </HeaderRightItems>
            </HeaderTemplate>


            <HowToPlayContent elements={howToPlayItems} />
        </>
    )
}
export default HoToPlayPage