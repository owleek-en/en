import React from 'react'
import './NoteBody.css'

export function NoteBody({ children }: Readonly<{children: React.ReactNode}>) {
    return (
        <div className="NoteBody">
            <ul className="NoteList">{children}</ul>
        </div>
    )
}