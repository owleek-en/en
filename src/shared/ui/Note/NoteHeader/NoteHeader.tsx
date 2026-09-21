import React from "react"
import "./NoteHeader.css"

export function NoteHeader({ children }: Readonly<{children: React.ReactNode}>) {
    return <h1 className="NoteHeader">{ children }</h1>
}