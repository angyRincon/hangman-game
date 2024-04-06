'use client'
import { useSettingsContext } from "@/context/settingsContext"
import { MainTitleContainer, ManinText, SmallBottomText, SmallText } from "./MainTitleStyled"

const MainTitle = () => {
    const { text } = useSettingsContext()
    return (
        <MainTitleContainer>
            {
                text.title.map(({ position, label }) => (
                    <div key={label}>
                        {position === 0 && <SmallText key={label}>{label}</SmallText>}
                        {position === 1 && <ManinText key={label}>{label}</ManinText>}
                        {position === 2 && <SmallBottomText key={label}>{label}</SmallBottomText>}
                    </div>
                ))
            }
        </MainTitleContainer>
    )
}
export default MainTitle