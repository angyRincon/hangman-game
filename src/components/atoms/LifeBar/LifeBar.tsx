'use client'
import { useWordsContext } from "@/context/wordsContext"
import { LifeBarContainer, LifeBarItem } from "./LifeBarStyled"

const LifeBar = () => {
    const { lifeCounter, totalMoves} = useWordsContext()

    return (
        <LifeBarContainer>
            <LifeBarItem $value={ lifeCounter * Math.round(100 / totalMoves)} />
        </LifeBarContainer>
    )
}

export default LifeBar