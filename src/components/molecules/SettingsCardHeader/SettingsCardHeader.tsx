import ArrowBackIcon from "@/components/Icons/ArrowBackIcon"
import IconButton from "@/components/atoms/IconButton"
import TabNavigation from "@/components/molecules/TabNavigation"
import Link from "next/link"
import { SettingsCardHeaderContainer, SettingsCardTitle, SettingsCardTitleContainer } from "./SettingsCardHeaderStyled"
import { TabProps } from "@/components/molecules/TabNavigation/types"

const tabItems:TabProps[] = [
    {
        id: 'theme',
        label: 'Theme'
    },
    {
        id: 'language',
        label: 'Language'
    },
    {
        id: 'font',
        label: 'Font'
    }
]

const SettingsCardHeader = () => {
    return (
        <SettingsCardHeaderContainer>
            <SettingsCardTitleContainer>
                <Link href='/'>
                    <IconButton size="small" variant="secondary">
                        <ArrowBackIcon size="small" />
                    </IconButton>
                </Link>
                <SettingsCardTitle>
                    Settings
                </SettingsCardTitle>
            </SettingsCardTitleContainer>

            <TabNavigation tabItems={tabItems} />
        </SettingsCardHeaderContainer>
    )
}
export default SettingsCardHeader