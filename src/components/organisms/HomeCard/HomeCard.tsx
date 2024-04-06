'use client'
import SettingsIcon from "@/components/Icons/SettingsIcon"
import Button from "@/components/atoms/Button"
import IconButton from "@/components/atoms/IconButton"
import PlayButton from "@/components/atoms/PlayButton"
import MainTitle from "@/components/molecules/MainTitle"
import { SettingsTab } from "@/types/settings"
import Link from "next/link"
import { HomeCardContainer, HomeCardFooter } from "./HomeCardStyled"
import { useSettingsContext } from "@/context/settingsContext"

const HomeCard = () => {
    const { text } = useSettingsContext()
    return (
        <HomeCardContainer>
            <MainTitle />

            <PlayButton />

            <HomeCardFooter>
                <Button label={text.howToPlay} />

                <Link href={`/settings?tab=${SettingsTab.THEME}`}>
                    <IconButton size="small" variant="secondary">
                        <SettingsIcon size="small" />
                    </IconButton>
                </Link>
            </HomeCardFooter>

        </HomeCardContainer>
    )
}

export default HomeCard