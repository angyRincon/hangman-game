'use client'
import CategoryHeader from "@/components/organisms/CategoryHeader"
import { CategoryPageContainer, CategoryPageContent } from "./CategoryPageStyled"
import CategoryList from "@/components/molecules/CategoryCardList"
import AlphabetList from "@/components/molecules/AlphabetList"
import Background from "@/components/organisms/Background"
import Modal from "@/components/organisms/Modal"
import { useWordsContext } from "@/context/wordsContext"
import { useCallback, useEffect, useState } from "react"
import { useOpenModal } from "@/hooks/useOpenModal"
import { alphabet } from "@/data/alphabet"

const CategoryPage = () => {
  const [openLooseModal, setOpenLooseModal] = useState<boolean>(false)
  const [openWinnerModal, setOpenWinnerModal] = useState<boolean>(false)

  const { isWinner, showResult, setSelectedLetters, lifeCounter, totalMoves, restartGame } = useWordsContext()

  const handleOpenLooseModal = useCallback(() => {
    if (lifeCounter === totalMoves) {
      showResult()
      setSelectedLetters(alphabet)
      setTimeout(() => {
        setOpenLooseModal(true)
      }, 1000)
    } else {
      setOpenLooseModal(false)
    }
  }, [lifeCounter, totalMoves])

  const handleOpenWinModal = useCallback(() => {
    if (isWinner) {
      setSelectedLetters(alphabet)
      setTimeout(() => {
        setOpenWinnerModal(true)
      }, 1000)
    } else {
      setOpenWinnerModal(false)
    }
  }, [isWinner])

  useEffect(() => {
    handleOpenWinModal()
  }, [handleOpenWinModal])

  useEffect(() => {
    handleOpenLooseModal()
  }, [handleOpenLooseModal])


  return (
    <>
      <CategoryPageContainer>
        <CategoryHeader />

        <CategoryPageContent>
          <CategoryList />
          <AlphabetList />
        </CategoryPageContent>

        <Background />
      </CategoryPageContainer>

      <Modal
        title="You Won"
        open={isWinner && openWinnerModal}
        action={restartGame}
        actionLabel="Play Again"
      />

      <Modal
        title="You Lose"
        open={openLooseModal}
        action={restartGame}
        actionLabel="Play Again"
      />
    </>
  )
}

export default CategoryPage