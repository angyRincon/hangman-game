import { FC } from 'react'
import { LetterCardItem } from './LetterCardStyled'
import { useWordsContext } from '@/context/wordsContext'

interface LetterCardProps {
    letter: string
}

const LetterCard: FC<LetterCardProps> = ({ letter }) => {
    const { selectedLetters } = useWordsContext()

    return (
        <LetterCardItem $isActive={selectedLetters.includes(letter)}>
            {letter}
        </LetterCardItem>
    )
}

export default LetterCard