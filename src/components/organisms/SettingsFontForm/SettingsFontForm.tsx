'use client'
import { Lora, Merienda, Quicksand } from "next/font/google";
import SettingsFormTemplate from "@/components/templates/SettingsFormTemplate"
import { useSettingsContext } from "@/context/settingsContext"
import { FontTypeEnum, FontFamilyType } from "@/types/settings"
import { ChangeEvent, FormEvent, useState } from "react"
import { SettingsFormElements } from "@/components/templates/SettingsFormTemplate/SettingsFormTemplate";
import { setCookie } from "@/helpers/cookies";

const lora = Lora({ subsets: ["latin"] });
const merienda = Merienda({ subsets: ["latin"] });
const quicksand = Quicksand({ subsets: ["latin"] });

const SettingsFontForm = () => {
    const { text, settings } = useSettingsContext()
    const [fontType, setFontType] = useState(settings?.fontType)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value as FontFamilyType

        switch (value) {
            case FontTypeEnum.LORA:
                setFontType(FontTypeEnum.LORA)
            case FontTypeEnum.MERIENDA:
                setFontType(FontTypeEnum.MERIENDA)
            case FontTypeEnum.QUICKSAND:
                setFontType(FontTypeEnum.QUICKSAND)
            default:
                setFontType(FontTypeEnum.LORA)
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
            labelStyle: lora,
            onChange: handleChange,
            checked: fontType === FontTypeEnum.LORA
        },
        {
            value: FontTypeEnum.MERIENDA,
            label: text.merienda,
            labelStyle: merienda,
            onChange: handleChange,
            checked: fontType === FontTypeEnum.MERIENDA
        },
        {
            value: FontTypeEnum.QUICKSAND,
            label: text.quickSand,
            labelStyle: quicksand,
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