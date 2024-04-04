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
            <path
                d="M0 0h24v24H0z"
                fill="none"
            />
            <path
                d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"
            />
        </SvgWrapper>
    )
}
export default ArrowBackIcon