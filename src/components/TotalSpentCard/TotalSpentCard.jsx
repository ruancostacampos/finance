import React, {useEffect, useState} from 'react'
import { useTransactions } from '../../contexts/TransactionContext'
import greenIcon from '../../assets/greenIcon.svg'
import styles from '../../styles/Card.module.css'
import BRL from '../../utils/BRL'

const TotalSpentCard = () => {
    
    const [total, setTotal] = useState(0)
    const {data} = useTransactions()

    useEffect( () => {
        
        let calculatingTotal = 0

        data.transactions.forEach( (transaction) => {
            calculatingTotal += transaction.value
        })

        setTotal(calculatingTotal)

    }, [data])
    
    
    
    return (
    
        <div className={styles.card}>
            <div>
                <img src={greenIcon} />
                <h3>Total</h3>    
            </div>
            <p>{BRL().format(total)}</p>
        </div>

    )
}

export default TotalSpentCard