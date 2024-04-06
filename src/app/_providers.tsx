import { FC, ReactNode } from "react"
import { WordsContextProvider } from "@/context/wordsContext"
import { ThemeSwitcherProvider } from "@/context/settingsContext"
import GlobalStyles from "./GlobalStyles"
import { cookies } from "next/headers"
import { initialSettings } from "@/data/settings/config"
import { Settings } from "@/types/settings"

const Providers: FC<{ children: ReactNode }> = ({ children }) => {
    const cookie = cookies().get('settings')
    const settings = cookie?.value ? JSON.parse(cookie.value) as Settings : null

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