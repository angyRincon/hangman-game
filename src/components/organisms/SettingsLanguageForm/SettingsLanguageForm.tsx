'use client'
import { ChangeEvent, FormEvent, useState } from "react"
import { LanguageEnum } from "@/types/settings"
import { useSettingsContext } from "@/context/settingsContext"
import SettingsFormTemplate, { SettingsFormElements } from "@/components/templates/SettingsFormTemplate/SettingsFormTemplate"
import { setCookie } from "@/helpers/cookies"

const SettingsLanguageForm = () => {
    const { settings, text } = useSettingsContext()
    const [language, setLanguage] = useState(settings?.language)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLanguage(e.target.value === LanguageEnum.ENGLISH ? LanguageEnum.ENGLISH : LanguageEnum.SPANISH)
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setCookie('settings', { ...settings, language })
    }

    const elements: SettingsFormElements[] = [
        {
            value: LanguageEnum.ENGLISH,
            label: text.english,
            onChange: handleChange,
            checked: language === LanguageEnum.ENGLISH,
        },
        {
            value: LanguageEnum.SPANISH,
            label: text.spanish,
            onChange: handleChange,
            checked: language === LanguageEnum.SPANISH,
        }
    ]

    return (
        <SettingsFormTemplate
            elements={elements}
            submitLabel={text.save}
            onSubmit={handleSubmit}
        />
    )
}
export default SettingsLanguageForm