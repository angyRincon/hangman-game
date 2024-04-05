import { FC, ReactNode } from "react"
import { WordsContextProvider } from "@/context/wordsContext"
import { ThemeSwitcherProvider } from "@/context/settingsContext"
import GlobalStyles from "./GlobalStyles"
import { cookies } from "next/headers"

const Providers: FC<{ children: ReactNode }> = ({ children }) => {
    const cookie = cookies().get('settings')
    const settings = cookie?.value ? JSON.parse(cookie.value) : null

    return (
        <ThemeSwitcherProvider settings={settings}>
            <WordsContextProvider>
                <GlobalStyles />
                {children}
            </WordsContextProvider>
        </ThemeSwitcherProvider>
    )
}
export default Providers