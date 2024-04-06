'use client'
import { FC } from "react"
import ModalTemplate from "@/components/templates/ModalTemplate"
import { LoseModalContent } from "./ModalStyled"
import Button from "@/components/atoms/Button"
import { useWordsContext } from "@/context/wordsContext"
import { useRouter } from "next/navigation"
import { useSettingsContext } from "@/context/settingsContext"

interface ModalProps {
    open: boolean,
    title: string;
    action: () => void
    actionLabel: string
}

const Modal: FC<ModalProps> = ({ open, title, action, actionLabel }) => {
    const { text } = useSettingsContext()
    const { restartGame } = useWordsContext()
    const router = useRouter()

    const handleAction = (redirectRoute: string) => {
        router.push(redirectRoute)
        setTimeout(() => restartGame(), 1000)
    }

    const handleNewCategory = () => {
        handleAction('/categories')
    }

    const handleQuitGame = () => {
        handleAction('/')
    }

    if (!open) return null
    return (
        <ModalTemplate title={title}>
            <LoseModalContent>
                <Button onClick={action} label={actionLabel} />
                <Button onClick={handleNewCategory} label={text.newCategory} />
                <Button onClick={handleQuitGame} variant="secondary" label={text.quitGame} />
            </LoseModalContent>
        </ModalTemplate>
    )
}
export default Modal