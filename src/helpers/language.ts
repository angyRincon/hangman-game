
import { cookies } from "next/headers"
import { initialSettings } from "@/data/settings/config"
import { englishText, spanishText } from "@/data/projectTexts/texts"
import { LanguageEnum } from "@/types/settings"

const cookie = cookies().get('settings')
const settings = cookie?.value ? JSON.parse(cookie.value) : initialSettings
const language = settings.language

export const getText = async () => {
    switch (language) {
        case LanguageEnum.ENGLISH:
            return englishText
        case LanguageEnum.SPANISH:
            return spanishText
        default:
            return englishText
    }
}