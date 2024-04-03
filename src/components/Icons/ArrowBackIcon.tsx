'use client'
import { FC } from "react"
import { SvgIconProps, SvgWrapper, iconSize } from "./IconStyled"

const ArrowBackIcon: FC<SvgIconProps> = ({ size }) => {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            height={iconSize(size)}
            width={iconSize(size)}
            viewBox="0 0 24 24"
            fill="#FFFFFF">
            <path d="M0 0h24v24H0z"
                fill="none"
            />
            <path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"
            />
        </SvgWrapper>
    )
}
export default ArrowBackIcon