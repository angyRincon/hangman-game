'use client'
import { FC } from "react";
import { FontFamilyType, FontTypeEnum } from "@/types/settings";
import { Global, css, useTheme } from "@emotion/react";

interface GlobalStylesProps {
    fontType: FontFamilyType | undefined
}

export const getFontFamily = (fontType: FontFamilyType | undefined) => {
    switch (fontType) {
        case FontTypeEnum.LORA:
            return `Lora, serif`
        case FontTypeEnum.MERIENDA:
            return `Merienda, cursive`
        case FontTypeEnum.QUICKSAND:
            return `Quicksand, sans-serif`
        default:
            return `Lora, serif`
    }
}

const GlobalStyles: FC<GlobalStylesProps> = ({ fontType }) => {
    const theme = useTheme()

    const globalStyles = css`
        * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: ${getFontFamily(fontType)};
        font-optical-sizing: auto;
        font-style: normal;
        }

        html,
        body {
        max-width: 100vw;
        overflow-x: hidden;
        height: -webkit-fill-available;
        }

        body {
        background-color: ${theme.background};
        min-height: 100vh;
        min-height: -webkit-fill-available;
        }

        a {
        color: inherit;
        text-decoration: none;
        }

        input,
        button {
        font-family: inherit;
        }


`
    return (
        <Global styles={globalStyles} />
    )

}

export default GlobalStyles