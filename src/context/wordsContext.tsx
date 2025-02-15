'use client'
import { useCategory } from "@/hooks/useCategory";
import { FC, ReactNode, createContext, useContext, useEffect, useState } from "react";

interface WordsContextProps {
    movie: string[] | null,
    isWinner: boolean,
    isLooser: boolean,
    lifeCounter: number,
    totalMoves: number,
    selectedLetters: string[],
    selectLetter: (letter: string) => void;
    restartGame: () => void;
    setSelectedLetters: (selectedLetters: string[]) => void;
    setMovie: (movie: string[]) => void
    showResult: () => void
}

const initialValues: WordsContextProps = {
    movie: [],
    isWinner: false,
    isLooser: false,
    totalMoves: 0,
    lifeCounter: 0,
    selectedLetters: [],
    selectLetter: () => { },
    restartGame: () => { },
    setMovie: () => { },
    showResult: () => { },
    setSelectedLetters: () => { }
}

const WordsContext = createContext(initialValues)

export const WordsContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [movie, setMovie] = useState<string[] | null>([])
    const [isWinner, setIsWinner] = useState<boolean>(false)
    const [selectedLetters, setSelectedLetters] = useState<string[]>([])
    const [lifeCounter, setLifeCounter] = useState<number>(0)

    const { category, categoryArray, getRandomCategory } = useCategory()

    const totalMoves = 8
    const isLooser = lifeCounter === totalMoves

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

    const showResult = () => {
        setMovie(category.split(''))
    }

    const restartGame = () => {
        getRandomCategory()
        setIsWinner(false)
        setLifeCounter(0)
        setSelectedLetters([])
    }

    const values = {
        movie,
        isWinner,
        isLooser,
        setMovie,
        totalMoves,
        lifeCounter,
        selectLetter,
        selectedLetters,
        setSelectedLetters,
        restartGame,
        showResult,
    }

    return (
        <WordsContext.Provider value={values}>
            {children}
        </WordsContext.Provider>
    )
}

export const useWordsContext = () => useContext(WordsContext)
