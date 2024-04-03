import AlphabetCard from '@/components/atoms/AlphabetCard'
import { alphabet } from "@/data/alphabet"
import { AlphabetListContainer } from './AlphabetListStyled'


const AlphabetList = () => {
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