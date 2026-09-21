import React from "react"
import { NoteHeader } from "./NoteHeader/NoteHeader"
import { NoteBody } from "./NoteBody/NoteBody"
import "./Note.css"

export function Note({ children, title }: Readonly<{children: React.ReactNode, title: string}>) {
    return (
        <div className="Note">
            <NoteHeader>{title}</NoteHeader>
            <NoteBody>{children}</NoteBody>
        </div>
    ) 
}