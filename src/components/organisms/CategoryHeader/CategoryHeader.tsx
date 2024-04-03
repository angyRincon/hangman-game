'use client'
import { useState } from "react"
import IconButton from "@/components/atoms/IconButton"
import MenuIcon from "@/components/Icons/MenuIcon"
import LifeBar from "@/components/atoms/LifeBar"
import HeartIcon from "@/components/Icons/HeartIcon"
import HeaderTemplate from "@/components/templates/HeaderTemplate"
import { HeaderLeftItems, HeaderRightItems, HeaderTitle } from "@/components/templates/HeaderTemplate/HeaderTemplateStyled"
import Modal from "../Modal"
import { useWordsContext } from "@/context/wordsContext"
import HeartBrokenIcon from "@/components/Icons/HeartBrokenIcon"
import { LifePointsContainer, LifePointsValue } from "./CategoryHeaderStyled"
import { useParams } from "next/navigation"
import { categoriesMap } from "@/data/categories"

const CategoryHeader = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const { lifeCounter, totalMoves, restartGame } = useWordsContext()

    const { category: categoryId } = useParams()

    const handleOpenMenu = () => {
        setOpenMenu(true)
    }

    const handleCloseMenu = () => {
        restartGame()
        setOpenMenu(false)
    }

    const headerTitle = categoriesMap.get(categoryId as string)?.label

    return (
        <>
            <HeaderTemplate>
                <HeaderLeftItems>
                    <IconButton onClick={handleOpenMenu}>
                        <MenuIcon />
                    </IconButton>
                    <HeaderTitle>{headerTitle}</HeaderTitle>
                </HeaderLeftItems>

                <HeaderRightItems>
                    <LifeBar />
                    <LifePointsContainer>
                        {totalMoves - lifeCounter !== 0 ? <HeartIcon /> : <HeartBrokenIcon />}
                        <LifePointsValue>{totalMoves - lifeCounter}</LifePointsValue>
                    </LifePointsContainer>

                </HeaderRightItems>
            </HeaderTemplate>

            <Modal
                title="Paused"
                open={openMenu}
                action={handleCloseMenu}
                actionLabel="Continue"
            />
        </>
    )
}

export default CategoryHeader