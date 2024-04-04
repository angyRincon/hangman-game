'use client'
import CategoryHeader from "@/components/organisms/CategoryHeader"
import { CategoryPageContainer, CategoryPageContent } from "./CategoryPageStyled"
import CategoryList from "@/components/molecules/CategoryCardList"
import AlphabetList from "@/components/molecules/AlphabetList"
import Background from "@/components/organisms/Background"
import Modal from "@/components/organisms/Modal"
import { useWordsContext } from "@/context/wordsContext"
import { useCallback, useEffect, useState } from "react"

const CategoryPage = () => {
  const [openLooseModal, setOpenLooseModal] = useState(false)

  const { isWinner, lifeCounter, totalMoves, restartGame, movie } = useWordsContext()

  const openLooseModalAction = useCallback(() => {
    if (lifeCounter === totalMoves) {
      
    } else {
      setOpenLooseModal(false)
    }
  }, [lifeCounter, totalMoves])

  useEffect(() => {
    openLooseModalAction()
  }, [openLooseModalAction])

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

      
      {/* <Modal
        title="You Won"
        open={isWinner}
        action={restartGame}
        actionLabel="Play Again"
      />

      <Modal
        title="You Lose"
        open={openLooseModal}
        action={restartGame}
        actionLabel="Play Again"
      /> */}
    </>
  )
}

export default CategoryPage