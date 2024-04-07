import { FC, ReactNode } from "react"
import { ModalTemplateBackdrop, ModalTemplateContainer, ModalTemplateContent, ModalTemplateTitle } from "./ModalTemplateStyled"
import HappyIcon from "@/components/Icons/HappyIcon"

interface ModalTemplateProps {
    title: string
    titleIcon: ReactNode;
    children: ReactNode
}

const ModalTemplate: FC<ModalTemplateProps> = ({ title, titleIcon, children }) => {
    return (
        <>
            <ModalTemplateBackdrop />
            <ModalTemplateContainer>
                <ModalTemplateContent>
                    <ModalTemplateTitle>
                        {title}
                        {titleIcon}
                    </ModalTemplateTitle>

                    {children}
                </ModalTemplateContent>
            </ModalTemplateContainer>
        </>
    )
}
export default ModalTemplate