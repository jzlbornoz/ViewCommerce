import React from 'react'
import styles from '../styles/components/Screens.module.css'
import { Slider } from './Slider'

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
        <Slider images={["https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/02/google-imagen-ai-imagination.jpg" , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7C9OoHX9gt9LumVvvjngedhcYLNh9Eq_qI0axGHZ-DolKKrUdqgFMrBWtAcput8QBICM&usqp=CAU"]} />
        </>
     
    )
}

export { Screens }