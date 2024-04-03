'use client'
import { categoriesMap } from "@/data/categories";
import { useCategory } from "@/hooks/useCategory";
import { getRandomCategory } from "@/utils/categories";
import { useParams, useSearchParams } from "next/navigation";
import { FC, ReactNode, createContext, useContext, useEffect, useState } from "react";

interface WordsContextProps {
    movie: string[] | null,
    isWinner: boolean,
    lifeCounter: number,
    totalMoves: number,
    selectedLetters: string[],
    selectLetter: (letter: string) => void;
    restartGame: () => void;
    setMovie: (movie: string[]) => void
}

const initialValues: WordsContextProps = {
    movie: [],
    isWinner: false,
    totalMoves: 0,
    lifeCounter: 0,
    selectedLetters: [],
    selectLetter: () => { },
    restartGame: () => { },
    setMovie: () => { }
}

const WordsContext = createContext(initialValues)

export const WordsContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [movie, setMovie] = useState<string[] | null>([])
    const [isWinner, setIsWinner] = useState<boolean>(false)
    const [selectedLetters, setSelectedLetters] = useState<string[]>([])
    const [lifeCounter, setLifeCounter] = useState<number>(0)

    const { category: categoryId } = useParams()

    const { category, categoryArray } = useCategory(categoryId as string)

    const totalMoves = 8

    const selectLetter = (letter: string) => {
        setSelectedLetters([...selectedLetters, letter])
        if (movie) {
            category.split('').forEach((movieLetter, idx) => {
                if (movieLetter === letter) {
                    movie[idx] = letter
                }
            })

            if (!movie.includes(letter)) {
                setLifeCounter(lifeCounter + 1)
            }

            if (!movie.includes('')) {
                setIsWinner(true)
            }

            setMovie([...movie])
        }
    }

    useEffect(() => {
        setMovie(categoryArray)
    }, [categoryArray])

    const restartGame = () => {
        const { randomCategory, randomCategoryArray } = getRandomCategory(categoryId)
        setMovie(randomCategoryArray)
        setIsWinner(false)
        setLifeCounter(0)
    }

    const values = {
        movie,
        isWinner,
        setMovie,
        totalMoves,
        lifeCounter,
        selectLetter,
        selectedLetters,
        restartGame,

    }

    return (
        <WordsContext.Provider value={values}>
            {children}
        </WordsContext.Provider>
    )
}

export const useWordsContext = () => useContext(WordsContext)
