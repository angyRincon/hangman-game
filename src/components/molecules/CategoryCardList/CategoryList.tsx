'use client'
import LetterCard from "../../atoms/LetterCard"
import { CategoryListContainer, Divider } from "./CategoryListStyled"
import { useWordsContext } from "@/context/wordsContext"

const CategoryList = () => {
    const { movie } = useWordsContext()
    
    return (
        <CategoryListContainer>
            {movie?.map((letter, idx) => {
                return letter === '_' || letter === ' ' ? <Divider key={idx} /> : <LetterCard key={idx} letter={letter} />
            })}
        </CategoryListContainer>
    )
}

export default CategoryList