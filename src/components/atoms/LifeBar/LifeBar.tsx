'use client'
import { useWordsContext } from "@/context/wordsContext"
import { LifeBarContainer, LifeBarItem } from "./LifeBarStyled"

const LifeBar = () => {
    const { lifeCounter } = useWordsContext()

    return (
        <LifeBarContainer>
            <LifeBarItem $value={ lifeCounter * Math.round(100 / 5)} />
        </LifeBarContainer>
    )
}

export default LifeBar