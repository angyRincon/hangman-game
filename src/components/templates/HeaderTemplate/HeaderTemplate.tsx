import { FC, ReactNode } from "react"
import { HeaderTemplateContainer } from "./HeaderTemplateStyled"

interface HeaderTemplateProps {
    children: ReactNode
}

const HeaderTemplate: FC<HeaderTemplateProps> = ({ children }) => {
    return (
        <HeaderTemplateContainer>
            {children}
        </HeaderTemplateContainer>
    )
}

export default HeaderTemplate