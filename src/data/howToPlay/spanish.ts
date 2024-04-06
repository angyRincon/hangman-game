import { HowToPlayCardProps } from "@/components/molecules/HowToPlayCard/HowToPlayCard";

export const howToPlaySpanishInfo : HowToPlayCardProps[] = [
    {
        position: '01',
        title: 'Elija una categoría',
        content: 'Primero, elija una categoría de palabras, como animales o películas. Luego, la computadora selecciona aleatoriamente una palabra secreta de ese tema y le muestra espacios en blanco para cada letra de la palabra.'
    },
    {
        position: '02',
        title: 'Adivinar Letras',
        content: 'Turno para adivinar letras. La computadora llena los espacios en blanco relevantes si su suposición es correcta. Si está equivocado, pierde algo de salud, que se vacía después de ocho suposiciones incorrectas.'
    },
    {
        position: '03',
        title: 'Ganar o Perder',
        content: 'Gana al adivinar todas las letras de la palabra antes de que se agote su salud. Si la barra de salud se vacía antes de adivinar la palabra, pierde.'
    }
]