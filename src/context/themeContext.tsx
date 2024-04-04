'use client'
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { darkTheme, lightTheme } from "@/theme";
import { ThemeProvider } from "@emotion/react";
import { ReactNode, Suspense, createContext, useContext, useEffect, useState } from "react";

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

export const ThemeSwitcherProvider = ({ children }: { children: ReactNode }) => {
    const { getLocalStorageItem } = useLocalStorage()
    const [settingsData, setSettingsData] = useState<SettingsData>(initialSettings.settingsData)

    const getTheme = () => {
        const savedSettings = getLocalStorageItem('settings')
        savedSettings ? setSettingsData(savedSettings) : setSettingsData(settingsData)
    }

    useEffect(() => {
        getTheme()
    }, [])

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