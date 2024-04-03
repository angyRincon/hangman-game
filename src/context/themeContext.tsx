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
        isLightTheme: false,
        isDarkTheme: true,
    },
    setSettingsData: () => { }
}

const ThemeContext = createContext(initialSettings)

export const ThemeSwitcherProvider = ({ children }: { children: ReactNode }) => {
    const [settingsData, setSettingsData] = useState<SettingsData>(initialSettings.settingsData)

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