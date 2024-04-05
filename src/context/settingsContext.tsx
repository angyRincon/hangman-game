'use client'
import { darkTheme, lightTheme } from "@/theme";
import { ThemeProvider } from "@emotion/react";
import { ReactNode, createContext, useContext, useState } from "react";

interface SettingsData {
    isLightTheme: boolean,
    isDarkTheme: boolean
}

interface ThemeContextProps {
    settingsData: SettingsData,
    setSettingsData: (settingsData: SettingsData) => void
}

export const initialSettings: ThemeContextProps = {
    settingsData: {
        isLightTheme: true,
        isDarkTheme: false,
    },
    setSettingsData: () => { }
}

const ThemeContext = createContext(initialSettings)

interface ThemeSwitcherProviderProps {
    settings: any,
    children: ReactNode
}

export const ThemeSwitcherProvider = ({ settings, children }: ThemeSwitcherProviderProps) => {
    const [settingsData, setSettingsData] = useState<SettingsData>(settings)

    const values = {
        settingsData,
        setSettingsData
    }

    return (
        <ThemeContext.Provider value={values}>
            <ThemeProvider theme={settingsData.isDarkTheme ? darkTheme : lightTheme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>

    )
}

export const useThemeSwitcher = () => useContext(ThemeContext)