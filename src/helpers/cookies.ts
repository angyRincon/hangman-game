'use server'
import { cookies } from "next/headers"

export const setCookie = async (key: string, value: unknown) => {
     cookies().set(key, JSON.stringify(value))
}