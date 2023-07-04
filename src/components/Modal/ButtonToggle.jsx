import React, {useState} from 'react'
import Modal from './Modal'
import styles from '../../styles/ButtonToggle.module.css'

const ButtonToggle = () => {

    //Futuramente criar um modal para editar ou deletar, já existem essas funções implementadas no Context

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