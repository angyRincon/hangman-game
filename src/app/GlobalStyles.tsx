'use client'
import { Global, css, useTheme } from "@emotion/react";

const GlobalStyles = () => {
    const theme = useTheme()

    const globalStyles = css`
        * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        }

        html,
        body {
        max-width: 100vw;
        overflow-x: hidden;
        }

        body {
        background-color: ${theme.background};
        height: 100vh;
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