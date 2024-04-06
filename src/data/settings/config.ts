import { FontTypeEnum, LanguageEnum, Settings, SettingsTabItems, ThemeEnum } from "@/types/settings";

export const initialSettings: Settings = {
    fontType: FontTypeEnum.LORA,
    language: LanguageEnum.ENGLISH,
    theme: ThemeEnum.LIGHT,
}

export const englishTabItems: SettingsTabItems[] = [
    {
        id: 'theme',
        label: 'Theme'
    },
    {
        id: 'language',
        label: 'Language'
    },
    {
        id: 'font',
        label: 'Font'
    }
]

export const spanishTabItems: SettingsTabItems[] = [
    {
        id: 'theme',
        label: 'Tema'
    },
    {
        id: 'language',
        label: 'Idioma'
    },
    {
        id: 'font',
        label: 'Fuente'
    }
]