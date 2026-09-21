import React from "react"
import "./NoteItem.css"

export function NoteItem({ children }: Readonly<{children: React.ReactNode}>) {
    return <li className="NoteItem">{ children }</li>
}