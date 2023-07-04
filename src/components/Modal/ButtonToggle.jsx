import React, {useState} from 'react'
import Modal from './Modal'
import styles from '../../styles/ButtonToggle.module.css'

const ButtonToggle = () => {

    const [showModal, setShowModal] = useState(false)

    return (
        
        <>
            <div className={styles.buttonContainer} onClick={() => { setShowModal(!showModal)} }>
                <p>Adicionar</p>
            </div>
            <Modal show={showModal} toggle={() => { setShowModal(false)}}/>
        </>

    )
}

export default ButtonToggle