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
    LORA = 'Lora',
    MERIENDA = 'Merienda',
    QUICKSAND = 'Quicksand'
}

export type ThemeType = ThemeEnum.DARK | ThemeEnum.LIGHT
export type LanguageType = LanguageEnum.ENGLISH | LanguageEnum.SPANISH
export type FontType = FontTypeEnum.LORA | FontTypeEnum.MERIENDA | FontTypeEnum.QUICKSAND

export interface Settings {
    fontType: FontType
    language: LanguageType
    theme: ThemeType
}