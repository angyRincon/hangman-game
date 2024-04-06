import { FC, InputHTMLAttributes } from "react"
import { InputRadioItem, InputRadioLabel, InputRadioSpan } from "./InputRadioStyled"
import { NextFont } from "next/dist/compiled/@next/font"

interface InputRadioProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string
    labelStyle?: NextFont
}

const InputRadio: FC<InputRadioProps> = ({ label, labelStyle, ...props }) => {
    return (
        <InputRadioLabel className={labelStyle?.className}>
            <InputRadioItem type="radio" name='radio' {...props} />
            <InputRadioSpan />
            {label}
        </InputRadioLabel>
    )
}
export default InputRadio