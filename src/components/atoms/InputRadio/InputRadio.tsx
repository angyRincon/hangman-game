import { FC, InputHTMLAttributes } from "react"
import { InputRadioItem, InputRadioLabel, InputRadioSpan } from "./InputRadioStyled"
import { NextFont } from "next/dist/compiled/@next/font"
import { FontFamilyType } from "@/types/settings"

interface InputRadioProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string
    labelStyle?: FontFamilyType
}

const InputRadio: FC<InputRadioProps> = ({ label, labelStyle, ...props }) => {
    return (
        <InputRadioLabel $labelStyle={labelStyle}>
            <InputRadioItem type="radio" name='radio' {...props} />
            <InputRadioSpan />
            {label}
        </InputRadioLabel>
    )
}
export default InputRadio