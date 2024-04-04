'use client'

export const useLocalStorage = () => {
    const getLocalStorageItem = (key: string) => {
        const item = localStorage.getItem(key)
        return item ? JSON.parse(item) : null
    }

    const setLocalStoragetItem = (key: string, value: unknown) => {
        localStorage.setItem(key, JSON.stringify(value))
    }


    return {
        getLocalStorageItem,
        setLocalStoragetItem
    }
}