'use client'
import SettingsForm from "@/components/organisms/SettingsForm"
import {
    SettingsCardContent,
    SettingsCardHeader,
    SettingsCardTitle,
    SettingsPageContainer,
    SettingsPageContent
} from "./SettingsPageStyled"
import IconButton from "@/components/atoms/IconButton"
import ArrowBackIcon from "@/components/Icons/ArrowBackIcon"
import Link from "next/link"

const SettingsPage = () => {
    return (
        <SettingsPageContainer>
            <SettingsPageContent>
                <SettingsCardHeader>
                    <Link href='/'>
                        <IconButton size="small" variant="secondary">
                            <ArrowBackIcon size="small" />
                        </IconButton>
                    </Link>

                    <SettingsCardTitle>
                        Settings
                    </SettingsCardTitle>
                </SettingsCardHeader>

                <SettingsCardContent>
                    <SettingsForm />
                </SettingsCardContent>
            </SettingsPageContent>
        </SettingsPageContainer>
    )
}
export default SettingsPage