'use client'
import ArrowBackIcon from "@/components/Icons/ArrowBackIcon"
import IconButton from "@/components/atoms/IconButton"
import TabNavigation from "@/components/molecules/TabNavigation"
import Link from "next/link"
import { SettingsCardHeaderContainer, SettingsCardTitle, SettingsCardTitleContainer } from "./SettingsCardHeaderStyled"
import { useSettingsContext } from "@/context/settingsContext"

const SettingsCardHeader = () => {
    const { text, tabItems } = useSettingsContext()

    return (
        <SettingsCardHeaderContainer>
            <SettingsCardTitleContainer>
                <Link href='/'>
                    <IconButton size="small" variant="secondary">
                        <ArrowBackIcon size="small" />
                    </IconButton>
                </Link>
                <SettingsCardTitle>
                    {text.settings}
                </SettingsCardTitle>
            </SettingsCardTitleContainer>

            <TabNavigation tabItems={tabItems} />
        </SettingsCardHeaderContainer>
    )
}
export default SettingsCardHeader