import React from "react"
import "./NoteTittle.css"

export function NoteItem({ children }: Readonly<{children: React.ReactNode}>) {
    return <h2 className="NoteTittle">{ children }</h2>
}