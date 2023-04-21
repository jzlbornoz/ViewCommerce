'use client'

import React from 'react'

import style from "../styles/components/Login.module.css";


const LoginPage = () => {

    return (
        <main className={style.LogIn}>
            <h2>Log In</h2>
            <div>
                <input type="text" placeholder="USUARIO" />
                <input type="text" placeholder="PASSWORD" />
                <button >Entrar</button>
            </div>
        </main>
    )
}

export { LoginPage }