'use client'
import InputRadio from "@/components/atoms/InputRadio"
import Button from "@/components/atoms/Button"
import { SettingsCardForm } from "./SettingsFormStyled"
import { ChangeEvent, FormEvent, useState } from "react"
import { useLocalStorage } from "@/hooks/useLocalStorage"
import { initialSettings, useThemeSwitcher } from "@/context/themeContext"

const SettingsForm = () => {
    const [data, setData] = useState(initialSettings.settingsData)

    const { setSettingsData } = useThemeSwitcher()

    const { setItem } = useLocalStorage()

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setData({
            isLightTheme: e.target.value === 'isLightTheme',
            isDarkTheme: e.target.value === 'isDarkTheme'
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSettingsData(data)
        setItem('settings', data)
    }

    return (
        <SettingsCardForm onSubmit={handleSubmit}>
            <InputRadio
                value="isLightTheme"
                label="Light Theme"
                onChange={handleChange}
                checked={data.isLightTheme}
            />

            <InputRadio
                value="isDarkTheme"
                label="Dark Theme"
                onChange={handleChange}
                checked={data.isDarkTheme}
            />

            <Button label="Save" type='submit' variant="secondary"/>
        </SettingsCardForm>
    )
}
export default SettingsForm