type LanguageType = 'en' | 'es'
type FontFamilyType = 'Lora' | 'Merienda' | 'Quicksand'

export interface Settings {
    fontFamily: FontFamilyType
    language?: LanguageType
    theme: {
        isLightTheme: boolean,
        isDarkTheme: boolean
    }
}

export enum SettingsTab {
    THEME = 'theme',
    LANGUAGE = 'language',
    FONT = 'font'
}