import { ButtonHTMLAttributes, FC } from "react"
import { ButtonContainer } from "./ButtonStyled"

export type ButtonVariantType = 'primary' | 'secondary'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string
    variant?: ButtonVariantType

}

const Button: FC<ButtonProps> = ({ label, variant = 'primary', ...props }) => {
    return (
        <ButtonContainer $variant={variant} {...props}>
            {label}
        </ButtonContainer>
    )
}

export default Button