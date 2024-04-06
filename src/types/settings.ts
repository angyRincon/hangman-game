export enum SettingsTab {
    THEME = 'theme',
    LANGUAGE = 'language',
    FONT = 'font'
}

export enum ThemeEnum {
    DARK = 'dark',
    LIGHT = 'light'
}

export enum LanguageEnum {
    SPANISH = 'es',
    ENGLISH = 'en'
}

export enum FontTypeEnum {
    LORA = 'lora',
    MERIENDA = 'merienda',
    QUICKSAND = 'quicksand'
}

export type ThemeType = ThemeEnum.DARK | ThemeEnum.LIGHT
export type LanguageType = LanguageEnum.ENGLISH | LanguageEnum.SPANISH
export type FontFamilyType = FontTypeEnum.LORA | FontTypeEnum.MERIENDA | FontTypeEnum.QUICKSAND

export interface Settings {
    fontType: FontFamilyType
    language: LanguageType
    theme: ThemeType
}

export interface SettingsTabItems {
    id: string;
    label: string;
}