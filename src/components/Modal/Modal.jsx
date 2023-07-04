import React, {useState} from 'react'
import { useTransactions } from '../../contexts/TransactionContext'
import styles from '../../styles/Modal.module.css'

const Modal = (props) => {

    const {data, addTransaction} = useTransactions()
    const [value, setValue] = useState(0)
    const [description, setDescription] = useState('')
    const [type, setType] = useState('spent')

    const handleAddTransaction = () => {
        
        console.log( parseFloat(value))

        let newTransaction = {
            // Futuramente mudar para UUID
            id: data.transactions.length + 1,
            description,
            value,
            type,
            date: Date.now()
        }

        addTransaction(newTransaction)

        setValue(0)
        setDescription('')
        
    }

    const handleToggleType = () => {
       
        if(type === 'spent') {
            setType('received')
            return
        }

        if(type === 'received') {
            setType('spent')
            return
        }
    }

    const handleClose = () => {
        props.toggle()
    }

    if(props.show === true) return (
        
        <div className={styles.modalContainer}>
            <div className={styles.modal}>
                <h2>Adicionar informação</h2>
                <div>
                    <input name="spent" type="radio"  checked={type==='spent'} onChange={handleToggleType}/>
                    <label htmlFor="spent">Gasto</label>
                    <input name="received" checked={type==='received'} onChange={handleToggleType}type="radio"/>
                    <label htmlFor="received">Receita</label>
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="valor">Descrição:</label>
                    <input type="text" placeholder='Mensalidade da academia'  onChange={(e) => {setDescription(e.target.value)}}/>
                    <label htmlFor="valor">Valor:</label>
                    <input type="number" placeholder='150.54'  onChange={(e) => {setValue(e.target.value)}}/>
                </div>
                <div className={styles.buttonsContainer}>
                    <button onClick={handleAddTransaction}>Adicionar</button>
                    <button onClick={handleClose}>Cancelar</button>
                </div>
            </div>
        </div>

    )

}

export default Modal