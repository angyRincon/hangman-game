'use client'

export const useLocalStorage = () => {

    const setItem = (key: string, value: unknown) => {
        localStorage.setItem(key, JSON.stringify(value))
    }


    return {
        setItem
    }
}