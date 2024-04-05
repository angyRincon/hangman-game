'use client'
import { useSearchParams } from "next/navigation"
import SettingsFontForm from "../SettingsFontForm"
import SettingsLanguageForm from "../SettingsLanguageForm"
import SettingsThemeForm from "../SettingsThemeForm"
import { SettingsCardContentContainer } from "./SettingsCardContentStyled"
import { SettingsTab } from "@/types/settings"

const SettingsCardContent = () => {
    const searchParams = useSearchParams()
    const selectedTab = searchParams.get('tab')

    return (
        <SettingsCardContentContainer>
            {
                selectedTab === SettingsTab.THEME && (
                    <SettingsThemeForm />
                )
            }

            {
                selectedTab === SettingsTab.LANGUAGE && (
                    <SettingsLanguageForm />
                )
            }

            {

                selectedTab === SettingsTab.FONT && (
                    <SettingsFontForm />
                )
            }
        </SettingsCardContentContainer>
    )
}
export default SettingsCardContent