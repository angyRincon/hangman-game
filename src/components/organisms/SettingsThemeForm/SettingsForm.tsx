'use client'
import InputRadio from "@/components/atoms/InputRadio"
import Button from "@/components/atoms/Button"
import { SettingsCardForm } from "./SettingsThemeFormStyled"
import { ChangeEvent, FormEvent, useState } from "react"
import { useThemeSwitcher } from "@/context/settingsContext"
import { setCookie } from "@/helpers/cookies"
import { ThemeEnum } from "@/types/settings"

const SettingsThemeForm = () => {
    const { settings } = useThemeSwitcher()
    const [theme, setData] = useState(settings.theme)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setData(e.target.value === 'light' ? ThemeEnum.LIGHT : ThemeEnum.DARK)
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setCookie('settings', { ...settings, theme })
    }

    return (
        <SettingsCardForm onSubmit={handleSubmit}>
            <InputRadio
                value="light"
                label="Light Theme"
                onChange={handleChange}
                checked={theme === ThemeEnum.LIGHT}
            />

            <InputRadio
                value="dark"
                label="Dark Theme"
                onChange={handleChange}
                checked={theme === ThemeEnum.DARK}
            />

            <Button label="Save" type='submit' variant="secondary" />
        </SettingsCardForm>
    )
}
export default SettingsThemeForm