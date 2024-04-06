'use client'
import SettingsFormTemplate from "@/components/templates/SettingsFormTemplate"
import { useSettingsContext } from "@/context/settingsContext"
import { FontTypeEnum, FontFamilyType } from "@/types/settings"
import { ChangeEvent, FormEvent, useState } from "react"
import { SettingsFormElements } from "@/components/templates/SettingsFormTemplate/SettingsFormTemplate";
import { setCookie } from "@/helpers/cookies";

const SettingsFontForm = () => {
    const { text, settings } = useSettingsContext()
    const [fontType, setFontType] = useState(settings?.fontType)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value as FontFamilyType

        switch (value) {
            case FontTypeEnum.LORA:
                return setFontType(FontTypeEnum.LORA)
            case FontTypeEnum.MERIENDA:
                return setFontType(FontTypeEnum.MERIENDA)
            case FontTypeEnum.QUICKSAND:
                return setFontType(FontTypeEnum.QUICKSAND)
            default:
                return setFontType(FontTypeEnum.LORA)
        }
    }


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setCookie('settings', { ...settings, fontType })
    }

    const elements: SettingsFormElements[] = [
        {
            value: FontTypeEnum.LORA,
            label: text.lora,
            labelStyle: FontTypeEnum.LORA,
            onChange: handleChange,
            checked: fontType === FontTypeEnum.LORA
        },
        {
            value: FontTypeEnum.MERIENDA,
            label: text.merienda,
            labelStyle: FontTypeEnum.MERIENDA,
            onChange: handleChange,
            checked: fontType === FontTypeEnum.MERIENDA
        },
        {
            value: FontTypeEnum.QUICKSAND,
            label: text.quickSand,
            labelStyle: FontTypeEnum.QUICKSAND,
            onChange: handleChange,
            checked: fontType === FontTypeEnum.QUICKSAND
        },
    ]


    return (
        <SettingsFormTemplate
            elements={elements}
            submitLabel={text.save}
            onSubmit={handleSubmit}
        />
    )
}
export default SettingsFontForm