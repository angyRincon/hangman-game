import InputRadio from "@/components/atoms/InputRadio"
import { SettingsCardForm } from "./SettingsFormTemplateStyled"
import { ChangeEvent, FC, FormEvent, ReactNode } from "react";
import Button from "@/components/atoms/Button";
import { FontFamilyType } from "@/types/settings";

export interface SettingsFormElements {
    value: string;
    label: string;
    checked: boolean;
    labelStyle?: FontFamilyType;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

interface SettingsFormProps {
    elements: SettingsFormElements[],
    submitLabel: string;
    onSubmit: (e: FormEvent<HTMLFormElement>) => void;
    children?: ReactNode
}

const SettingsFormTemplate: FC<SettingsFormProps> = ({ elements, submitLabel, onSubmit, children }) => {
    return (
        <SettingsCardForm onSubmit={onSubmit}>
            {elements.map(element => (
                <InputRadio
                    key={element.value}
                    value={element.value}
                    label={element.label}
                    labelStyle={element.labelStyle}
                    checked={element.checked}
                    onChange={element.onChange}
                />
            ))}

            {children}

            <Button label={submitLabel} type='submit' variant="secondary" />
        </SettingsCardForm>
    )
}
export default SettingsFormTemplate