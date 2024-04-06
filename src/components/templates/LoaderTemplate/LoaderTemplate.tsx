'use client'
import { useSettingsContext } from "@/context/settingsContext"
import { LoadingContainer, LoadingLabel } from "./LoaderTemplateStyled"

const LoaderTemplate = () => {
    const { text } = useSettingsContext()
    return (
        <LoadingContainer>
            <LoadingLabel>
                {text.loading}...
            </LoadingLabel>
        </LoadingContainer>
    )
}
export default LoaderTemplate