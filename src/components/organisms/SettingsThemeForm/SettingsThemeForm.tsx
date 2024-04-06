'use client'
import { ChangeEvent, FormEvent, useState } from "react"
import { useSettingsContext } from "@/context/settingsContext"
import { setCookie } from "@/helpers/cookies"
import { ThemeEnum } from "@/types/settings"
import SettingsFormTemplate, { SettingsFormElements } from "@/components/templates/SettingsFormTemplate/SettingsFormTemplate"

const SettingsThemeForm = () => {
    const { text, settings } = useSettingsContext()

    const [theme, setTheme] = useState(settings?.theme)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTheme(e.target.value === ThemeEnum.LIGHT ? ThemeEnum.LIGHT : ThemeEnum.DARK)
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setCookie('settings', { ...settings, theme })
    }

    const elements: SettingsFormElements[] = [
        {
            value: ThemeEnum.LIGHT,
            label: text.lightTheme,
            onChange: handleChange,
            checked: theme === ThemeEnum.LIGHT
        },
        {
            value: ThemeEnum.DARK,
            label: text.darkTheme,
            onChange: handleChange,
            checked: theme === ThemeEnum.DARK
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
export default SettingsThemeForm