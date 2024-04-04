'use client'
import InputRadio from "@/components/atoms/InputRadio"
import Button from "@/components/atoms/Button"
import { SettingsCardForm } from "./SettingsFormStyled"
import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { useLocalStorage } from "@/hooks/useLocalStorage"
import { initialSettings, useThemeSwitcher } from "@/context/themeContext"

const SettingsForm = () => {
    const [data, setData] = useState(initialSettings.settingsData)

    const { settingsData, setSettingsData } = useThemeSwitcher()
    const { getLocalStorageItem, setLocalStoragetItem } = useLocalStorage()

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setData({
            isLightTheme: e.target.value === 'isLightTheme',
            isDarkTheme: e.target.value === 'isDarkTheme'
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSettingsData(data)
        setLocalStoragetItem('settings', data)
    }

    useEffect(() => {
        const savedSettings = getLocalStorageItem('settings')
        savedSettings ? setData(savedSettings) : setData(settingsData)
    }, [])

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