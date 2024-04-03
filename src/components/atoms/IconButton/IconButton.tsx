import { FC, HTMLAttributes, ReactElement, ReactNode } from "react"
import { IconButtonContainer } from "./IconButtonStyled"
import { ButtonVariantType } from "../Button/Button"

export type IconButtonSize = 'small' | 'medium' | 'large'

interface IconButtonProps extends HTMLAttributes<HTMLButtonElement> {
    size?: IconButtonSize
    variant?: ButtonVariantType
    children: ReactNode
}

const IconButton: FC<IconButtonProps> = ({ children, size = 'medium', variant = 'primary', ...props }) => {
    return (
        <IconButtonContainer $size={size} $variant={variant} {...props}>
            {children}
        </IconButtonContainer>
    )
}
export default IconButton