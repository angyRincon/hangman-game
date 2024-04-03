import { FC, ReactNode } from "react"
import { WordsContextProvider } from "@/context/wordsContext"
import { ThemeSwitcherProvider } from "@/context/themeContext"
import GlobalStyles from "./GlobalStyles"

const Providers: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <ThemeSwitcherProvider>
            <WordsContextProvider>
                <GlobalStyles />
                {children}
            </WordsContextProvider>
        </ThemeSwitcherProvider>
    )
}
export default Providers