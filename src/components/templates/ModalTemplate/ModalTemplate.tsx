import { FC, ReactNode } from "react"
import { ModalTemplateBackdrop, ModalTemplateContainer, ModalTemplateContent, ModalTemplateTitle } from "./ModalTemplateStyled"

interface ModalTemplateProps {
    title: string
    children: ReactNode
}

const ModalTemplate: FC<ModalTemplateProps> = ({ title, children }) => {
    return (
        <>
            <ModalTemplateBackdrop />
            <ModalTemplateContainer>
                <ModalTemplateContent>
                    <ModalTemplateTitle>
                        {title}
                    </ModalTemplateTitle>

                    {children}
                </ModalTemplateContent>
            </ModalTemplateContainer>
        </>
    )
}
export default ModalTemplate