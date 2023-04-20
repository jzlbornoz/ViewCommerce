'use client'

import React from 'react'



const LoginPage = () => {

    const data = {
        module: "screens",
        status: true,
    }

    return (
        <main>
            <h2>Licencia</h2>
            <input type="text" value="USUARIO" />
            <input type="text" value="PASSWORD" />
            <button >Activar</button>
        </main>
    )
}

export { LoginPage }