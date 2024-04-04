'use client'
import { FC } from 'react'
import { useWordsContext } from '@/context/wordsContext'
import { AlphabetCardButton } from './AlphabetCardStyled'

interface AlphabetCardProps {
    letter: string
}

const AlphabetCard: FC<AlphabetCardProps> = ({ letter }) => {
    const { selectedLetters, selectLetter } = useWordsContext()

    return (
        <AlphabetCardButton
            disabled={selectedLetters.includes(letter)}
            onClick={() => selectLetter(letter)}
        >
            {letter}
        </AlphabetCardButton>
    )
}

export default AlphabetCard