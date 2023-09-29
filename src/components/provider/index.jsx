"use client"
import { NextUIProvider } from "@nextui-org/react"

export const Provider = ({ childern }) => {
  return <NextUIProvider>{childern}</NextUIProvider>;
}
