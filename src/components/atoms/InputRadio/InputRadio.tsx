import { FC, InputHTMLAttributes } from "react"
import { InputRadioItem, InputRadioLabel, InputRadioSpan } from "./InputRadioStyled"

interface InputRadioProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string
}

const InputRadio: FC<InputRadioProps> = ({ label, ...props }) => {
    return (
        <InputRadioLabel>
            <InputRadioItem type="radio" name='radio' {...props} />
            <InputRadioSpan />
            {label}
        </InputRadioLabel>
    )
}
export default InputRadio