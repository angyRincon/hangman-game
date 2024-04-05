'use server'
import { cookies } from "next/headers"

export const setCookie = (key: string, value: unknown) => {
     cookies().set(key, JSON.stringify(value))
}