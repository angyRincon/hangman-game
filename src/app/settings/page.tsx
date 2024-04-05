import { SettingsPageContainer, SettingsPageContent } from "./SettingsPageStyled"
import SettingsCardHeader from "@/components/molecules/SettingsCardHeader"
import SettingsCardContent from "@/components/organisms/SettingsCardContent"

const SettingsPage = () => {
    return (
        <SettingsPageContainer>
            <SettingsPageContent>
                <SettingsCardHeader />
                <SettingsCardContent />
            </SettingsPageContent>
        </SettingsPageContainer>
    )
}
export default SettingsPage