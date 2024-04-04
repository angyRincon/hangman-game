import { useWordsContext } from "@/context/wordsContext"
import { alphabet } from "@/data/alphabet"
import { useCallback, useState } from "react"

export const useOpenModal = () => {
    const [openModal, setOpenModal] = useState(false)
    const { setSelectedLetters  } = useWordsContext()

    const handleOpenModal = (shouldOpenModal: boolean, onOpenModal: (value: boolean) => void) => {
        if (shouldOpenModal) {
            setSelectedLetters(alphabet)
            setTimeout(() => {
                onOpenModal(true)
            }, 1000)
        } else {
            onOpenModal(false)
        }
    }



    return {
        openModal,
        handleOpenModal
    }
}