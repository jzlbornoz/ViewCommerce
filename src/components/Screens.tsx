import React from 'react'
import styles from '../styles/components/Screens.module.css'
import Link from 'next/link'

const Screens = () => {
    return (
        <>
            <main className={styles.Screens}>
                <h2>Pantallas disponibles</h2>
                <select >
                    <option value="">Pantalla 1</option>
                    <option value="">Pantalla 2</option>
                    <option value="">Pantalla 3</option>
                </select>
                <button>Activar</button>
            </main>
        </>

    )
}

export { Screens }