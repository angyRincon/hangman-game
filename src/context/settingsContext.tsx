'use client'
import Loading from "@/app/loading";
import { englsighAlphabet, spanishAlphabet } from "@/data/alphabet";
import { englishCategories } from "@/data/categories/english/categories";
import { spanishCategories } from "@/data/categories/spanish/categories";
import { englishText, spanishText } from "@/data/projectTexts/texts";
import { englishTabItems, initialSettings, spanishTabItems } from "@/data/settings/config";
import { setCookie } from "@/helpers/cookies";
import { darkTheme, lightTheme } from "@/theme";
import { CategoryItem } from "@/types/categories";
import { LanguageEnum, Settings, SettingsTabItems, ThemeEnum } from "@/types/settings";
import { TextTypes } from "@/types/texts";
import { ThemeProvider } from "@emotion/react";
import { ReactNode, createContext, useContext, useEffect } from "react";

interface ThemeContextProps {
    settings: Settings | null,
    text: TextTypes,
    categories: CategoryItem[]
    tabItems: SettingsTabItems[]
    alphabet: string[]
}

export const initialSettingsContext: ThemeContextProps = {
    settings: initialSettings,
    text: {} as TextTypes,
    categories: {} as CategoryItem[],
    tabItems: {} as SettingsTabItems[],
    alphabet: []
}

const ThemeContext = createContext(initialSettingsContext)

interface ThemeSwitcherProviderProps {
    settings: Settings | null,
    children: ReactNode
}

export const ThemeSwitcherProvider = ({ settings, children }: ThemeSwitcherProviderProps) => {

    const handleSaveCookie = () => {
        if (!settings) setCookie('settings', initialSettings)
    }

    useEffect(() => {
        handleSaveCookie()
    }, [])


    const getLanguageItems = () => {
        switch (settings?.language) {
            case LanguageEnum.ENGLISH:
                return {
                    text: englishText,
                    categories: englishCategories,
                    tabItems: englishTabItems,
                    alphabet: englsighAlphabet
                }
            case LanguageEnum.SPANISH:
                return {
                    text: spanishText,
                    categories: spanishCategories,
                    tabItems: spanishTabItems,
                    alphabet: spanishAlphabet
                }
            default:
                return {
                    text: englishText,
                    categories: englishCategories,
                    tabItems: englishTabItems,
                    alphabet: englsighAlphabet
                }
        }
    }

    const getTheme = () => {
        switch (settings?.theme) {
            case ThemeEnum.LIGHT:
                return lightTheme
            case ThemeEnum.DARK:
                return darkTheme
            default:
                return lightTheme
        }
    }

    const values = {
        settings,
        text: getLanguageItems().text,
        categories: getLanguageItems().categories,
        tabItems: getLanguageItems().tabItems,
        alphabet: getLanguageItems().alphabet
    }

    if (!settings) return <Loading />
    return (
        <ThemeContext.Provider value={values}>
            <ThemeProvider theme={getTheme()}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>

    )
}

export const useSettingsContext = () => useContext(ThemeContext)