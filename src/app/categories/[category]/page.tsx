'use client'
import CategoryHeader from "@/components/organisms/CategoryHeader"
import { CategoryPageContainer, CategoryPageContent } from "./CategoryPageStyled"
import CategoryList from "@/components/molecules/CategoryCardList"
import AlphabetList from "@/components/molecules/AlphabetList"
import Background from "@/components/organisms/Background"
import Modal from "@/components/organisms/Modal"
import { useWordsContext } from "@/context/wordsContext"
import { useCallback, useEffect, useState } from "react"
import { useSettingsContext } from "@/context/settingsContext"
import HappyIcon from "@/components/Icons/HappyIcon"
import SadIcon from "@/components/Icons/SadIcon"


const CategoryPage = () => {
  const [openLooseModal, setOpenLooseModal] = useState<boolean>(false)
  const [openWinnerModal, setOpenWinnerModal] = useState<boolean>(false)

  const { isWinner, isLooser, showResult, setSelectedLetters, lifeCounter, totalMoves, restartGame } = useWordsContext()
  const { text, alphabet } = useSettingsContext()

  const handleOpenLooseModal = useCallback(() => {
    if (isLooser) {
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
        title={text.youWon}
        titleIcon={<HappyIcon />}
        open={isWinner && openWinnerModal}
        action={restartGame}
        actionLabel={text.playAgain}
      />

      <Modal
        title={text.youLose}
        titleIcon={<SadIcon />}
        open={openLooseModal}
        action={restartGame}
        actionLabel={text.playAgain}
      />
    </>
  )
}

export default CategoryPage