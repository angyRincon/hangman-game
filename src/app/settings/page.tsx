import { SettingsPageContainer, SettingsPageCard } from "./SettingsPageStyled"
import SettingsCardHeader from "@/components/molecules/SettingsCardHeader"
import SettingsCardContent from "@/components/organisms/SettingsCardContent"

const SettingsPage = () => {
    return (
        <SettingsPageContainer>
            <SettingsPageCard>
                <SettingsCardHeader />
                <SettingsCardContent />
            </SettingsPageCard>
        </SettingsPageContainer>
    )
}
export default SettingsPage