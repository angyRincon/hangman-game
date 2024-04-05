'use client'
import { initialSettings } from "@/data/settings/config";
import { darkTheme, lightTheme } from "@/theme";
import { Settings, ThemeEnum } from "@/types/settings";
import { ThemeProvider } from "@emotion/react";
import { ReactNode, createContext, useContext } from "react";

interface ThemeContextProps {
    settings: Settings,
}

export const initialSettingsContext: ThemeContextProps = {
    settings: initialSettings
}

const ThemeContext = createContext(initialSettingsContext)

interface ThemeSwitcherProviderProps {
    settings: Settings,
    children: ReactNode
}

export const ThemeSwitcherProvider = ({ settings, children }: ThemeSwitcherProviderProps) => {
    const getTheme = () => {
        switch (settings.theme) {
            case ThemeEnum.LIGHT:
                return lightTheme
            case ThemeEnum.DARK:
                return darkTheme
            default:
                return lightTheme
        }
    }

    const values = {
        settings
    }

    return (
        <ThemeContext.Provider value={values}>
            <ThemeProvider theme={getTheme()}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>

    )
}

export const useThemeSwitcher = () => useContext(ThemeContext)