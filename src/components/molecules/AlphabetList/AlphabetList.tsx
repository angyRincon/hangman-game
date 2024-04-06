'use client'
import AlphabetCard from '@/components/atoms/AlphabetCard'
import { AlphabetListContainer } from './AlphabetListStyled'
import { useSettingsContext } from '@/context/settingsContext'


const AlphabetList = () => {
    const { alphabet } = useSettingsContext()
    return (
        <AlphabetListContainer>
            {
                alphabet.map(letter => (
                    <AlphabetCard key={letter} letter={letter} />
                ))
            }
        </AlphabetListContainer>
    )
}

export default AlphabetList