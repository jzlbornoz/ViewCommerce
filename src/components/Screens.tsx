import React from 'react'
import styles from '../styles/components/Screens.module.css'
import Link from 'next/link'

import screensData from '../screensData.json';

const Screens = () => {
    return (
        <>
            <main className={styles.Screens}>
                <h2>Pantallas disponibles</h2>
                <select >
                    {screensData.response.map(screen => (
                        <option key={screen.id}>{`Pantalla: ${screen.id}`}</option>
                    ))}
                </select>
                <button>Activar</button>
            </main>
        </>

    )
}

export { Screens }